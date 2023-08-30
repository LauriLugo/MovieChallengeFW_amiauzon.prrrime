import 'bulma/css/bulma.css'
import Logotipo2 from "../images/Logotipo2.png";
import './logo_page.css';

function LogoPage() {
  return (
    <figure className='containerLogotipo'>
        <img className='Logotipo2' src={Logotipo2} alt="Logotipo" />
       
    </figure>
  );
}
export default LogoPage