import { Button, Result } from "antd";

const Error = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button className="bg-orange-500 text-white">Back Home</Button>}
      />
    </div>
  );
};

export default Error;
