// Деталі, яких немає в db.json (ціна, відгуки, зручності).
// Рахуються з id готелю, тому завжди однакові для одного й того ж готелю.
const seeded = (id, salt) => {
  const x = Math.sin(Number(id) * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const OPTIONAL_AMENITIES = [
  "parking",
  "ac",
  "kitchen",
  "nonsmoking",
  "family",
  "pets",
  "shuttle",
];

// Повертає ключ для t(`reviews.${key}`)
export const getReviewKey = (score) => {
  if (score >= 9.5) return "exceptional";
  if (score >= 9) return "superb";
  if (score >= 8) return "veryGood";
  if (score >= 7) return "good";
  return "pleasant";
};

const toLocale = (lng) => (lng === "uk" ? "uk-UA" : "en-US");

export const formatPrice = (value, lng) =>
  new Intl.NumberFormat(toLocale(lng), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const formatDecimal = (value, lng) =>
  new Intl.NumberFormat(toLocale(lng), {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);

export const getStayInfo = (searchParams) => {
  const guests = Number(searchParams?.guests) || 2;
  let nights = 1;

  if (searchParams?.checkIn && searchParams?.checkOut) {
    const diff =
      (new Date(searchParams.checkOut) - new Date(searchParams.checkIn)) /
      86400000;
    if (diff > 0) nights = Math.round(diff);
  }

  return { guests, nights };
};

export const getHotelInfo = (hotel) => {
  const r = (salt) => seeded(hotel.id, salt);
  const stars = hotel.hotel_rating || 0;

  const pricePerNight = Math.round(55 + stars * 28 + r(1) * 70);
  const reviewScore = Math.round((7 + r(2) * 2.8) * 10) / 10;
  const reviewCount = Math.round(40 + r(3) * 2400);
  const distanceKm = Math.round((0.3 + r(4) * 5.5) * 10) / 10;
  const freeCancellation = r(5) > 0.35;
  const breakfastIncluded = r(6) > 0.55;
  const roomsLeft = r(7) > 0.7 ? Math.floor(1 + r(8) * 4) : null;

  // Масив ключів зручностей: t(`amenities.${key}`)
  const amenities = [
    "wifi",
    ...OPTIONAL_AMENITIES.map((key, i) => ({ key, w: r(20 + i) }))
      .sort((a, b) => b.w - a.w)
      .slice(0, 3 + Math.floor(r(30) * 3))
      .map(({ key }) => key),
  ];
  if (breakfastIncluded) amenities.push("breakfast");

  return {
    pricePerNight,
    reviewScore,
    reviewCount,
    distanceKm,
    freeCancellation,
    breakfastIncluded,
    roomsLeft,
    amenities,
    introKey: `description.intro${Math.floor(r(40) * 3)}`,
    outroKey: `description.outro${Math.floor(r(41) * 3)}`,
  };
};