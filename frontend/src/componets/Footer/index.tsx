import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            
            <div className="container">
                <p className="text-light"> Developed by <a href="https://www.linkedin.com/in/sergiosdev/" target="_blank" rel="noreferrer" className="creditos">Sérgio Ferreira</a></p>
                <p className="text-light"> <span className="spaceIcon">Source Code </span>
                    <small>
                        <strong> 
                            <FontAwesomeIcon icon={faArrowCircleDown} size="1x"/> 
                        </strong><br />
                             <a href="https://github.com/sergiosdev" target="_blank" rel="noreferrer" className="creditos">@SERGIOSDEV</a>
                    </small>
                </p>
            </div>

        </footer>
    );
}

export default Footer;