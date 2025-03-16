export default function Answer({ question, answer}) {
  const decodeHTML = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  return (
    <div className="answer">
      <h3>Question: 
        <span className="block">{decodeHTML(question)}</span>
      </h3>
      <p>Correct Answer: <span>{decodeHTML(answer)}</span></p>
    </div>
  )
}
