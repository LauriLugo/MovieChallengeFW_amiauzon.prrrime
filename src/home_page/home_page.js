import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import next from "../images/next.png";
import AlexaImage from "../images/alexa.png";
import Logotipo1 from "../images/Logotipo1.png";
import './home_page.css';


function HomePage() {
  return (
// MENU DE NAVEGACION
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
{/* SLIDER */}
{/* CONTAINER PELICULAS PRINCIPAPES */}
      <div className='container'>
        <section className='section'>
          <div className='columns'>

            <div className="column">
              <div className="box">
                <p className="title is-1">Title</p>
                <br></br>
                <br></br>
                <h3 className='title is-5'>Date:</h3>
                <p className="subtitle">This column will take up the remaining space available.</p>
                <h3 className='title is-5'>Genre:</h3>
              </div>
            </div>
            <div className="column is-narrow">
              <div className="boxImage">
                <p className="title is-5">Columna para la imagen</p>
                <p className="subtitle">This column is only 200px wide.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
{/* TV SHOWS */}
      <div className='Subtitle'>
        <div className="block">
          <h1>TV Shows</h1>
        </div>
        <section className='posters'>
          <div className='columns'>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='next'>
              image={next}
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
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>
            <div className='column is-2'>
              <ProfileCard
                image={AlexaImage}
              />
            </div>


          </div>
        </section>
      </div>






    </div>
  );
}

export default HomePage;