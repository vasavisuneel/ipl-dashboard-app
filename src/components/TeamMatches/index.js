import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: {
        umpires: data.recent_matches.umpires,
        result: data.recent_matches.result,
        manOfTheMatch: data.recent_matches.man_of_the_match,
        id: data.recent_matches.id,
        date: data.recent_matches.date,
        venue: data.recent_matches.venue,
        competingTeam: data.recent_matches.competing_team,
        competingTeamLogo: data.recent_matches.competing_team_logo,
        firstInnings: data.recent_matches.first_innings,
        secondInnings: data.recent_matches.second_innings,
        matchStatus: data.recent_matches.match_status,
      },
    }
    console.log(updatedData)
    this.setState({teamDetails: updatedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="team-latest-match">
            <img src={teamBannerUrl} alt="banner" className="banner-img" />
            <h1 className="latest-match-heading">Latest Matches</h1>
            <ul className="latest-match-container">
              {latestMatchDetails.map(eachMatch => (
                <LatestMatch
                  key={eachMatch.id}
                  latestMatchDetails={eachMatch}
                />
              ))}
            </ul>
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
