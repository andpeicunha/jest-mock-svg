// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Product {
  id: number;
  name: string;
  valor: string;
}
type Data = Product | Product[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = [
    { id: 1, name: "Produto 1", valor: "1,20" },
    { id: 2, name: "Produto 2", valor: "2,20" },
    { id: 3, name: "Produto 3", valor: "3,20" },
    { id: 4, name: "Produto 4", valor: "4,20" },
    { id: 5, name: "Produto 5", valor: "5,20" },
  ];

  res.status(200).json(data);
}
