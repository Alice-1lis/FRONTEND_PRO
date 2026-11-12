// Скільки фото лежить у public (1.jpg ... 50.jpg)
export const HOTEL_IMAGES_COUNT = 50;

export const getHotelImage = (hotel) => {
  const index =
    hotel.imageIndex || ((Number(hotel.id) % HOTEL_IMAGES_COUNT) + 1);
  return `/${index}.jpg`;
};










