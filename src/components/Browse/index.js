import {Component} from 'react'
import './index.css'
/*
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}
*/

class Browse extends Component {
  state = {originalsList: []}

  componentDidMount = () => {
    this.getOriginalsList()
  }

  getOriginalsList = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=c00e22d1a43f287f7e252ec17a57eb26&language=en-US',
      options,
    )
    const data = await response.json()

    this.setState({originalsList: data.results.slice(0, 6)})
  }

  renderSlider = () => {
    const {originalsList} = this.state

    return originalsList.map(movie => {
      const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
      return (
        <div key={movie.id} width="50%">
          <img
            className="poster"
            src={movieImage}
            width="10%"
            height="10%"
            alt="images"
          />
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <p className="text">BROWSE</p>
        <div style={{display: 'flex', flexWrap: 'wrap', paddingLeft: '60px'}}>
          {this.renderSlider()}
        </div>
      </>
    )
  }
}

export default Browse
