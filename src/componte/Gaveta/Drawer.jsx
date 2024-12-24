import  {  useState } from "react";
// import { NavLink,Link } from "react-router-dom";
import { Drawer,Anchor } from "antd";

const Menus = ({ TiThMenu }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };





  // const navegador = [
  //   {
  //     key: "1",
  //     label: <Link to="/home">Home</Link>,
  //     icon: "",
  //   },
  //   {
  //     key: "2",
  //     label: <NavLink
  //     to="/sobre"
  //     className={({ isActive, isPending }) =>
  //       isPending ? "pending" : isActive ? "active" : ""
  //     }
  //   >
  //     Sobre
  //   </NavLink>
  //   },
  // ];


  return (
    <>
      <button onClick={showDrawer} className="text-white  pr-4">
        <TiThMenu className="text-yellow-950 lg:text-[3.5rem] md:text-[3rem]  xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
      </button>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <Anchor

       targetOffset={'65'}
        items={[
          {
            key: 'part-1',
            href: '#home',
            title: 'Home',
          },
          {
            key: 'part-2',
            href: '#sobre',
            title: 'Sobre',
          },
          {
            key: 'part-3',
            href: '#servico',
            title: 'Servicos',
          },
          {
            key: 'part-4',
            href: '#equipa',
            title: 'Equipa',
          },
        ]}
      />
      
      </Drawer>
    </>
  );
};



export default Menus;
