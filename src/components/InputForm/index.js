import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './InputForm.module.scss'

const inputForm = () => {
  return (
    <Form className={styles.container}>
      <FormGroup className={styles.item1}>
        <Label for="fullName">Nombre y apellido</Label>
        <Input name="fullName" id="fullName" placeholder="Ingresa tu número completo" />
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
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
         No soy un robot
        </Label>
      </FormGroup>
      <Button>Enviar</Button>
      <p> </p>
    </Form>
  );
}

export default inputForm;
