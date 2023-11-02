//old API route

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  console.log(req.cookies);

  res.status(200).end();
};

export default handler;
