import { getPostData } from "../../lib/posts";

export default async function handler(req, res) {
  if (!req.query.id) return res.status(200).json({});
  const post = await getPostData(req.query.id)
  res.status(200).json(post)
}