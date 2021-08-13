import React from 'react'
import logo from '../../assets/logo.svg';
import styles from './MyHeader.module.css';
import { Layout, Typography, Input, Menu, Dropdown, Button, Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../redux/store';
import { withTranslation, WithTranslation } from 'react-i18next'
import { createAddLanguageAction, createChangeLanguageAction } from '../../redux/actions/language';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
const { Header } = Layout
const { Title, Text } = Typography

// const menuList = ['旅游首页', '周末游', '跟团游', '自由行', '私家团', '游轮', '酒店+景点', '当地玩乐', '主题游', '定制游', '游学', '签证', '企业游', '高端游', '爱玩户外', '保险']

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addLanguage: (name: string, code: string) => {
      const action = createAddLanguageAction(name, code)
      dispatch(action)
    },
    changeLanguage: (code: 'zh' | 'en') => {
      const action = createChangeLanguageAction(code)
      dispatch(action)
    }
  }
}

const mapStateToProps = (state: RootState) => {
  const { language, languageList, } = state.language
  return {
    language,
    languageList
  }
}
type PropsType =
  RouteComponentProps & //react-router 路由props类型
  WithTranslation & // i18n props类型
  ReturnType<typeof mapStateToProps> & // redux store 映射类型
  ReturnType<typeof mapDispatchToProps>; // redux dispatch 映射类型

class MyHeaderCompent extends React.Component<PropsType> {

  handleLanguageChange = (e: any) => {
    const { changeLanguage } = this.props
    changeLanguage(e.key)
  }
  addNewLanguage = () => {
    const { addLanguage } = this.props
    addLanguage('新语言', 'new')
  }
  render() {
    const { history, t, languageList, language } = this.props
    return (
      <header className={styles['app-header']}>
        {/* topheader */}
        <div className={styles['top-header']}>
          <Text>{t('header.slogan')}</Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }} overlay={
              <Menu>
                {languageList.map((l) => (
                  <Menu.Item
                    key={l.code}
                    onClick={this.handleLanguageChange}
                  >{l.name}</Menu.Item>
                ))}
                <Menu.Item
                  onClick={this.addNewLanguage}
                  key={'new'}
                >{t('header.add_new_language')}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >{
              language === 'zh' ? '中文' : 'English'
            }</Dropdown.Button>
          <Space className={styles['button-space']}>
            <Button onClick={() => history.push('signIn')}>{t('header.signin')}</Button>
            <Button onClick={() => history.push('register')}>{t('header.register')}</Button>
          </Space>
        </div>
        {/* main-header */}
        <Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img src={logo} alt="logo" className={styles['App-logo']} />
            <Title level={3} className={styles.title}>
              {t('header.title')}
            </Title>
          </span>
          <Input.Search placeholder={'请输入旅游目的地、主题或关键字'} className={styles['search-input']} />
        </Header>
        {/* main-menu */}
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </header>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(MyHeaderCompent)))