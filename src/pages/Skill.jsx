import { Progress } from "antd"
import {motion} from 'framer-motion'
import { useSpring } from "framer-motion"
import { useEffect } from "react";
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const Skill = () => {

  const x = useSpring(0, { stiffness: 1000, damping: 10 });

  useEffect(() => {
    x.set(0)
  }, [])
  
  return (
    <>
    <p className="text-center text-2xl font-normal mt-20 mb-12">My Skills</p>
      <div className="flex ml-44">
          <div className="flex justify-around items-center gap-12">

          <div className="w-96">
              <p className="text-1xl font-light mb-5 tracking-wider">My creative <span className="text-orange-500">skills</span> and <span className="text-orange-500">experiences</span></p>
              <p className="tracking-wider text-sm mb-5 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum laboriosam minus 
                officia ratione nesciunt consequuntur. Vel, quisquam aperiam. Quia tempore illo,
                accusamus molestiae minus nobis praesentium. Blanditiis, repudiandae odio.
              </p>
            </div>
            <motion.div className=" w-72" style={{ x }} >
              <span>Html</span>
              <Progress percent={90} strokeColor={twoColors} />
              <span>Css</span>
              <Progress percent={80} strokeColor={twoColors} />
              <span>Bootstrap and Tailwinds</span>
              <Progress percent={60} strokeColor={twoColors} />
              <span>Js</span>
              <Progress percent={55} strokeColor={twoColors} />
              <span>Next Js</span>
              <Progress percent={55} strokeColor={twoColors} />
              <span>My Sql</span>
              <Progress percent={60} strokeColor={twoColors} />
            </motion.div>
          </div>
      </div>
    </>
    
  )
}

export default Skill