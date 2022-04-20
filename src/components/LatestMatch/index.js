import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <li className="match-container">
      <div className="match-venue-details">
        <h1 className="competing-team">{competingTeam}</h1>
        <h2 className="date">{date}</h2>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team"
      />
      <div className="match-player-details">
        <h2 className="match-heading">First Innings</h2>
        <p className="match-text">{firstInnings}</p>
        <h2 className="match-heading">Second Innings</h2>
        <p className="match-text">{secondInnings}</p>
        <h2 className="match-heading">Man Of The Match</h2>
        <p className="match-text">{manOfTheMatch}</p>
        <h2 className="match-heading">Umpires</h2>
        <p className="match-text">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
