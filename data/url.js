let credentials = JSON.parse(localStorage.getItem('cred'));

export function getUrl() {
  const category = getCategory();
  let num = 0;

  const cats = [
    {
      category: 'Science',
      num: 17
    }, {
      category: 'Arts', 
      num: 25
    }, {
      category: 'Mythology', 
      num: 20
    }, {
      category: 'Computers',
      num: 18
    }, {
      category: 'Sports',
      num: 21
    }, {
      category: 'Politics',
      num: 24
    }, {
      category: 'Anime',
      num: 31
    }, {
      category: 'History',
      num: 23
    }
  ];

  cats.forEach(cat => {
    if(category == cat.category) {
      num = cat.num;
    }
  })

  return `https://opentdb.com/api.php?amount=26&category=${num}&difficulty=easy&type=multiple`;
}

export function getCategory() {
  let category;

  credentials.forEach(obj => {
    category = obj.category;
  });

  return category;
}