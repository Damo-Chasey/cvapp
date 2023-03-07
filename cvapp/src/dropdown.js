import React from 'react';

const Dropdown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div>
    <button className="dropdownButton" onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Menu1</button>
          </li>
          <li className="menu-item">
            <button>Menu1</button>
          </li>
        </ul>
      ) : null}
    {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};

export default Dropdown;