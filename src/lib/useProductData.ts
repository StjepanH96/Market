import { RootState } from '@/redux/store';
import { Product } from '@/types/products';
import { useSelector } from 'react-redux';

export const useProductData = () => {
  const products = useSelector((state: RootState) => state.products.products.products as Product[]);

  console.log(products);
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
  const totalPages = useSelector((state: RootState) => state.products.products.totalPages);
  const currentPage = useSelector((state: RootState) => state.products.products.currentPage);


  return {
    products,
    productsByCategory,
    productsCategoryList,
    productsDetails,
    productsFilteredByPrice,
    hasMore,
    loading,
    error,
    totalPages,
    currentPage
  };
};
