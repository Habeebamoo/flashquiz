export function progressColor(percentage) {
  if(percentage < 50) {
    return "red"
  } else if (percentage < 70) {
    return "blue";
  } else {
    return "green"
  }
}

export function getResult(percentage) {
  if(percentage <= 40) {
    return "Poor"
  } else if (percentage < 50) {
    return "Fair"
  } else if (percentage < 60) {
    return "Good"
  } else if (percentage < 70) {
    return "Very Good"
  } else if (percentage < 80) {
    return "Excellent" 
  } else {
    return "Perfect"
  }
}