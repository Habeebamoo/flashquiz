interface PropsType {
  question: string,
  answer: string,
  index: number
}

export default function Answer({ question, answer, index }: PropsType) {
  const decodeHTML = (html: any) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  return (
    <div className="answer">
      <h3>Question {index + 1}: 
        <span className="block">{decodeHTML(question)}</span>
      </h3>
      <p>Correct Answer: <span>{decodeHTML(answer)}</span></p>
    </div>
  )
}
