import 'bulma/css/bulma.css'
import next from "../images/next.png";
import AlexaImage from "../images/alexa.png";
import Logotipo1 from "../images/Logotipo1.png";
import PrrrimeMichivideo from "../images/PrrrimeMichivideo.png";
import './play_page.css';

function PlayPage() {
    return (
        <div>

            {/* MENU DE NAVEGACION */}
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

            {/* TITULO */}
            <div className='containerInfo'>
                <div className='title'>
                    <br></br>
                    <h1 className='titleMovie'>Título de la película</h1>
                    <br></br>
                    </div>
            </div>


            {/* VIDEO */}
            <div className='containerVideo'>
                <figure className="image is-16by9">
                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
                </figure>            
                </div>

            {/* INFO */}
            <div className='containerInfo'>
                <div className="info">
                    <br></br>
                    <h3 className='Date'>Date:</h3>
                    <br></br>
                    <h3>This column will take up the remaining space available.</h3>
                    <br></br>
                    <h3>Genre:</h3>
                    <br></br>
                    <br></br>

                </div>
            </div>

            {/* YOY CAN ALSO SEE */}
            <div className='Subtitle'>
                <div className="block">
                    <h1>You can also see</h1>
                </div>
                <div className='container'>
                    <section className='section'>
                        <div className='columns'>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='poster' src={AlexaImage} alt='AlexaImage'></img>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="boxImage">
                                    <img className='next' src={next} alt='Next'></img>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="footer">
                <div className="content has-text-centered">
                    <img className='prrrimeMichiVideo' src={PrrrimeMichivideo} alt='Prrrime MichiVideo'></img>
                </div>
            </footer>

        </div>





    );
}
export default PlayPage