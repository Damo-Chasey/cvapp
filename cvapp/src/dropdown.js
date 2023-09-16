import React from 'react';
import Tabs from './tab.js'

const Dropdown = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div>
      <ul>
        <div onClick={handleOpen}><p>Show/Hide menu</p></div>
      </ul>
      <ul class="nav">
        <Tabs isOpen={open}/>
      </ul>
    </div>
  );
};

export default Dropdown;