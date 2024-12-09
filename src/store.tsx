import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section, { SectionData } from "./models/section";
import callAPI from "./utils/api";

class SurveyStore {
  sections: Section[];
  focusedSectionId: number | null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  addSection() {
    const section = new Section();
    this.sections.push(section);
    this.focusedSectionId = section.id;
  }

  setFocusedSectionId(id: number) {
    this.focusedSectionId = id;
  }

  addQuestion() {
    const section = this.sections.find(
      (section) => section.id === this.focusedSectionId
    );

    if (section) {
      section.addQuestion();
    }
  }

  fetchSurvey(id: number) {
    callAPI<{ sections: SectionData[] }>(`/surveys/${id}`).then(
      ({ sections }) => {
        this.sections = sections.map((section) => new Section(section));
      }
    );
  }
}

const surveyStore = new SurveyStore();
const SurveyStoreContext = createContext(surveyStore);

export const useSurveyStore = () => useContext(SurveyStoreContext);

export const SurveyStoreProvider = ({ children }: PropsWithChildren) => (
  <SurveyStoreContext.Provider value={surveyStore}>
    {children}
  </SurveyStoreContext.Provider>
);
