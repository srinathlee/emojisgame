import './index.css'

const Navbar = props => {
  const {scores} = props
  console.log(scores)
  const {score, maxscore} = scores

  return (
    <nav className="navbar-bg-container">
      <div className="logo-bg-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <p className="logo-name">Emoji Game</p>
      </div>

      <div className="score-bg-container">
        <p className="score">Score : {score}</p>
        <p className="score">
          Top Score : <span className="top-scoer"> {maxscore}</span>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
