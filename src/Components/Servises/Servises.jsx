import servisPhoto4 from './../../Image/Usługi/Group 9.png';
import servisPhoto2 from './../../Image/Usługi/Group 8.png';
import servisPhoto3 from './../../Image/Usługi/Group 5 (1).png';
import servisPhoto1 from './../../Image/Usługi/Group 7.png';
import servisPhoto5 from './../../Image/Usługi/Rectangle 11 (3).png';
import servisPhoto5a from './../../Image/Usługi/neodym1 2.png';
import style from './Servises.module.css';
import {Col, Row, Typography} from "antd";
import * as React from "react";
import backgroundVector2 from "../../Image/Vector 2.png";


const imageTable3 = [
    {
        key: 6,
        src: servisPhoto1,
    },
    {
        key: 7,
        src: servisPhoto2,
    },
    {
        key: 8,
        src: servisPhoto3,
    },
    {
        key: 9,
        src: servisPhoto4,
    },

];


const Servises = () => {
    return (

        <>
            <Row id='003'>
                <h3 className={style.titleContent}>Usługi</h3>
            </Row>
            <Row justify='center'  gutter={[0, 16]}>
                {imageTable3.map((el) => <Col key={el.key} lg={{span: 4,}} xs={{span: 13}}> <img className={style.servisPhoto} src={el.src}/> </Col>)}
                <Col lg={{span: 4}} xs={{span: 13}} >
                    <div className={style.servisPhoto}>
                    <img alt={'photo service'} className={style.servisPhoto5} src={servisPhoto5}/>
                    <img alt={'photo service2'}  src={servisPhoto5a} className={style.servisPhoto5a}/>
                    <p className={style.servisPhoto5b}>Wydobycie obiektów <br/> żelaznych ze studni,<br/> kanałów itp.
                    </p>
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col lg={{span: 12}} xs={{span: 24}} >
                    <Typography className={style.paragraf}>
                        Swoje usługi kieruję w stronę firm archeologicznych, budowlanych, policji, wojsku, straży
                        pożarnej,
                        nurkom i firmom detektywistycznym, a także profesjonalistom z branży akwakultury, poszukiwań i
                        ratownictwa, oraz podwodnej inspekcji.
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img alt={'photo service3'} src={backgroundVector2} className={style.backgroundVector2}/>
                </Col></Row>


        </>

    )
};

export default Servises;