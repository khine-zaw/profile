import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaArrowRight, FaFacebook, FaGithub, FaRegUser } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission here
    console.log("Received values:", values);
    message.success('Your send message is successful');
    // You can send the values to your server or perform other actions
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a valid email!",
    },
  };

  return (
    <>
      <div className="ml-44 mt-20">
        <p className="text-2xl font-normal mb-10 tracking-wider">Contact <span className="text-orange-500">Me</span></p>
        <p className="text-1xl font-normal mb-5">Message me</p>
        <div className="flex">
          <div className=" w-72">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true }]}
              >
                <TextArea rows={4} placeholder="Something message" />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-white"
                  icon={<FaArrowRight />}
                  htmlType="submit"
                >
                  Send Message
                </Button>
              </Form.Item>

            </Form>
          </div>
          <div className=" ml-32">
            <p className=" mb-5">Get in Touch </p>
            <div className="flex cursor-pointer mb-4 items-center">
              <p className="text-2xl text-orange-500"><FaRegUser /></p>
              <p className="text-sm ml-2"> Khine Zaw</p>
            </div>
            <Link to='https://www.facebook.com/profile.php?id=100041379411783&mibextid=ZbWKwL' target="_blank">
              <div className="flex cursor-pointer mb-4 items-center">
                <p className="text-2xl text-orange-500"><FaFacebook /></p>
                <p className="text-sm ml-2"> Facebook</p>
              </div>
            </Link>
            <div className="flex cursor-pointer mb-4 items-center">
              <p className="text-2xl text-orange-500"><ImLocation2 /></p>
              <p className="text-sm ml-2"> Rakhine,Sittwe</p>
            </div>
            <Link to='https://github.com/khine-zaw' target="_blank">
              <div className="flex cursor-pointer mb-4 items-center">
                <p className="text-2xl text-orange-500"><FaGithub /></p>
                <p className="text-sm ml-2">My Github</p>
              </div>
            </Link>
            
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
