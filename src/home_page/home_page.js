import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import flecha from "../images/flecha.png";
import AlexaImage from "../images/alexa.png";
import Logotipo1 from "../images/Logotipo1.png";
import './home_page.css';


function HomePage() {
  return (
    <div>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img className='logotipo1' src={Logotipo1} alt='logotipo'></img>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              TV Shows
            </a>

            <a className="navbar-item">
              Movies
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Genres
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Action
                </a>
                <a className="navbar-item">
                  Adventure
                </a>
                <a className="navbar-item">
                  Comedy
                </a>
                <a className="navbar-item">
                  Musical
                </a>
                <a className="navbar-item">
                  Thriller
                </a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">
                  About
                </a>
              </div>

            </div>
          </div>
        </div>
      </nav>

      <div className='container'>
        <section className='section'>
          <div className='columns'>

            <div className='recommended'>
              <div className="columns">
              </div>
            </div>

            <div className='column is-5'>
              <div className="column is-narrow">
                <div className='box'>
                  <p className='title is-2'>Title</p>
                  <br></br>
                  <p className='Subtitle'>Date:</p>
                  <p className='Subtitle'>Description:</p>
                  <p className='Subtitle'>Genre:</p>
                </div>
              </div>
            </div>
            <div className='column is-5'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>

          </div>
        </section>
      </div>

      <div className='Subtitle'>
        <div className="block">
          <h1>TV Shows</h1>
        </div>
        <section className='posters'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
              <div className='next'>
                image={flecha}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='Subtitle'>
        <div className="block">
          <h1>Movies</h1>
        </div>
        <section className='posters'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                image={AlexaImage}
              />
              <div className='next'>
                image={flecha}
              </div>
            </div>
          </div>
        </section>
      </div>






    </div>
  );
}

export default HomePage;