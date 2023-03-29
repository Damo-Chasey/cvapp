import React from 'react';
import Tabs from './tab.js'

const Dropdown = (props) => {
  const [open, setOpen] = React.useState(true);

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
          <h2>Damo's website</h2>
          {props.element}
        </li>
      </ul>

      <div className="nav-bar">
        <Tabs isOpen={open}/>
      </div>
    </div>
  );
};

export default Dropdown;