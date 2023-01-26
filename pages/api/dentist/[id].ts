import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "../../../lib/mongodb";

// Fake users data

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>
) {

    if (_req.method === 'GET') {
        const { id } = _req.query;
        const client = await clientPromise
        const db = client.db("dentist-booker");

        let o_id = new ObjectId(id as string);
        const dentist = await db.collection('dentist').findOne({ "_id": o_id })
        
        res.json(dentist)
    }

}