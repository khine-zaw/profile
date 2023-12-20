import { Image } from "antd";
import me from "../../asset/me.jpg";
import { IoArrowForward } from "react-icons/io5";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

  const nav = useNavigate()

  const goContact = () => {
    nav('/contact')
  }

  return (
    <>
      <motion.div className=" flex flex-wrap justify-around gap-10 my-10 mt-20"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{type:'spring', delay:1.4,duration:1.5}}
      >
        <div className="flex items-center">
          <div className=" mr-32">
            <p className="text-sm tracking-wider mb-5">Hello,I Am</p>
            <h1 className=" text-3xl font-semibold tracking-widest mb-5">
              Khine Zaw Lin
            </h1>
            <p className="text-2xl tracking-wider mb-5">Web Develpoer</p>
            <button onClick={goContact} className="flex items-center text-sm px-8 py-1 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-white ">
              Contact Me <IoArrowForward className="ml-2" />
            </button>
          </div>
          <div>
            <Image
              width={300}
              height={350}
              src={me}
              className=" shadow-lg  rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* <About />
      <Skill/>
      <Project/>
      <Contact/> */}
      
    </>
  );
};

export default Home;
