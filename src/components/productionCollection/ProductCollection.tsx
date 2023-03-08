import React from 'react';
import styles from './ProductCollection.module.css';
import {Row,Col,Divider} from 'antd';
import { ProductImage } from './ProductImage';
interface PropsType{
    title:JSX.Element;
    sideImage:string;
    productList:any[];
}
export const ProductCollection: React.FC<PropsType>=({title,sideImage,productList})=>{
    return <>
    <div className={styles.content}>
        <Divider orientation='left'>{title}</Divider>
        <Row>
            <Col span={4}><img src={sideImage} className={styles["side-image"]} alt=''></img></Col>
            <Col span={20}>
                <Row>
                    <Col span={12}>
                        <ProductImage size={'large'} title={productList[0].title} imageSrc={productList[0].touristRoutePictures[0].url}  price={productList[0].price} id={productList[0].id}
                        />
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>
                            <ProductImage size={'small'} title={productList[1].title} imageSrc={productList[1].touristRoutePictures[0].url}  price={productList[1].price} id={productList[1].id}
                        />
                            </Col>
                            <Col span={12}>
                            <ProductImage size={'small'} title={productList[2].title} imageSrc={productList[2].touristRoutePictures[0].url}  price={productList[2].price} id={productList[2].id}
                        />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                            <ProductImage size={'small'} title={productList[3].title} imageSrc={productList[3].touristRoutePictures[0].url}  price={productList[3].price} id={productList[3].id}
                        />
                            </Col>
                            <Col span={12}>
                            <ProductImage size={'small'} title={productList[4].title} imageSrc={productList[4].touristRoutePictures[0].url}  price={productList[4].price} id={productList[4].id}
                        />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}><ProductImage size={'small'} title={productList[5].title} imageSrc={productList[5].touristRoutePictures[0].url}  price={productList[5].price} id={productList[5].id}/></Col> 
                    <Col span={6}><ProductImage size={'small'} title={productList[6].title} imageSrc={productList[6].touristRoutePictures[0].url}  price={productList[6].price} id={productList[6].id}/></Col>
                    <Col span={6}><ProductImage size={'small'} title={productList[7].title} imageSrc={productList[7].touristRoutePictures[0].url}  price={productList[7].price} id={productList[7].id}/></Col>
                    <Col span={6}><ProductImage size={'small'} title={productList[8].title} imageSrc={productList[8].touristRoutePictures[0].url}  price={productList[8].price} id={productList[8].id}/></Col>
                </Row>
            </Col>
        </Row>
    </div></>;
}