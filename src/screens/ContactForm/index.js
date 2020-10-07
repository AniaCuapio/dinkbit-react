import React from 'react'
import FooterForm from '../../components/FooterForm'
import Header from '../../components/Header'
import InputForm from '../../components/InputForm'
import { Container, Row, Col, Modal  } from 'reactstrap';
import styles from './ContactForm.module.scss'
import {addUserMessageService} from '../../services'

export default function ContactForm (){
    
    async function handleForm ({ fullName }) {
        const createdAt = new Date()
        const userMessage = { fullName, createdAt }
        try {
          const response = await addUserMessageService(userMessage)
          console.log(response)
          const postID = response.data.newEntry._id
          console.log(postID)
          localStorage.setItem('postID', postID)
          if (!postID) {
            Modal.error({
              title: 'Error',
              content: 'El post no se guardó, por favor vuelve a intentarlo'
            })
          } else {
            Modal.success({
              content: 'El post se guardó exitosamente'
            })
          }
        } catch (error) {
          console.log('error', error)
        }
      }

    return (
        <>      
        <Header />
        <Container>
            <Row>
                <Col className={styles.titulo}>
                <h1> Te queremos escuchar</h1>
                <p> Si tienes dudas, comentarios, propuestas, proyectos o quieres trabajar con nosotros, escríbenos. </p>
                </Col>
            </Row>
            <Row>
                <InputForm callback={handleForm} />
            </Row>
        </Container>
        <FooterForm />
        </>
    )
}