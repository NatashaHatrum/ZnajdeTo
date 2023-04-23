import './App.css';
import React from "react";
import Head from "./Components/Header/Header";
import OMnie from "./Components/OMnie/OMnie";
import Layout from "antd/es/layout";
import background from './Image/tlo21.png';
import Education from "./Components/Doświadczenie/Education";
import Servises from "./Components/Servises/Servises";
import Kontakt from "./Components/Kontakt/Kontakt";
import {theme} from 'antd';


function App() {
    const {Header, Content, Footer} = Layout;
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <>
            <Layout>
                <Header className='headerStyle'>
                    <img src={background} className='backgroundPhoto'/>
                    <Head/>
                </Header>
                <Content className={'contentSection'} style={{
                    background: colorBgContainer}}>
                    <OMnie/>
                    <Education/>
                    <Servises/>
                    <Kontakt/>
                </Content>
                <Footer style={{
                    background: colorBgContainer,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '83px'
                }}>
                    <span className='footer1'>Copyright 2023 </span> <span className='footer2'> Znajdeto.pl </span>
                </Footer>
            </Layout>

        </>
    );
}

export default App;
