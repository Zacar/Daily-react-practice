import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description", {
    name: "ram",
  });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <Trans
        // i18nKey={"description.line1"}
        i18nKey={line1}
        values={{
          name: "ram",
        }}
        components={{ 1: <b /> }}
      />
      {/* <p>{line1}</p> */}
      <Trans
        // i18nKey={"description.line1"}
        i18nKey={line2}
        values={{
          name: "ram",
        }}
        components={{ 1: <span /> }}
      />
    </div>
  );
}

export default App;
