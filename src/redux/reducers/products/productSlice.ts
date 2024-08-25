import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductResponse } from '@/types/products';
import { Category, CategoryResponse } from '@/types/categories';

export interface ProductState {
  products: Product[];
  productDetails: Product | null;
  categories: Category[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  sortedAndFilteredProducts: Product[];
}

const initialState: ProductState = {
  products: [],
  productDetails: null,
  categories: [],
  loading: false,
  error: null,
  hasMore: true,
  sortedAndFilteredProducts: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    initializeProducts: (state, action: PayloadAction<ProductResponse>) => {
      state.products = action.payload.products;
      state.loading = false;
      state.error = null;
    },
    initializeProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetails = action.payload;
      state.loading = false;
      state.error = null;
    },

    initializeCategoryList: (state, action: PayloadAction<CategoryResponse>) => {
      state.categories = action.payload.categories;
      state.loading = false;
      state.error = null;
    },
    initializeProductsByCategory: (state, action: PayloadAction<ProductResponse>) => {
      state.products = action.payload.products;
      state.loading = false;
      state.error = null;
    },
    appendProducts: (state, action: PayloadAction<ProductResponse>) => {
      state.products = [...state.products, ...action.payload.products];
      state.error = null;
      // Postavi hasMore na osnovu broja dohvaćenih proizvoda
      state.hasMore = action.payload.skip + action.payload.limit < action.payload.total;
    },
    setSortedAndFilteredProductsByPrice: (state, action: PayloadAction<Product[]>) => {
      state.sortedAndFilteredProducts = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  initializeProducts,
  initializeProductDetails,
  setLoading,
  setError,
  appendProducts,
  setSortedAndFilteredProductsByPrice,
  initializeCategoryList,
  initializeProductsByCategory,
} = productSlice.actions;

export default productSlice.reducer;
