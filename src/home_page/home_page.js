import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "../images/alexa.png";
import CortanaImage from "../images/cortana.png";
import SiriImage from "../images/siri.png";
import Logotipo1 from "../images/Logotipo1.png";
import './home_page.css';


function HomePage() {
  return (
    <div>
      {/* <section className='hero is-primary'>
        <div className='hero-body'>
          <img className='Logotipo1' src={Logotipo1} alt="Logotipo" />
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section> */}

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
      <div class="block"></div>
      <div className='recommended'>
        <div className="columns">
          <div className="column">
            Title 
          </div>
          <div className="column">
            Imagen
          </div>
        </div>
      </div>

      {/* <div class="block">
        This text is within a <strong>block</strong>.
      </div>
      <div class="block">
        This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </div>
      <div class="block">
        This text is within a <strong>third block</strong>. This block has no margin at the bottom.
      </div> */}




      {/* <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by Apple and us being phased out"
              />
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default HomePage;