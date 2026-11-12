import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getReviewKey, formatDecimal } from "../utils/getHotelInfo";

const ReviewScore = ({ score, count, large = false }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          fontWeight: 700,
          fontSize: large ? "1.25rem" : "0.95rem",
          minWidth: large ? 48 : 36,
          height: large ? 48 : 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px 8px 8px 0",
        }}
      >
        {formatDecimal(score, i18n.language)}
      </Box>
      <Box>
        <Typography
          variant={large ? "subtitle1" : "body2"}
          sx={{ fontWeight: 700, lineHeight: 1.2 }}
        >
          {t(`reviews.${getReviewKey(score)}`)}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {t("reviews.count", { count })}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewScore;
