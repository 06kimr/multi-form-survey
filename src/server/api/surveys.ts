import express from "express";
import path from "path";
import { SectionData } from "../../models/section";
import JsonStorage from "../../utils/jsonStorage";

const router = express.Router();
const storage = new JsonStorage<{
  sections: SectionData[];
  emailCollected: boolean;
}>(path.join(__dirname, "../data/surveys.json"));

router.get("/", (req: any, res: any) => {
  return res.json(storage.getAll());
});

router.post("/", (req: any, res: any) => {
  const id = Date.now();
  storage.set(id, {
    ...req.body,
    emailCollected: false,
  });
  return res.json({ id });
});

router.put("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);
  storage.set(id, req.body);
  return res.json({ id });
});

router.patch("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);
  storage.set(id, {
    ...data,
    ...req.body,
    ...req.body,
  });
  return res.json({ id });
});

router.get("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    return res.status(404).json({ message: "Not Found" });
  }
  return res.json(data);
});

export default router;
