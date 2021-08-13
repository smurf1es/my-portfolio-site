import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CrossIcon } from '../assets/icons/logo-cross-dark.svg';

const ContactModal = (props) => {
  const [shown, setShown] = useState(false);
  return (
    <section
      className="fixed left-0 top-0 right-0 bottom-0 z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="relative bg-palette-gray rounded-3xl border shadow-md w-full md:w-500 h-screen/2 flex flex-col items-center justify-center mx-auto mt-20">
        <span
          className="cursor-pointer absolute top-5 right-5"
          onClick={props.show}
        >
          <CrossIcon />
        </span>

        <div className="flex flex-col items-center font-open-sans">
          <div className="mb-6 text-center">
            {shown ? (
              <a
                className="text-blue-700 font-montserrat text-sm hover:underline"
                href="mailto:hughdev101@gmail.com"
              >
                Want to send me an E-Mail? Click here
              </a>
            ) : (
              <span
                className="bg-palette-darkest-gray text-white py-2 block w-80 cursor-pointer transition-colors hover:bg-white hover:text-black"
                onClick={() => setShown(!shown)}
              >
                E-Mail address
              </span>
            )}
          </div>

          <div>
            <span className="bg-palette-darkest-gray text-white py-2 block w-80 text-center cursor-pointer transition-colors hover:bg-white hover:text-black">
              <a href="https://linktr.ee/hooger.dev">Linktree</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactModal;

ContactModal.propTypes = {
  show: PropTypes.func,
};
