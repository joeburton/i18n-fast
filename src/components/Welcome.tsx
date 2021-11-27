import { useTranslation } from "react-i18next";
import "../translations/i18n.js";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};
