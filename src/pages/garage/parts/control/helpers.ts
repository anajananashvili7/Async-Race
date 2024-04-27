const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const names = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"];

export const generateRandomCars = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      id: Date.now() + i,
      color: getRandomElement(colors),
      name: getRandomElement(names),
    });
  }

  return items;
};