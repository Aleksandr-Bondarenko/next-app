import socialsData from "./data/socials-data.json";

export default function someFn(req, res) {
  if (req.method === "GET") {
    res.status(200).json(socialsData);
  }
}
