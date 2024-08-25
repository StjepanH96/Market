import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useProductData = () => {
  const  products = useSelector((state: RootState) => state.products.products);
  const productsFilteredByPrice = useSelector(
    (state: RootState) => state.products.products.sortedAndFilteredProducts
  );
  const productsDetails = useSelector(
    (state: RootState) => state.products.products.productDetails
  );
  const productsByCategory = useSelector((state: RootState) => state.products.products);
  const productsCategoryList= useSelector(
    (state: RootState) => state.products.products.categories
  );
  const hasMore = useSelector((state: RootState) => state.products.products.hasMore);
  const loading = useSelector((state: RootState) => state.products.products.loading);
  const error = useSelector((state: RootState) => state.products.products.error);

  return {
    products,
    productsByCategory,
    productsCategoryList,
    productsDetails,
    productsFilteredByPrice,
    hasMore,
    loading,
    error,
  };
};
