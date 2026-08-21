import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description", {
    name: "XYZ",
  });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <p>{line1}</p>
      <span>{line2}</span>
    </div>
  );
}

export default App;
