export default function Answer({ question, answer}) {
  return (
    <div className="answer">
      <h3>Question: <span className="block">{question}</span></h3>
      <p>Correct Answer: <span>{answer}</span></p>
    </div>
  )
}