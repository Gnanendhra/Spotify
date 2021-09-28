import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import NewlyReleased from '../Released'
import PlayLists from '../PlayLists'
import Browse from '../Browse'

class Spotify extends Component {
  componentDidMount = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://open.spotify.com/genre/2020-stories-resilience',
      options,
    )
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="bg-container">
        <NavBar />
        <div>
          <div className="top-container">
            <img
              src="https://images.wisegeek.com/boy-enjoying-music.jpg"
              alt="images"
              className="enjoying-music"
            />
            <h1 className="desc">
              Your favourite tunes <br />
              All
              <span>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/summer-189/64/sun_bright_sunlight-512.png"
                  alt="sun"
                  className="sun"
                />
              </span>
              and all
              <span>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/relief-weather-glyph/512/Artboard_9-512.png"
                  alt="dark"
                  className="dark"
                />
              </span>
            </h1>
          </div>
          <div className="songs-list">
            <p>RELEASED THIS WEEK</p>
            <NewlyReleased />
            <Browse />
            <PlayLists />
          </div>
        </div>
      </div>
    )
  }
}

export default Spotify
