import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import OutcomesPage from "./pages/OutcomesPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import AcademyPage from "./pages/AcademyPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="outcomes" element={<OutcomesPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="academy" element={<AcademyPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
