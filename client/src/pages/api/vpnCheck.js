export default async function handler(req, res) {
  const { ip } = req.query

  if (!ip) {
    return res.status(400).json({ error: "IP address is required" })
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_PROXYCHECK_API_KEY
    const response = await fetch(
      `https://proxycheck.io/v2/${ip}?key=${apiKey}&vpn=1&asn=1`,
    )
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch VPN data" })
  }
}
