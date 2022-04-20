import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const matchStatusClassName =
    matchStatus === 'Won' ? 'green-color' : 'red-color'

  return (
    <li className="list-match-details">
      <div className="match">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="team-logo"
        />
        <h1 className="team-heading">{competingTeam}</h1>
        <p className="match-result">{result}</p>
        <h1 className={matchStatusClassName}>{matchStatus}</h1>
      </div>
    </li>
  )
}
export default MatchCard
