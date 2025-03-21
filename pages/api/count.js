import { incrementCount, getCount, resetCount } from '../../models/count';

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const count = await getCount();
            res.status(200).json({ count });
        } else if (req.method === 'POST') {
            await incrementCount();
            const count = await getCount(); // Now using the GET logic to return updated value
            res.status(200).json({ count });
        } else if (req.method === 'DELETE') {
            await resetCount();
            res.status(200).json({ message: 'Count reset' });
        }
        else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error("API error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
