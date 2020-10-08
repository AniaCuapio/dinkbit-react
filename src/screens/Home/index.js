import React, {useState, useEffect} from 'react'

//Components
import Header from '../../components/Header'
import FooterForm from '../../components/FooterForm'
import BottomContainer from '../../components/BottomContainer'
import ClientCard from '../../components/ClientCard'
import Slider from '../../components/Slider'

//Styles & reactstrap
import styles from './Home.module.scss'
import { Container, Row, Col } from 'reactstrap';

export default function HomePage (){

const clientsArray =[
    {'key': 1, 'img': '/divya.jpg', 'title': 'Divya', 'description': 'Diseño y Desarrollo Web - México'},
    {'key': 2, 'img': '/pilates_001.jpg', 'title': 'The Fit Pilates', 'description': 'Diseño y desarrollo Web, Branding - México'},
]

const clientsArray2 =[
    {'key': 3,'img': '/bullAndTank_001.jpg', 'title': ' Bull & Tank', 'description': 'Diseño y Desarrollo Web - México'},
    {'key': 4,'img': '/refly.jpg', 'title': 'Refly', 'description': 'Diseño y Desarrollo Web, Branding - México'},
    {'key': 5,'img': '/pakmail.jpg', 'title': 'Pakmail', 'description': 'Diseño y Estrategia de Redes Sociales - México'}
]


const [clients, setClients] = useState(clientsArray)
const [clients2, setClients2] = useState(clientsArray2)

useEffect(()=>{
    setClients(clientsArray)
    setClients2(clientsArray2)
  }, [])

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
            <img alt="" src='/diseño.jpg' ></img>
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
    <div className={styles.thirdContainer} >
                    <div className={styles.item1}>
                    <h4> Proyectos </h4>
                    <h2> Lucen increíble, funcionan incréible</h2>
                    {clients.map( client =>
                    <div key={client.key}>
                    <ClientCard  data={client} />
                    </div>)}
                    <button > Ver más proyectos </button>
                    </div>
                    <div className={styles.item2}>
                    {clients2.map( client =>
                    <div key={client.key}>
                    <ClientCard  data={client} />
                    </div>
                    )}
                    </div>
    </div>
    <div className={styles.fourthContainer} >
       <Container>
           <Row>
               <Col><Slider /></Col>
               <Col>
               <h2> Un poco de nosotros</h2>
               <h4> Somos un equipo de creativos, diseñadores, desarrolladores, mercadólogos y creadores de contenido que trabajan para hacer de tu marca, algo increíble. </h4>
               <button > Ver más </button>
               </Col>
           </Row>
       </Container>
    </div>
    <div>
        <Container className={styles.fifthContainer}>
            <Row>
                <Col  sm="12" md="4">
                <h4> Clientes </h4>
                <h2> Confían en nuestro trabajo</h2>
                <button > Ver más </button>
                </Col>
                <Col sm="12" md="8">
                <img alt="" width="80%" src='/mosaico_001.jpg' ></img>
                </Col>
            </Row>
        </Container>
    </div>

    <div className={styles.sixthContainer} >
        <Container>
            <Row>
                <Col className={styles.textWrapper} md='8'>
                <h2> Tu tienda en línea en una semana</h2>
                <p> ¿ Quieres convertir una gran idea en un negocio online?</p>
                <p> Adáptate al cambio y abre tu tienda online, ¡es el momento!</p>
                <div className={styles.button}> Ver mas información </div>
                </Col>
                <Col md='4'>
                <div className={styles.imagen}>
                    <img alt="" src='/banner-tienda.png' ></img>
                </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div  className={styles.seventhContainer} >
    <Container>
        <Row>
            <Col className={styles.wrapper} >
            <img alt="" width="50%" src="indicadores-17.svg" />
            <h2>+600</h2>
            <h4> Clientes que confían en nuestro trabajo </h4></Col>
            <Col className={styles.wrapper}>
            <img alt="" width="50%" src="indicadores-18.svg" />
            <h2>+1000</h2>
            <h4> Proyectos de marketing, desarrollo y diseño</h4></Col>
            <Col className={styles.wrapper}>
            <img alt="" width="50%" src="indicadores-19.svg" />
            <h2>TOP #30</h2>
            <h4> Posicionados como agencia de marketing en México </h4>
            </Col>
        </Row>
        <Row>
        <Col className={styles.title} >
        <h2>Compartimos </h2>
        <h2>lo que sabemos</h2>
        </Col>
        </Row>
<Row>
    <Col >
        <img width="90%" src="/bottomCards.jpg"></img>
    </Col>
    </Row>
    <Row>
        <Col className={styles.buttonContainer} >
            <div className={styles.button}> Ver más artículos </div>
        </Col>
    </Row>
</Container>
    
    

    

    </div>

<BottomContainer />
<FooterForm />
</>
    )
}