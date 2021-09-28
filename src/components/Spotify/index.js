import {Component} from 'react'
import './index.css'
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiFillHeart,
} from 'react-icons/ai'
import {BiStopCircle} from 'react-icons/bi'
import {GiCrossedBones} from 'react-icons/gi'
import {BsFillVolumeDownFill} from 'react-icons/bs'
import NavBar from '../NavBar'
import NewlyReleased from '../Released'
import PlayLists from '../PlayLists'
import Browse from '../Browse'

class Spotify extends Component {
  render() {
    return (
      <div className="bg-container">
        <NavBar />

        <div style={{height: '100vh'}}>
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
            <NewlyReleased />
            <PlayLists />
            <Browse />
          </div>

          <div className="nav-bar">
            <p style={{fontWeight: 'bold'}}>Nothings Playing</p>
            <div
              style={{
                paddingTop: '20px',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}
            >
              <AiOutlineCaretLeft
                style={{fontSize: '20px', color: '#cecdd0'}}
              />
              <BiStopCircle style={{fontSize: '20px', color: 'blue'}} />
              <AiOutlineCaretRight
                style={{fontSize: '20px', color: '#cecdd0'}}
              />
            </div>
            <p>
              ----------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div
              style={{
                paddingTop: '20px',
                paddingLeft: '20px',
                paddingRight: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <AiFillHeart style={{fontSize: '20px', color: '#cecdd0'}} />
              <GiCrossedBones
                style={{
                  fontSize: '20px',
                  color: '#cecdd0',
                  marginLeft: '10px;',
                }}
              />
              <BsFillVolumeDownFill
                style={{
                  fontSize: '20px',
                  color: '#cecdd0',
                  marginLeft: '10px;',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Spotify
