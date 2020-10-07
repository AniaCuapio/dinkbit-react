import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './InputForm.module.scss'

function InputForm ({callback}) {
    
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry]=useState('')
  const [message, setMessage] =useState('')

  const saveValues=(values) =>{
  setFullName(fullName)
  console.log(fullName)
  callback(values)
  }

  return (
    <Form className={styles.container}>
      <FormGroup className={styles.item1}>
        <Label for="fullName">Nombre y apellido</Label>
        <Input name="fullName" id="fullName" placeholder="Ingresa tu nombre completo" />
      </FormGroup>
      <FormGroup className={styles.item2}>
        <Label for="email">Correo electrónico</Label>
        <Input type="email" name="email" id="email" placeholder="Ingresa tu correo eléctronico" />
      </FormGroup>
      <FormGroup className={styles.item3}>
        <Label for="phone"> Teléfono </Label>
        <Input name="phone" id="phone" placeholder="Ingresa tu número telefónico" />
      </FormGroup>
      <FormGroup className={styles.item4}>
        <Label for="country">País</Label>
        <Input type="select" name="country" id="country">
          <option>México</option>
          <option>España</option>
        </Input>
      </FormGroup>
      <FormGroup className={styles.item5}>
        <Label for="message">Mensaje</Label>
        <Input type="textarea" name="message" id="message" placeholder="Cuéntanos de tu proyecto o comentario"/>
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
        <div><Button onClick={() => saveValues()} color="primary">Enviar</Button></div>
      <p> Al dar click en el botón aceptas nuestra <a> Política de privacidad</a> </p>
      </div>
    </Form>
  );
}
export default InputForm