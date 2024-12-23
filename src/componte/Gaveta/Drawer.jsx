import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const Menus = ({TiThMenu}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    
    <button onClick={showDrawer} className="text-white  pr-4">
        
        <TiThMenu className="text-yellow-950 lg:text-[3.5rem] md:text-[3rem]  xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
          </button>
 
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Menus;