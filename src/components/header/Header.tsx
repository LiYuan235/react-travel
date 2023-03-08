import React from 'react'
import styles from './Header.module.css'
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import logo from '../../assets/logo.svg';
import {useHistory,useLocation,useParams,useRouteMatch} from "react-router-dom"


export const Header: React.FC = () => {
  const history=useHistory();
  const location=useLocation();
  const params=useParams();
  const match=useRouteMatch();
  const handleMenuClick = () => {}
  const items: MenuProps['items'] = [
    {
      label: '中文',
      key: '1',
    },
    {
      label: 'English',
      key: '2',
    },
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <>
      <div className={styles['app-header']}>
        {/* {top-header} */}
        <div className={styles['top-header']}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15, width: 100 }}
            menu={menuProps}
            size="small"
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']} size="small">
            <Button onClick={()=>{history.push("register")}}>注册</Button>
            <Button onClick={()=>{history.push("signIn")}}>登陆</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']}></img>
          <Typography.Title level={3} className={styles['title']}>
            React旅游网
          </Typography.Title>
          <Input.Search
            placeholder="请输入旅游目的地、主题或关键词"
            className={styles['search-input']}
          />
        </Layout.Header>

        {/* {导航栏} */}
        <Menu mode="horizontal" className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>自由行</Menu.Item>
          <Menu.Item key={5}>私家团</Menu.Item>
          <Menu.Item key={6}>邮轮</Menu.Item>
          <Menu.Item key={7}>酒店+景点</Menu.Item>
          <Menu.Item key={8}>当地玩乐</Menu.Item>
          <Menu.Item key={9}>主题游</Menu.Item>
          <Menu.Item key={10}>定制游</Menu.Item>
          <Menu.Item key={11}>游学</Menu.Item>
          <Menu.Item key={12}>签证</Menu.Item>
          <Menu.Item key={13}>企业游</Menu.Item>
          <Menu.Item key={14}>高端游</Menu.Item>
          <Menu.Item key={15}>爱玩户外</Menu.Item>
          <Menu.Item key={16}>保险</Menu.Item>
        </Menu>
      </div>
    </>
  )
}
