import {Component} from 'react'
import Popup from 'reactjs-popup'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import ToolTipPositions from '../tooltip'
import 'reactjs-popup/dist/index.css'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    maxscore: 0,
    cardsClicked: [],
    isgameCompleted: 1,
    totalScore: 0,
  }

  setScore = id => {
    let {score, maxscore, isgameCompleted, totalScore} = this.state
    const {cardsClicked} = this.state
    if (cardsClicked.includes(id)) {
      if (score > maxscore) {
        maxscore = score
      }
      isgameCompleted = 0
      totalScore = score
      score = 0
    } else {
      score += 1
      cardsClicked.push(id)
    }
    this.setState({score, maxscore, isgameCompleted, totalScore})
    console.log(score, maxscore)
  }

  playAgain = () => {
    this.setState({cardsClicked: []})
    this.setState({isgameCompleted: 1})
  }

  render() {
    const {emojisList} = this.props
    const {score, maxscore, isgameCompleted, totalScore} = this.state
    const emojis = emojisList.sort((a, b) => 0.5 - Math.random())
    const totalscore = score
    console.log(totalscore)
    return (
      <div className="main-bg-container">
        <Navbar scores={{score, maxscore}} />
        <div className="cards-frame">
       <div className='tooltip-container'>
       <ToolTipPositions />
       </div>
          {isgameCompleted ? (
            <ul className="cards-container">
              {emojis.map(each => (
                <EmojiCard key={each.id} each={each} setScore={this.setScore} />
              ))}
            </ul>
          ) : (
            <div className="win-loose-bg-container">
              <div className="result-text-bg-container">
                <h1 className="result-heading">
                  {maxscore === 12 ? 'You won' : 'You Lose'}
                </h1>
                <p className="result-score-heading">Score</p>
                <p className="result-score">{totalScore}/12</p>
                <button className="play-again" onClick={this.playAgain}>
                  Play Again
                </button>
              </div>
              {maxscore === 12 ? (
                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                />
              ) : (
                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

export default EmojiGame
