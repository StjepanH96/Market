import { AppThunk } from '../store';
import {
  fetchProducts,
  fetchProductsByCategory, fetchSortedProductsByPrice, fetchProductsCategoryList, fetchProductById} from '../../pages/api/index';
import {
  initializeProducts,
   setLoading,
  setError,
  setSortedAndFilteredProductsByPrice,
  initializeCategoryList,
  initializeProductsByCategory,
  initializeProductDetails
  
} from '../reducers/products/productSlice';

interface FetchProductsParams {
  page: number;
  limit: number;
}

const fetchInitializeProductsAction = ({ page, limit }: FetchProductsParams) => async (dispatch: any) => {
  const skip = (page - 1) * limit;
  try {
    const data = await fetchProducts({ limit, skip });
    // Ensure the payload structure matches what the reducer expects
    dispatch(initializeProducts(data)); // Use the action creator for consistency
  } catch (error) {
    console.error('Error:', error);
    // Dispatching error with potentially a more descriptive error message
    dispatch(setError('Failed to fetch products: ' ));
  }
};
const fetchInitiliazeProductByIdAction = (productId: string | string[]): AppThunk => async (dispatch) => {
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

  
  const fetchProductsByCategoryAction = (categoryName: string | string[] | undefined): AppThunk => async (dispatch) => {
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
  fetchInitiliazeProductByIdAction
};
