import { Box } from "@mui/material";
import { keyframes } from "@mui/material/styles";
import FlightIcon from "@mui/icons-material/Flight";
import PlaceIcon from "@mui/icons-material/Place";
import CloudIcon from "@mui/icons-material/Cloud";

// маршрут літака
const PATH = "M 10 340 C 60 240, 230 290, 200 180 C 175 90, 60 120, 120 40";

const fly = keyframes`
  0%   { offset-distance: 0%;   opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
`;

const drift = keyframes`
  0%   { transform: translateX(-20px); }
  50%  { transform: translateX(30px); }
  100% { transform: translateX(-20px); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%   { transform: scale(0.4); opacity: 0.5; }
  100% { transform: scale(1.6); opacity: 0; }
`;

const BookingDecor = () => (
  <Box
    aria-hidden="true"
    sx={{
      display: { xs: "none", sm: "block" },
      position: "relative",
      mx: "auto",
      mt: 3,
      width: 260,
      height: 380,
      "@media (min-width: 1350px)": {
        position: "absolute",
        top: 0,
        left: "100%",
        ml: 2,
        mx: 0,
        mt: 0,
      },
      overflowX: "clip",
      pointerEvents: "none",
      userSelect: "none",
      "@media (prefers-reduced-motion: reduce)": {
        "& *": { animation: "none !important" },
      },
    }}
  >
    <Box
      component="svg"
      viewBox="0 0 260 380"
      sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <path
        d={PATH}
        fill="none"
        stroke="#0F3D5C"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="4 8"
        strokeLinecap="round"
      />
    </Box>
    <CloudIcon
      sx={{
        position: "absolute",
        top: 50,
        left: 140,
        fontSize: 64,
        color: "rgba(15, 61, 92, 0.08)",
        animation: `${drift} 14s ease-in-out infinite`,
      }}
    />
    <CloudIcon
      sx={{
        position: "absolute",
        top: 220,
        left: 20,
        fontSize: 44,
        color: "rgba(15, 61, 92, 0.07)",
        animation: `${drift} 18s ease-in-out infinite reverse`,
      }}
    />
    <Box
      sx={{ position: "absolute", top: 18, left: 108, width: 24, height: 24 }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          top: 22,
          height: 8,
          borderRadius: "50%",
          bgcolor: "rgba(245, 166, 35, 0.5)",
          animation: `${pulse} 2s ease-out infinite`,
        }}
      />
      <PlaceIcon
        sx={{
          fontSize: 42,
          ml: -0.5,
          mt: -1.5,
          color: "#F5A623",
          animation: `${bounce} 1.6s ease-in-out infinite`,
        }}
      />
    </Box>
   {/* літак */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        offsetPath: `path("${PATH}")`,
        offsetRotate: "auto",
        animation: `${fly} 20s linear infinite`,
      }}
    >
      <FlightIcon
        sx={{
          fontSize: 35,
          color: "#0F3D5C",
          transform: "rotate(90deg)",
          display: "block",
        }}
      />
    </Box>
  </Box>
);

export default BookingDecor;
