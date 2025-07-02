import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query;
  if (typeof file !== 'string') {
    return res.status(400).json({ error: 'Invalid file' });
  }
  const filePath = path.join(process.cwd(), 'public', 'pdfs', file);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).json({ error: 'File not found' });
  });
}