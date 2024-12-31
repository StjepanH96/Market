const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchProducts = async ({ limit = 10, skip = 0 }) => {
let url = `${BASE_URL}/products?limit=${encodeURIComponent(limit)}&skip=${encodeURIComponent(skip)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'  
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export const refreshToken = async () => {
  const response = await fetch('/api/refresh', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          refreshToken: '',
          expiresInMins: 30
      })
  });

};
export const fetchProductsByCategory = async (categoryName: string | string[] | undefined, limit = 16) => {
  const url = `${BASE_URL}/products/category/${encodeURIComponent(String(categoryName))}?limit=${limit}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category ${categoryName}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const fetchSortedProductsByPrice = async (sortBy = 'title', order = 'asc') => {
  const url = `${BASE_URL}/products?sortBy=${sortBy}&order=${order}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch sorted products: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching sorted products:', error);
    throw error;
  }
};

export const fetchProductsCategoryList = async () => {

  const url = `${BASE_URL}/products/categories`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch categories`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }

}

export const fetchProductById = async (productId:string | string[]) => {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${productId}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};