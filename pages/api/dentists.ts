import type { NextApiRequest, NextApiResponse } from 'next'

// Fake users data

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // Get data from your database
    res.status(200).json([1, 2])
}