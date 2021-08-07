import { Link } from 'react-router-dom';
import { ReactComponent as BrandIcon } from '../assets/icons/logo-portfolio.svg';

const Navbar = () => {
  return (
    <div className="bg-palette-darkest-gray flex w-full justify-between h-14 px-8 py-4">
      <div>
        <BrandIcon className="w-brand" />
      </div>

      <div>
        <ul className="text-white flex items-center">
          <li className="mx-6">
            <Link className="hover:underline" to="#service">
              Service
            </Link>
          </li>
          <li className="mx-6">
            <Link className="hover:underline" to="#project">
              Project
            </Link>
          </li>
          <li className="ml-6">
            <Link className="hover:underline" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
