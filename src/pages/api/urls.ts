// urls.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      const urls = await prisma.targetUrl.findMany();
      res.status(200).json(urls);
      break;
    case "POST":
      const { url, description } = req.body;
      const newUrl = await prisma.targetUrl.create({
        data: { url, description },
      });
      res.status(201).json(newUrl);
      break;
    case "PUT":
      const { id, isActive } = req.body;
      const updatedUrl = await prisma.targetUrl.update({
        where: { id },
        data: { isActive },
      });
      res.status(200).json(updatedUrl);
      break;
    case "DELETE":
      const { deleteId } = req.body;
      await prisma.targetUrl.delete({
        where: { id: deleteId },
      });
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
