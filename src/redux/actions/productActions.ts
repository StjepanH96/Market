import { AppThunk } from '../store';
import {
  fetchProducts,
  fetchProductsByCategory, fetchSortedProductsByPrice, fetchProductsCategoryList, fetchProductById} from '../../pages/api/index';
import {
  initializeProducts,
   setLoading,
  setError,
  appendProducts,
  setSortedAndFilteredProductsByPrice,
  initializeCategoryList,
  initializeProductsByCategory,
  initializeProductDetails
  
} from '../reducers/products/productSlice';

const fetchInitializeProductsAction = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const products = await fetchProducts();
    dispatch(initializeProducts(products));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    dispatch(setError('Failed to fetch products'));
  } finally {
    dispatch(setLoading(false));
  }
};


const fetchInitiliazeProductByIdAction = (productId: number): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const productDetails = await fetchProductById(productId);
    dispatch(initializeProductDetails(productDetails));
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}:`, error);
    dispatch(setError(`Failed to fetch product details for ID ${productId}`));
  } finally {
    dispatch(setLoading(false));
  }
};
const fetchInitiliazeSortedProductsByPrice =
  (
    sortBy: string,
    order: string,
  
  ): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const sortedFilteredData = await fetchSortedProductsByPrice(
        sortBy,
        order
      );
      dispatch(setSortedAndFilteredProductsByPrice(sortedFilteredData));
    } catch (error) {
      console.error('Failed to fetch filtered Products:', error);
      dispatch(setError('Failed to fetch filtered Products'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchAppendProductsAction = (limit: number): AppThunk => async (dispatch, getState) => {
    dispatch(setLoading(true));
  
    const { products, hasMore } = getState().products.products;
  
    // Ako nema više proizvoda za dohvaćanje, prekini akciju
    if (!hasMore) {
      dispatch(setLoading(false));
      return;
    }
  
    // Izračunaj skip vrednost na osnovu broja već dohvaćenih proizvoda
    const skip = products.length;
  
    try {
      const appendProductsList = await fetchProducts({ limit, skip });
      dispatch(appendProducts(appendProductsList));
    } catch (error) {
      console.error('Failed to fetch more products:', error);
      dispatch(setError('Failed to fetch more products'));
    } finally {
      dispatch(setLoading(false));
    }
  };
  const fetchProductsByCategoryAction = (categoryName: string): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
  
    try {
      const productsByCategory = await fetchProductsByCategory(categoryName);
      dispatch(initializeProductsByCategory(productsByCategory));
    } catch (error) {
      console.error('Failed to fetch products by category:', error);
      dispatch(setError('Failed to fetch products by category'));
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  const fetchProductsCategoryListAction = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
  
    try {
      const categoryList = await fetchProductsCategoryList();
      dispatch(initializeCategoryList({ categories: categoryList }));
    } catch (error) {
      console.error('Failed to fetch category list:', error);
      dispatch(setError('Failed to fetch category list'));
    } finally {
      dispatch(setLoading(false));
    }
  };

export {
  fetchProductsByCategoryAction,
  fetchProductsCategoryListAction,
  fetchInitializeProductsAction,
  fetchInitiliazeSortedProductsByPrice,
  fetchAppendProductsAction,
  fetchInitiliazeProductByIdAction
};
