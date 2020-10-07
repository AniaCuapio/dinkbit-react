import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FooterForm.module.scss'
import { Container, Row, Col } from 'reactstrap';
import { faFacebook, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons'

export default function FooterForm (){
    return (
    <Container fluid={true} className={styles.container}>
      <Container>
      <Row>
        <Col xs="12" sm="6" md="2" >
        <img alt='' width="200px" src="/logo-dinkbit-22.png"></img>
        <div className={styles.icons}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faBehance} />
        </div>
        </Col>
        <Col md="1" ></Col>
        <Col xs="12" sm="6" md="3" >
        <h5> EXPLORA</h5>
        <p> Vende Online</p>
        <p> G Suit</p>
        <p> Trabaja con nosotros</p>
        </Col>
        <Col className={styles.mexico}  xs="12" sm="6" md="3" >
            <img alt='mexico' width="15%" src="/mexico.png"/>
            <h5> México</h5>
            <p><span> <img alt='envelope' className={styles.imagu} src="/envelope-solid.svg" /></span> contacto@dinkbit.com</p>
            <p><span> <img alt='phone' className={styles.imagu} src="/phone-solid.svg" /> </span> (+52) 55 22241607 </p>
            <p><span> <img alt='marker' className={styles.imagu} src="/map-marker-alt-solid.svg" /></span> Bosque de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de México, México CP 11700</p>
        </Col>
        <Col className={styles.espana} xs="12" sm="6" md="3" >
            <img alt='espana' width="15%" src="/espana.png"/>
            <h5> España </h5>
            <p><span> <img alt='envelope' className={styles.imagu} src="/envelope-solid.svg" /> </span> contacto@dinkbit.com</p>
            <p><span> <img alt='phone' className={styles.imagu} src="/phone-solid.svg" /> </span> (+34) 657 55 9397 </p>
            <p>(+34) 657 55 9397 </p>
            <p><span> <img alt='marker' className={styles.imagu} src="/map-marker-alt-solid.svg" /></span> Bosque de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de México, México CP 11700</p>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col xs="12" sm="12" md="12"  className={styles.bottomContainer}>
      <div><p>Aviso de Privacidad  Términos y condiciones</p> </div>
      <div>
        <img alt='' className={styles.smallLogo} width="200px" src="/logos-23.png" />
        <img alt='' width="200px" src="/logos-24.png"/>
        <img alt='' width="200px" src="/logos-25.png"/>
        <img alt='' width="200px" src="/logos-26.png"/>
      </div>
      </Col>
      </Row>
      </Container>
    </Container>
    )
}