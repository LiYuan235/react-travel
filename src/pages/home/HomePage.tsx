import React from 'react'
import {
  Header,
  Footer,
  SideMenu,
  CarouseRight,
  ProductCollection,
  BusinessPartners,
} from '../../components';
import { Typography } from 'antd';
import styles from './HomePage.module.css';
import { productList1, productList2, productList3 } from './mockups';
import sideImage1 from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { Row, Col } from 'antd';
import {withTranslation,WithTranslation} from 'react-i18next'
import i18n from '../../i18n/config';
class HomePageComponent extends React.Component<WithTranslation> {
  render(): React.ReactNode {
    const {t}=i18n;
    return (
      <>
          <Header />
          {/* {页面内容} */}
          <div className={styles['page-content']}>
            <Row style={{ marginTop: 10 }}>
              <Col span={6}>
                <SideMenu />
              </Col>
              <Col span={18}>
                <CarouseRight />
              </Col>
            </Row>
            <ProductCollection
              title={
                <Typography.Title level={3} type="warning">
                  {t("home_page.hot_recommended")}
                </Typography.Title>
              }
              sideImage={sideImage1}
              productList={productList1}
            />
            <ProductCollection
              title={
                <Typography.Title level={3} type="danger">
                  {t("home_page.new_arrival")}
                </Typography.Title>
              }
              sideImage={sideImage2}
              productList={productList2}
            />
            <ProductCollection
              title={
                <Typography.Title level={3} type="success">
                  {t("home_page.domestic_travel")}
                </Typography.Title>
              }
              sideImage={sideImage3}
              productList={productList3}
            />
          </div>
          <BusinessPartners />
          <Footer />
      </>
    )
  }
}
export const HomePage =withTranslation()(HomePageComponent);
