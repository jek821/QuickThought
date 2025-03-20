// /pages/api/count.js
import { incrementCount, getCount } from '../../models/count';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Get the current count from the database
        const count = await getCount();
        res.status(200).json({ count });
    } else if (req.method === 'POST') {
        // Increment the count in the database
        const count = await incrementCount();
        res.status(200).json({ count });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
