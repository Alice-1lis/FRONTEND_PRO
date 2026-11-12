import { Rating } from "@mui/material";
import { useTranslation } from "react-i18next";

const HotelStars = ({ value, size = "small" }) => {
  const { t } = useTranslation();

  if (!value) return null;

  return (
    <Rating
      value={value}
      max={Math.ceil(value)}
      precision={0.5}
      readOnly
      size={size}
      sx={{ color: "secondary.main" }}
      aria-label={t("a11y.stars", { count: value })}
    />
  );
};

export default HotelStars;
