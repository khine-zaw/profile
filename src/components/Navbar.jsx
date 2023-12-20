import { Link, NavLink } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import "./Navbar.css";
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
    className="flex justify-between items-center p-5 my-5 shadow-lg rounded bg-gray-50 sticky top-0 z-20 backdrop-blur-lg "
    initial={{y: -250}}
    animate={{y: -10}}
    transition={{delay: 0.3,duration:1.5}}
    >
      <NavLink href="/">
        <div className=" flex items-center gap-2 cursor-pointer">
          <FaRobot className="text-2xl text-orange-400" />
          <h1 className=" text-orange-400 uppercase text-2xl">Porfolio</h1>
        </div>
      </NavLink>
      <div className="cursor-pointer">
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li>
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
