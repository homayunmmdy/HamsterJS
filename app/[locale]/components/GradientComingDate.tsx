import { useTranslations } from "next-intl";

const GradientComingDate = () => {
  const t = useTranslations("home");
  return (
    <h3 className="gradient-title">
      {t("coming")} <br />
      {t("november")} 19 <br /> 2026
    </h3>
  );
};

export default GradientComingDate;
