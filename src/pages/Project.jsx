import { useState } from 'react';
import { Card } from 'antd';
import { FaDesktop, FaTools } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

const tabList = [
  {
    key: 'project',
    tab: 'project',
  },
  {
    key: 'service',
    tab: 'service',
  },
];
const contentList = {
  project: 

  <>
  <div className="flex flex-wrap gap-5 justify-center">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <img className="rounded-t-lg" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/318751976/original/3ece539c1994525bd6325caa7feaf3d12b95bf68/design-fully-responsive-html-css-bootstrap-website.png" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-500">My Ecommerce Shopes Web Design</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            
        </div>
    </div>,
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <img className="rounded-t-lg" src="https://i.pinimg.com/736x/82/fb/c8/82fbc8bd87f6f12347f4e2421fb436be.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-500">Booking Air Ticket App</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            
        </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <img className="rounded-t-lg" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/718/838/datas/original.png" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-500 ">Food Menu Web Design</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            
        </div>
    </div>
  </div>
  </>,
  
  service: 
  <>
  <div className='flex flex-wrap justify-center gap-3 '>
    <div className=" max-w-sm shadow-md rounded p-5 border relative hover:bg-orange-200 duration-500 hover:scale-95">
      <div className=' absolute left-44'><FaDesktop className='text-3xl text-orange-500' /></div>
      <p className='mt-8 text-2xl tracking-wide mb-4'>Web Applications & Programming</p>
      <p className='text-sm tracking-wider'>
        We offer a full website planning, workshop and design service for
        all industry sectors. We are also experts at creating websites for
        mobile phones and tablet devices.
      </p>
    </div>
    <div className=" max-w-sm shadow-md rounded p-5 border relative hover:bg-orange-200 duration-500 hover:scale-95">
      <div className=' absolute left-44'><AiFillHtml5 className='text-3xl text-orange-500' /></div>
      <p className='mt-8 text-2xl tracking-wide mb-4'>Responsive Design</p>
      <p className='text-sm tracking-wider'>
        We have deep expertise in the latest web technologies. Our
        development team is highly flexible and always strives to work in
        close cooperation with our clients.
      </p>
    </div>
    <div className=" max-w-sm shadow-md rounded p-5 border relative hover:bg-orange-200 duration-500 hover:scale-95">
      <div className=' absolute left-44'><FaTools className='text-3xl text-orange-500' /></div>
      <p className='mt-8 text-2xl tracking-wide mb-4'>UI/UX Design</p>
      <p className='text-sm tracking-wider'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus alias nobis expedita
         cumque similique possimus, eius fuga. Eos doloremque, 
        quam quos quas praesentium officiis dolorum cum perferendis adipisci porro sint?
      </p>
    </div>
  </div>
  </>,
};

const Project = () => {

  const [activeTabKey1, setActiveTabKey1] = useState('project');

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <>
    <div className='text-center mt-20'>
    <p className=" text-center text-2xl font-normal mb-10"><span className=' text-orange-500'>Proj</span>ects</p>
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        className='border-orange-500 shadow-lg'
      >
        {contentList[activeTabKey1]}
      </Card>
     
    </div>
    </>
  )
}

export default Project