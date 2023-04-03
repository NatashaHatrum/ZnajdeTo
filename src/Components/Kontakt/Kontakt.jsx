import style from './Kontakt.module.css';
import {Col, Row, Space, Typography} from "antd";
import * as React from "react";
import foto1 from './../../Image/Kontakt/chasing2 1.png'
import foto2 from './../../Image/Kontakt/dron 2 1.png'
import Formularz from "../Form/Form";


const Kontakt = () => {
    return (
        <>

            <Row justify='center' id='004'>
                <Col lg={{span: 20}} xs={{span: 12}}>
                    <h3 className={style.titleContent}>Kontakt</h3>
                </Col>
                <Col  lg={{span: 3, offset:7}} xs={{span: 12, offset:1}}>
                    <img className={style.foto1} src={foto1}/>
                    <img className={style.foto2} src={foto2}/>
                </Col>
            </Row>
            <Row justify='center' style={{position: 'absolute', marginTop: '13%', width: '100vw'}}>
                <Col  lg={{span: 7, pull: 0 }} xs={{span: 24, pull:5}}>
                    <div className={style.kontaktsContent}>
                        <h2>Znajdeto.pl</h2>
                        <span className={style.name}>Marcin Bartnik</span>
                        <div className={style.ikons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </div>
                        <p className={style.info}> <a href="tel:509451333">509451333</a></p>
                        <div className={style.ikons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                        </div>
                        <p className={style.info}>Znajdetopl@gmail.com</p>
                        <div className={style.ikons}>
                            <a href='https://www.facebook.com/profile.php?id=100089563406302&is_tour_dismissed=true' target="_blank" className='link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                     className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0
                             4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131
                             3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303
                             1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </a>
                        </div>
                        <p className={style.info}> odwiedź nas <br/> na facebooku </p>
                    </div>
                </Col>
                <Col lg={{span: 16}} xs={{span: 22}}><Formularz/></Col>
            </Row>

        </>

    )
};

export default Kontakt;