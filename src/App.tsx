import React from 'react';
import{ Header,Footer,SideMenu,CarouseRight} from './components';
import styles from './App.module.css';

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
      </div>
      <Footer/>
    </div>
  );
}

export default App;
