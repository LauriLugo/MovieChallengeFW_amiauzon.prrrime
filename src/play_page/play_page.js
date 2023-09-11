import 'bulma/css/bulma.css'
// import ProfileCard from "../ProfileCard";
// import next from "../images/next.png";
// import AlexaImage from "../images/alexa.png";
import Logotipo1 from "../images/Logotipo1.png";
// import './play_page.css';

function PlayPage() {
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

            <div className='containerVideo'>
                <figure className="image is-4by3">
                    <iframe className="has-ratio" width="340" height="160" src="https://www.youtube.com/embed/YE7VzlLtp-4" allowfullscreen></iframe>
                </figure>
            </div>
            <div className="column">
              <div className="box">
                <h3>Date:</h3>
                <br></br>
                <p>This column will take up the remaining space available.</p>
                <br></br>
                <h3>Genre:</h3>
              </div>
            </div>
            <div className='Subtitle'>
                <div className='block'>
                    <h1>TV Shows</h1>
                </div>
                
            </div>


        </div>





    );
}
export default PlayPage