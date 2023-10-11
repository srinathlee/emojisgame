import './index.css'

const EmojiCard = props => {
  const {each, setScore} = props
  const {id, emojiName, emojiUrl} = each

  const clickCard = () => setScore(id)

  return (
    <button onClick={clickCard} className="card-bg-container">
      <img className="card-img" src={emojiUrl} />
    </button>
  )
}

export default EmojiCard
