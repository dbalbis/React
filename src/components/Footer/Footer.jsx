import { Container } from '@mui/material';
import '../../styles/_Footer.scss';
import Twitter from '../../social/twitter-16.png';
import Facebook from '../../social/facebook-3-16.png';
import Instagram from '../../social/instagram-16.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <Container maxWidth="xl" className="footerContainer">
        <p>
          Trasher Clothes © 2022 - Emilio Frugoni 860, Tel.: 2900 47 51.
          Montevideo - Uruguay
        </p>
        <div className="footerIcons">
          <Link to="/" title="Seguinos en Twitter!">
            <img src={Twitter} alt="Seguinos en Twitter!" />
          </Link>
          <Link to="/" title="Seguinos en Instagram!">
            <img src={Instagram} alt="Seguinos en Instagram!" />
          </Link>
          <Link to="/" title="Seguinos en Facebook!">
            <img src={Facebook} alt="Seguinos en Facebook!" />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Footer;
