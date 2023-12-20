import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import about from "../../asset/about.png";
import Lottie from "lottie-react";
import animationData from "../../asset/Animation";
import { motion } from "framer-motion";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <motion.div
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type:'spring',delay:0.5}}
      >
        <p className="border-2 border-orange-400 mb-10 mt-20 "></p>
        <p className=" text-center text-2xl font-normal mb-10">About Me</p>
        <div className="flex ml-44">
          <div className="flex justify-around gap-10">
            {/* <div className="border-4 border-orange-500 rounded-lg w-full h-32 flex flex-wrap mr-32 p-3">
        <div className="border bg-gray-200 rounded-lg">
          <img src={about} alt="" className="w-96 h-40" />
        </div>  
      </div> */}
            <Lottie
              animationData={animationData}
              options={defaultOptions}
              height={800} // You can set the height if needed
              width={800} // Set the desired width
              style={{ width: "100%" }}
            />

            <div className="">
              <p className="mb-5 text-2xl tracking-wider text-center">
                Who I Am?
              </p>
              <p className=" tracking-wider text-sm mb-5 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                magnam aliquam, architecto temporibus adipisci quaerat quod
                eveniet, voluptate cupiditate placeat accusamus, praesentium
                autem sequi. Modi cumque rem harum impedit laudantium.
              </p>
              <div className=" text-center">
                <Button
                  shape="round"
                  icon={<DownloadOutlined />}
                  className="bg-orange-500 text-white"
                >
                  Download For Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
