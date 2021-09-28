import {Component} from 'react'
import './index.css'
import {FiHeadphones} from 'react-icons/fi'
import {BiSearchAlt2} from 'react-icons/bi'
import {MdFavorite} from 'react-icons/md'
import {AiFillPlayCircle} from 'react-icons/ai'
import {BsBarChart} from 'react-icons/bs'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="userField">
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png"
              alt="icon"
              className="face-icon"
            />
            <p className="userName">Gnane</p>
          </div>
        </div>
        <div className="flexField first-icon">
          <FiHeadphones className="icons" />
          <p>Discover</p>
        </div>
        <div className="flexField">
          <BiSearchAlt2 className="icons" />
          <p>Search</p>
        </div>
        <div className="flexField">
          <MdFavorite className="icons" />
          <p>Favourites</p>
        </div>
        <div className="flexField">
          <AiFillPlayCircle className="icons" />
          <p>PlayLists</p>
        </div>
        <div className="flexField">
          <BsBarChart className="icons" />
          <p>Charts</p>
        </div>
      </div>
    )
  }
}

export default NavBar
