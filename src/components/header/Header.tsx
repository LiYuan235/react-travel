import React from 'react'
import styles from './Header.module.css'
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg';
import {useHistory} from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { changelanguageActionCreator } from '../../redux/language/languageActions';

export const Header: React.FC = (props) => {
  const history=useHistory();
  const { t } = useTranslation();
  const {language,languageList}=useSelector((state:RootState)=>{return {language:state.language,languageList:state.languageList}});
  const dispatch=useDispatch();
  const menuClickHandle=(e:any)=>{
    const action=changelanguageActionCreator(e.key);
    dispatch(action);
  }
  return (
    <>
      <div className={styles['app-header']}>
        {/* {top-header} */}
        <div className={styles['top-header']}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15, width: 100 }}
            size="small"
            overlay={<Menu onClick={menuClickHandle}>
              {languageList.map(l=>{return <Menu.Item key={l.code}>{l.name}</Menu.Item>})}
            </Menu>}
            icon={<GlobalOutlined />}
          >
             {language==="zh"?"中文":"English"}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']} size="small">
            <Button onClick={()=>{history.push("register")}}>{t("header.register")}</Button>
            <Button onClick={()=>{history.push("signIn")}}>{t("header.signin")}</Button>
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
        <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
            <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
            <Menu.Item key={3}>{t("header.group")}</Menu.Item>
            <Menu.Item key={4}>{t("header.backpack")}</Menu.Item>
            <Menu.Item key={5}>{t("header.private")}</Menu.Item>
            <Menu.Item key={6}>{t("header.cruise")}</Menu.Item>
            <Menu.Item key={7}>{t("header.hotel")}</Menu.Item>
            <Menu.Item key={8}>{t("header.local")}</Menu.Item>
            <Menu.Item key={9}>{t("header.theme")}</Menu.Item>
            <Menu.Item key={10}>{t("header.custom")}</Menu.Item>
            <Menu.Item key={11}>{t("header.study")}</Menu.Item>
            <Menu.Item key={12}>{t("header.visa")}</Menu.Item>
            <Menu.Item key={13}>{t("header.enterprise")}</Menu.Item>
            <Menu.Item key={14}>{t("header.high_end")}</Menu.Item>
            <Menu.Item key={15}>{t("header.outdoor")}</Menu.Item>
            <Menu.Item key={16}>{t("header.insurance")}</Menu.Item>
        </Menu>
      </div>
    </>
  )
}
