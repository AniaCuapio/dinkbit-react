import React from 'react'

//components
import Header from '../../components/Header'
import FooterForm from '../../components/FooterForm'

//Styles & reactstrap
import styles from './Home.module.scss'
import { Container, Row, Col } from 'reactstrap';

//Components
import BottomContainer from '../../components/BottomContainer'

export default function HomePage (){
    return (
<>
<Header />
    <div className={styles.firstContainer} >
        <p> dinkbit es un Equipo Creativo </p>
        <h2> Hacemos cosas</h2>
        <h2>increíbles</h2>
    </div>
    <div className={styles.secondContainer} >
        <div className={styles.imagen}>
            <img src='/diseño.jpg' ></img>
        </div>
        <div className={styles.blackContainer}>
        <Container>
            <Row>
                <Col sm='3' >
                </Col>
                <Col className={styles.text} sm='6'>
                <h4> ¿Qué hacemos? </h4>
                <h2> Diseño</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className={styles.button}> Ver mas </div>
                </Col>
                <Col sm='3'>
                </Col>
            </Row>
        </Container>
        
        </div>
    </div>
    <div className={styles.thirdContainer} > </div>
<BottomContainer />
<FooterForm />
</>
    )
}