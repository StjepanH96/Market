export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch('https://dummyjson.com/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body)
            });

            const data = await response.json();
            if (response.ok) {

                res.setHeader('Set-Cookie', `token=${data.token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=60`);
                res.status(200).json(data);
            } else {
                res.status(response.status).json(data);
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
