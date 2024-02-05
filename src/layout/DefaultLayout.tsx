import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';



const { Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={300}
        style={{ backgroundColor: 'black'}}
      >
        {/* <div className="demo-logo-vertical border-b " /> */}

        <Sidebar />
     
      </Sider>
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className={`${'p-4 h-[92vh]'} bg-white w-full overflow-auto `}>
          <Content>
            <main>
              <div>
                <Outlet />
              </div>
            </main>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;

