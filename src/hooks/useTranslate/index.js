import { useTranslation } from "react-i18next";

const useTranslate = () => {
  const [t, i18n] = useTranslation("global");

  return {
    translate: t,
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
  };
};
export default useTranslate;
