export function getCategoryImage(category) {
  let image;

  categoryImage.forEach(obj => {
    if(category == obj.category) {
      image = obj.img;
    }
  });

  return image;
}

const categoryImage = [
  {
    category: 'Science',
    img: "./assets/Science.png"
  }, {
    category: 'Arts',
    img: "./assets/Arts.png"
  }, {
    category: 'Computers',
    img: "./assets/Computers.png"
  }, {
    category: 'Sports',
    img: "./assets/Sports.png"
  }, {
    category: 'Politics',
    img: "./assets/Politics.png"
  }, {
    category: 'Anime',
    img: "./assets/Anime.png"
  }, {
    category: 'History',
    img: "./assets/History.png"
  }, {
    category: 'Mythology',
    img: "./assets/Mythology.png"
  }
];
