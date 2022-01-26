import HeaderContent from '../HeaderContent';

import { Layout } from 'antd';

const { Content } = Layout;

function DefaultLayout({ children }) {
  return (
    <Layout className="site-layout">
      <Content
        style={{
          padding: '0 20px',
          margin: '0px auto',
          width: '100%',
          minHeight: '100vh',
          maxWidth: '1100px',
        }}
      >
        <HeaderContent />
        {children}
      </Content>
    </Layout>
  );
}

export default DefaultLayout;
