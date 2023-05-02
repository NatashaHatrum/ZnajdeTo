import * as React from "react";
import documentBackground from './../../Image/OBJECTS.png';
import photoContent from './../../Image/image 5.png';
import photoContent2 from './../../Image/wykrywka 2.png';
import photoContent3 from './../../Image/image0 1.png';
import style from './OMnie.module.css'
import {Col, Row, Typography} from 'antd';

const imageTable = [
    {
        key: 0,
        src: photoContent,
        className: style.photoContent
    },
    {
        key: 1,
        src: photoContent3,
        className: style.photoContent3
    },
    {
        key: 2,
        src: photoContent2,
        className: style.photoContent2
    },
];

const OMnie = () => {
    return (

        <>
            <img src={documentBackground} className={style.documentBackground}/>
            <Row className={style.tempRow3}>
                <Col span={24} className={style.tempColumn}>
                    <Row id='001'>
                        <Col lg={{span: 12,}} xs={{span: 24}}>
                            <h3 className={style.titleContent}>O mnie</h3>
                            <Typography className={style.paragraf1}>
                                <b>Posiadam wieloletnie doświadczenie </b> w poszukiwaniu i lokalizacji zaginionych
                                lub ukrytych przedmiotów. Zarówno najmniejszych jak średniowieczne denary, po
                                największe, jak części maszyn wojskowych. Zajmuję się również inspekcją podwodną.
                            </Typography>
                            <Typography className={style.paragraf1}>
                                <b>Dysponuje najnowocześniejszym sprzętem </b> służącym do detekcji i namierzania
                                obiektów
                                metalowych a także do poszukiwań podwodnych.
                            </Typography>
                        </Col>
                        <Col span={12}>
                            {imageTable.map((el) => <img key={el.key} src={el.src} className={el.className}/>)}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
};

export default OMnie;