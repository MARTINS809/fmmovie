import{ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {



    return (
        <header>
          <nav className="container">
            <div className="fmmovie-nav-content">
              <h1> FMMovie</h1>
              <a href="https://github.com/MARTINS809/fmmovie.git">
                <div className="fmmovie-contact-container">
                  <GithubIcon />
                 <p className="fmmovie-contact-link"> /devsuperior</p>
                 </div>
              </a>
            </div>
          </nav>
        </header>
       );
}

export default Navbar;