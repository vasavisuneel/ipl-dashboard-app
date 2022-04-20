import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {name, teamImageUrl, id} = teamsDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item-card">
      <li className="teams-card-container">
        <div className="teams-card">
          <img src={teamImageUrl} alt={name} className="ipl-img" />
          <p className="ipl-title">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
