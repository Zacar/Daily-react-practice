import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t("greeting")}</h1>
    </div>
  );
}

export default App;
