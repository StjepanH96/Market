export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("Request body:", req.body); // Log the request body to debug
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req.body)
            });
  
            const data = await response.json();
            if (response.ok) {
                // Set token with 1-minute expiry
                res.setHeader('Set-Cookie', `token=${data.token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=60`);
                res.status(200).json(data);
            } else {
                console.log("Response from DummyJson:", data); // Log the response from DummyJson
                res.status(response.status).json(data);
            }
        } catch (error) {
            console.error('Server error:', error); // Log any server errors
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
