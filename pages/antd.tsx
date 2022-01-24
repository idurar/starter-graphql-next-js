import type { NextPage } from 'next';
import { Button, Result } from 'antd';

const Antd: NextPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button href="/" type="primary">
            Back Home
          </Button>
        }
      />
    </>
  );
};
export default Antd;
