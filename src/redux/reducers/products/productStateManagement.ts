import { fetchProductsByCategory } from '@/pages/api';
import { useAppDispatch } from '../../../lib/storeHooks';
import {
  fetchInitializeProductsAction,
  fetchInitiliazeSortedProductsByPrice,
  fetchProductsByCategoryAction,
  fetchProductsCategoryListAction,
  fetchInitiliazeProductByIdAction
} from '../../actions/productActions';
import { useCallback } from 'react';

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const initializeProductsState = useCallback(({ page, limit }: { page: number; limit: number }) => {
    dispatch(fetchInitializeProductsAction({ page, limit }));
}, [dispatch]);
  
  const initializeProductDetails = useCallback(
    (productId: string | string[] ) => {
      dispatch(fetchInitiliazeProductByIdAction(productId));
    },
    [dispatch]
  );
  

  const initializeProductsByPriceState = useCallback((sortBy:string, order:string ) => {
    dispatch(fetchInitiliazeSortedProductsByPrice(sortBy, order));
  }, [dispatch]);

  const initializeProductsByCategoryState= useCallback((categoryName:string | string[] | undefined ) => {
    dispatch(fetchProductsByCategoryAction(categoryName));
  }, [dispatch]);

  const initializeProductsByCategoryListState= useCallback(() => {
    dispatch(fetchProductsCategoryListAction());
  }, [dispatch]);



  return {

  initializeProductsByCategoryListState,
  initializeProductsByCategoryState,
  initializeProductsByPriceState,
  initializeProductsState,
  initializeProductDetails
  };
};
