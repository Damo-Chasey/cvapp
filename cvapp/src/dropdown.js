import React from 'react';
import Navbar from './navbar.js';

const Dropdown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div>
      <ul className="burgerMenu">
        <li>
          <div className="dropdownButton"onClick={handleOpen}><img src={"burgor64.png"} alt={"burger menu"}/></div>
        </li>
        <li>
          {open ? (
            <Navbar/>
          ) : null}
        </li>
      </ul>
      

    </div>
  );
};

export default Dropdown;