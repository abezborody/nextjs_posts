import type { NextApiRequest, NextApiResponse } from "next";

export default function PostApi(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      title: "hello",
      body: "world",
    },
  ]);
}
