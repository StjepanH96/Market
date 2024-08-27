export default async function handler(req, res) {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Query parameter q is required' });
  }

  const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('Error fetching data:', response.status, response.statusText, data);
      return res.status(response.status).json({ error: response.statusText });
    }

    const filteredResults = data.products.filter(product =>
      product.title.toLowerCase().includes(q.toLowerCase())
    );

    const limitedResults = filteredResults.slice(0, 10);

    res.status(200).json({ results: limitedResults });
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
