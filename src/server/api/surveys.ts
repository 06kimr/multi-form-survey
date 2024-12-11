import express from "express";
import path from "path";
import { QuestionData } from "../../models/question";
import { SectionData } from "../../types/app";
import JsonStorage from "../../utils/jsonStorage";

const router = express.Router();
const storage = new JsonStorage<{
  sections: SectionData[];
  emailCollected: boolean;
  responses: SurveyResponse[];
}>(path.join(__dirname, "../data/surveys.json"));

type SurveyResponse = Record<
  SectionData["id"],
  Record<QuestionData["id"], string>
>;

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

router.post("/:id/responses", (req: any, res: any) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  storage.set(id, {
    ...data,
    responses: [...[data.responses ?? []], req.body],
  });

  return res.status(201).json({ message: "Response added" });
});

export default router;
