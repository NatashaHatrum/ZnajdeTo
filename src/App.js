import './App.css';
import React from "react";
import Head from "./Components/Header/Header";
import OMnie from "./Components/OMnie/OMnie";
import Layout from "antd/es/layout";
import Education from "./Components/Doświadczenie/Education";
import Servises from "./Components/Servises/Servises";
import Kontakt from "./Components/Kontakt/Kontakt";
import {Col, Row, theme} from 'antd';


function App() {
    const {Header, Content, Footer} = Layout;
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const calculateImage = (screenHeight)=> {
        if(window.width < 1440 ){
            return 900
        }
        else return window.innerHeight
    };

    console.log(window.innerWidth)
    console.log(document.innerHeight, window.innerHeight)
    return (
        <>
            <Layout>
                <Header className='headerStyle' style={{height: calculateImage(window.innerHeight)}}>
                    <Head/>
                    <Row className='tempRow'>
                        <Col span={24} className='tempColumn'>
                            <div className='title'>Profesjonalne<br/>poszukiwania</div>
                            <div className='title2'>i lokalizowanie obiektów <br/> metalowych oraz podwodnych</div>
                        </Col>
                    </Row>
                </Header>
                <Content className={'contentSection'} style={{
                    background: colorBgContainer,
                    marginTop: "-9%"
                }}>
                    <OMnie/>
                    <Education/>
                    <Servises/>
                    <Kontakt/>
                </Content>
                <Footer className="footerStyle"
                        style={{
                            background: colorBgContainer,
                        }}>
                    <span className='footer1'>Copyright 2023 </span> <span className='footer2'> Znajdeto.pl </span>
                </Footer>
            </Layout>

        </>
    );
}

export default App;
