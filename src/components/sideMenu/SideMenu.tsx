import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {
        sideMenuList.map((m, index) => (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            icon={<GifOutlined />}
            title=
            {<span>{m.title}</span>}
          >
            {
              m.subMenu.map((sm, smindex) => (
                <Menu.SubMenu
                  key={`sub-menu-${smindex}`}
                  icon={<GifOutlined />}
                  title={<span>{sm.title}</span>}
                >
                  {
                    sm.subMenu.map((ssm, ssmindex) => (
                      <Menu.Item
                        key={`sub-sub-menu-${ssmindex}`}
                        icon={<GifOutlined />}
                      >
                        <span>{ssm}</span>
                      </Menu.Item>
                    )

                    )
                  }
                </Menu.SubMenu>))
            }
          </Menu.SubMenu>)
        )
      }
    </Menu>
  )
}

export default SideMenu