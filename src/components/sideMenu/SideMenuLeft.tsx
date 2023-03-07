import React from 'react'
import styles from './SideMenuleft.module.css'
import {Menu} from 'antd'

//这里动态菜单一般使用后台传过来的数据，这里因为不涉及到后端数据，所以先用假数据进行代替
import { sideMenuList } from './mockup';

import {GifOutlined } from "@ant-design/icons"
export const SideMenu:React.FC=()=>{
    return <>
        <Menu mode='vertical' className={styles['side-menu']}>
            {
                sideMenuList.map((r,index)=>{return <Menu.SubMenu key={`side-menu-${index}`} title={<span><GifOutlined/>{r.title}</span>}>
                    {r.subMenu.map((m,index1)=>{return <Menu.SubMenu key={`side-menu-${index1}`} title={<span><GifOutlined/>{m.title}</span>}>
                        {m.subMenu.map((m3,index3)=>{return <Menu.Item key={`side-menu-${index3}`} title={<span><GifOutlined/>{m3}</span>}></Menu.Item>})}
                    </Menu.SubMenu>})}
                </Menu.SubMenu>})
            }
        </Menu>
    </>;
}