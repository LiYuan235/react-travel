import React from 'react';
import{ Header,Footer,SideMenu,CarouseRight,ProductCollection, BusinessPartners} from './components';
import styles from './App.module.css';
import {Typography} from 'antd'
import { productList1,productList2,productList3 } from './mockups';
import sideImage1 from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';

import {Row,Col} from 'antd'


function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/* {页面内容} */}
      <div className={styles['page-content']}>
        <Row style={{marginTop:10}}>
          <Col span={6} ><SideMenu/></Col>
          <Col span={18} ><CarouseRight/></Col>
        </Row>
        <ProductCollection title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>} 
          sideImage={sideImage1}
          productList={productList1}/>
        <ProductCollection title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>} 
          sideImage={sideImage2}
          productList={productList2}/>
        <ProductCollection title={<Typography.Title level={3} type="success">国内游推荐</Typography.Title>} 
          sideImage={sideImage3}
          productList={productList3}/>
      </div>
      <BusinessPartners/>
      <Footer/>
    </div>
  );
}

export default App;
