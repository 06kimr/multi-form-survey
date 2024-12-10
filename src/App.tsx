import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/common/MainLayout";
import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { SurveyStoreProvider } from "./store";
import Formpage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <SurveyStoreProvider>
          <Routes>
            <Route path="/surveys/new" element={<CreatePage />} />
            <Route path="/surveys/:surveyId" element={<Formpage />} />
            <Route path="/surveys/:surveyId" element={<AdminPage />}>
              <Route path="edit" element={<EditPage />} />
              <Route path="responses" element={<div>응답2s</div>} />
            </Route>
          </Routes>
        </SurveyStoreProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
