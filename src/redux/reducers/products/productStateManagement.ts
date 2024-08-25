import { fetchProductsByCategory } from '@/pages/api';
import { useAppDispatch } from '../../../lib/storeHooks';
import {
  fetchAppendProductsAction,
  fetchInitializeProductsAction,
  fetchInitiliazeSortedProductsByPrice,
  fetchProductsByCategoryAction,
  fetchProductsCategoryListAction
} from '../../actions/productActions';
import { useCallback } from 'react';

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const initializeProductsState = useCallback(() => {
    dispatch(fetchInitializeProductsAction());
  }, [dispatch]);

  /*
  const initializeProductDetails = useCallback(
    (productId: string | string[] | undefined) => {
      dispatch(fetchInitializeProductDetails(productId));
    },
    [dispatch]
  );

  */

  const initializeProductsByPriceState = useCallback((sortBy:string, order:string ) => {
    dispatch(fetchInitiliazeSortedProductsByPrice(sortBy, order));
  }, [dispatch]);

  const initializeProductsByCategoryState= useCallback((categoryName:string ) => {
    dispatch(fetchProductsByCategoryAction(categoryName));
  }, [dispatch]);

  const initializeProductsByCategoryListState= useCallback(() => {
    dispatch(fetchProductsCategoryListAction());
  }, [dispatch]);


  const initializeProductsByAppendState= useCallback((limit:number) => {
    dispatch(fetchAppendProductsAction(limit));
  }, [dispatch]);

  return {
  initializeProductsByAppendState,
  initializeProductsByCategoryListState,
  initializeProductsByCategoryState,
  initializeProductsByPriceState,
  initializeProductsState
  };
};
