import React from 'react'

import styles from './FooterForm.module.scss'
import { Container, Row, Col } from 'reactstrap';

export default function FooterForm (){
    return (
        <div className={styles.container}>
    <Container>

      <Row>
        <Col xs="12" sm="6" md="4" >
            <h5> México</h5>
            <hr />

        </Col>
        <Col  xs="12" sm="6" md="4" >
            <h5> España </h5>
            <hr />
            
        </Col>
        <Col   xs="12" sm="6" md="2" >
        <hr />

        </Col>
        <Col   xs="12" sm="6" md="2" >
        <hr />
        <a href="https://dinkbit.com/vende-online"> Vende online </a>
        <br />
        <a href="https://dinkbit.com/gsuite"> G Suite </a>
        <br />
        <a href="https://dinkbit.com/google-ads"> Google Ads </a>
        <br />
        <a href="https://dinkbit.com/menu-digital"> Menú digital para restaurantes</a>
        <br />
        <br />
        <small>
            <a href="https://dinkbit.com/talento"> Trabaja con nosotros</a>
        </small>
        <br />
        <small>
            <a href="https://dinkbit.com/aviso-de-privacidad"> Aviso de Privacidad</a>
        </small>
        <br />
        <small>
            <a href="https://dinkbit.com/politica-de-cookies"> Política de cookies </a>
        </small>
        </Col>
      </Row>
      <Row>
          
      </Row>
    </Container>
        </div>
    )
}