export default async function handler(req, res) {
  // Array of URLs for the PDF files in the public folder
  const urls = [
    "/pdfs/MitDepot_Recovery_Ark.pdf",
    "/pdfs/MitDepot_AntiScam.pdf",
    "/pdfs/MitDepot_OnePager.pdf"
  ];
  res.status(200).json({ urls });
}
