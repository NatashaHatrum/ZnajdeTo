import * as React from "react"
import photoContent4 from './../../Image/Mask group.png'
import documentBackground2 from './../../Image/TŁO.png'
import backgroundVector from './../../Image/Vector 1.png'
import photoContent5 from './../../Image/Fly.png'
import style from './Education.module.css'
import {Col, Row, Typography} from 'antd';


const imageTable2 = [
    {
        key: 4,
        src: photoContent4,
        className: style.photoContent4
    },
    {
        key: 5,
        src: photoContent5,
        className: style.photoContent5
    },

];

const Education = () => {
    return (

        <>
            <img src={documentBackground2} className={style.documentBackground2}/>
            <img src={backgroundVector} className={style.backgroundVector}/>
            <Row id='002'>
                <Col  lg={{span: 12, order: 0}} xs={{span: 3, order: 1}}>
                    {imageTable2.map(el => <img src={el.src} className={el.className}/>)}
                </Col>
                <Col   lg={{span: 12,}} xs={{span: 24}}>
                    <h3 className={style.titleContent}>Doświadczenie</h3>
                    <Typography className={style.paragraf}>
                        <b>Współpracowałem z wieloma podmiotami </b> takimi jak:
                        <ul className={style.educationList}>
                            <li>Muzeum Bitwy pod Grunwaldem (7 sezonów badań),</li>
                            <li>Muzeum Początków Państwa Polskiego,</li>
                            <li>Muzeum Obozów Jenieckich w Żaganiu,</li>
                            <li>Muzeum Pogranicza w Działdowie,</li>
                            <li>Lubelski Konserwator Zabytków,</li>
                            <li>Lubelski Konserwator Zabytków,</li>
                            <li>prowadziłem poszukiwania na zamku królów i alchemików w Krzepicach.</li>
                        </ul>
                    </Typography>

                    <Typography className={style.paragraf1}>
                        <b>Współpracowałem z wieloma czołowymi producentami wykrywaczy metalu </b>
                        w zakresie testowania i promocji na moim polu testowym Mocny Sygnał.
                    </Typography>
                </Col>
            </Row>


        </>

    )
};

export default Education;