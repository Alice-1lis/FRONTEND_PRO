import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
];
const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <ToggleButtonGroup
      value={i18n.resolvedLanguage || "en"}
      exclusive
      size="small"
      aria-label={t("language")}
      onChange={(e, value) => value && i18n.changeLanguage(value)}
      sx={{
        "& .MuiToggleButton-root": {
          color: "rgba(255,255,255,0.8)",
          borderColor: "rgba(255,255,255,0.3)",
          px: 1.25,
          py: 0.25,
          fontWeight: 700,
          fontSize: "0.75rem",
          "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
          "&.Mui-selected": {
            color: "primary.main",
            bgcolor: "secondary.main",
            "&:hover": { bgcolor: "secondary.light" },
          },
        },
      }}
    >
      {LANGUAGES.map(({ code, label }) => (
        <ToggleButton key={code} value={code}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default LanguageSwitcher;
