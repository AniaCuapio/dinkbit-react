import React from 'react'
import FooterForm from '../../components/FooterForm'
import Header from '../../components/Header'
import InputForm from '../../components/InputForm'
import { Container, Row, Col } from 'reactstrap';

export default function ContactForm (){
    
    return (
        <>      
        <Header />
        <Container>
            <Row>
                <h1> Te queremos escuchar</h1>
                <p> Si tienes dudas, comentarios, propuestas, proyectos o quieres trabajar con nosotros, escríbenos. </p>
            </Row>
            <Row>
                <div>
                <InputForm />
                </div>
            </Row>
        </Container>
        <FooterForm />
        </>
    )
}