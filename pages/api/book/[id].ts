import { NextApiRequest, NextApiResponse } from "next";


export default function bookHandler(_req: NextApiRequest,  res: NextApiResponse<any>) {   
    console.log('clear')
    res.send('Hllo')
}