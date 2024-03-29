// Importing the CSS file for styling
import "./Components.css";

// Importing FontAwesome icons and utilities
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Functional component for the footer
function Footer() {
    return (
        <div className="my-5">
            {/* Footer section */}
            <footer>
                <div className="text-center">
                    {/* Email icon with mailto link */}
                    <a href='mailto:mom_adjei@yahoo.com' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>

                    {/* LinkedIn icon with link */}
                    <a href='https://www.linkedin.com/in/michael-adjei-6b2898188/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>

                    {/* GitHub icon with link */}
                    <a href='https://github.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>

                    {/* Twitter icon with link */}
                    <a href='https://twitter.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>

                    {/* Instagram icon with link */}
                    <a href='https://www.instagram.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                </div>

                {/* Copyright text */}
                <div className="footer-copyright text-center py-3">Mykulcoding / All rights reserved</div>
            </footer>
        </div>
    );
}

// Exporting the Footer component
export default Footer;
