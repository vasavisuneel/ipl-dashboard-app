import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIPLTeamData()
  }

  getIPLTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({
      teamsData: formattedData,
      isLoading: false,
    })
  }

  renderIPLTeamsCards = () => {
    const {teamsData} = this.state

    return (
      <ul className="ipl-card">
        {teamsData.map(item => (
          <TeamCard key={item.id} teamsDetails={item} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loading" testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-dashboard-container">
        <div className="ipl-logo-and-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? this.renderLoader() : this.renderIPLTeamsCards()}
      </div>
    )
  }
}

export default Home
