import express from "express";
import JsonStorage from "../../utils/jsonStorage";
import path from "path";
import { SectionData, Statistics, SurveyResponse } from "../../types/app";
import { getStatistics } from "../../utils/statistics";

const router = express.Router();
const storage = new JsonStorage<{
  sections: SectionData[];
  emailCollected: boolean;
  responses: SurveyResponse[];
}>(path.join(__dirname, "../data/surveys.json"));

router.get("/", (_req: any, res: any) => {
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
  });
  return res.json({ id });
});

router.get("/:id", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.json(data);
});

router.post("/:id/responses", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  storage.set(id, {
    ...data,
    responses: [...(data.responses ?? []), req.body],
  });

  return res.status(201).json({ message: "Response added" });
});

router.get("/:id/statistics", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  const { responses, sections } = data;

  const statistics: Statistics = getStatistics(responses, sections);

  return res.json({ statistics, count: responses.length });
});

export default router;
