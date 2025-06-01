export const capitalize = (text: string) => {
  const words = text.split("")
  words[0] = words[0].toUpperCase() 
  return words.join("")
}