import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "../../lib/mongodb"

// Fake users data

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>
) {

    if (_req.method === 'POST') {
        const newDentist = _req.body
        // Process a POST request
        const client = await clientPromise
        const db = client.db("dentist-booker");
        const dentist = await db.collection('dentist').insertOne(newDentist)
        return res.json(dentist)
    } else if (_req.method === 'GET') {
        const client = await clientPromise
        const db = client.db("dentist-booker");
        const dentists = await db.collection('dentist').find({}).toArray()
        console.log(dentists)
        res.json(dentists)
    } else {
        res.send([])
    }
}