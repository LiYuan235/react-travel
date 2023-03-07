import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Layout,Typography,Input} from 'antd'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt='' className={styles['App-logo']}></img>
          <Typography.Title level={3} className={styles['title']}>React旅游网</Typography.Title>
          <Input.Search placeholder='请输入旅游目的地、主题或关键词' className={styles['search-input']}/>
          </Layout.Header>
      </div>
    </div>
  );
}

export default App;
