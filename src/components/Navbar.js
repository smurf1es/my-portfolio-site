import { Link } from 'react-router-dom';
import { ReactComponent as BrandIcon } from '../assets/icons/logo-portfolio.svg';

const Navbar = () => {
  return (
    <div className="flex w-full">
      <div>
        <BrandIcon />
      </div>

      <div>
        <ul className="text-white">
          <li>
            <Link to="#service">Service</Link>
          </li>
          <li>
            <Link to="#project">Project</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
