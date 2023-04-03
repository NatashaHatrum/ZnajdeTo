import React from 'react';
import insert from './../../Image/Warstwa_1-2.png'
import {Col, Row, Space} from 'antd';
import Kontakt from "../Kontakt/Kontakt";


const nav = [
    {

        name: 'O mnie',
        className: 'navbar',
        href: '#001'

    },
    {
        name: 'Doświadczenie',
        className: 'navbar',
        href: '#002'
    },
    {
        name: 'Usługi',
        className: 'navbar',
        href: '#003'
    },
    {
        name: 'Kontakt',
        className: 'navbar',
        href: '#004'


    }

];

const Head = () => {


    return (
        <>

            <Row>
                <Col flex={2}>
                    <span> <img className='logo' src={insert} alt='logo'/> </span>
                </Col>
                <Col flex={3}>
                    <Space size={50}>
                        {nav.map((el, index) => <a key={index} href={el.href} className={el.className}>{el.name}</a>)}
                        <a href='https://www.facebook.com/profile.php?id=100089563406302&is_tour_dismissed=true' target="_blank" className='link'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0
                             4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131
                             3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303
                             1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </a>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='title'>Profesjonalne</div>
                    <div className='title3'>poszukiwania</div>
                    <div className='title2'>i lokalizowanie obiektów <br/> metalowych oraz podwodnych</div>
                </Col>
            </Row>

        </>

    )
};

export default Head;