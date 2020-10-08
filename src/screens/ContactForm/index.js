import React, {useState} from 'react'

//components
import Header from '../../components/Header'
//import InputForm from '../../components/InputForm'
import FooterForm from '../../components/FooterForm'

import {addUserMessageService} from '../../services'

//CSS and reactstrap
import styles from './ContactForm.module.scss'
import { Container, Row, Col  } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function ContactForm (){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country_id: "",
    message: "",
  });

  const handleChange = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

 /*   async function handleForm ({ fullName }) {
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
      }*/

      const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await addUserMessageService(formData);
        console.log(formData)
        console.log(formData, response);
      };

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
      <Form className={styles.container} onSubmit={handleFormSubmit}>
      <FormGroup className={styles.item1} >
        <Label for="fullName">Nombre y apellido</Label>
        <Input callback={handleChange} name="fullName" id="fullName" placeholder="Ingresa tu nombre completo" />
      </FormGroup>
      <FormGroup className={styles.item2}>
        <Label for="email">Correo electrónico</Label>
        <Input callback={handleChange} type="email" name="email" id="email" placeholder="Ingresa tu correo eléctronico" />
      </FormGroup>
      <FormGroup className={styles.item3}>
        <Label for="phone"> Teléfono </Label>
        <Input callback={handleChange} name="phone" id="phone" placeholder="Ingresa tu número telefónico" />
      </FormGroup>
      <FormGroup className={styles.item4}>
        <Label for="country">País</Label>
        <Input onChange={(e) => handleChange(e.target)} type="select" name="country" id="country">
          <option>México</option>
          <option>España</option>
        </Input>
      </FormGroup>
      <FormGroup className={styles.item5}>
        <Label for="message">Mensaje</Label>
        <Input callback={handleChange} type="textarea" name="message" id="message" placeholder="Cuéntanos de tu proyecto o comentario"/>
      </FormGroup>
    <div className={styles.item6} >
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
         No soy un robot
        </Label>
      </FormGroup>
    </div>
      <div className={styles.item7} >
        <div><Button type="submit" color="primary">Enviar</Button></div>
      <p> Al dar click en el botón aceptas nuestra <a href=""> Política de privacidad</a> </p>
      </div>
    </Form>

            </Row>
        </Container>
        <FooterForm />
        </>
    )
}

/*              <InputForm callback={handleChange} />*/