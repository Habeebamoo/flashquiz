export function getUrl(user) {
  const userCategory = user.category;

  let difficulty = user.difficulty;
  let amount = user.questionNumber;
  let type = user.type;
  let category;

  if(userCategory == "Science") {
    category = 17;
  } else if (userCategory == "Arts") {
    category = 25;
  } else if (userCategory == "History") {
    category = 23;
  } else if (userCategory == "Tech") {
    category = 18;
  } else if (userCategory == "Sports") {
    category = 21;
  } else if (userCategory == "Anime") {
    category = 31;
  } else if (userCategory == "Mythology") {
    category = 20;
  }

  return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
}