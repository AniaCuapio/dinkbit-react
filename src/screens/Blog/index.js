import React, { useEffect, useState } from 'react'

//Services
import {getEntriesService} from '../../services'

// RRD
import { Link, useRouteMatch } from "react-router-dom";

//components
import BlogHeader from '../../components/BlogHeader'
import BlogCard from '../../components/BlogCard'
import BottomContainer from '../../components/BottomContainer';
import FooterForm from '../../components/FooterForm'

//CSS and reactstrap
import styles from './Blog.module.scss'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Blog (){

  const { url } = useRouteMatch();

  const [entries, setEntries] = useState([])

    async function getEntries() {
        console.log('funciona')
          try {
          const response = await getEntriesService()
          const posts = response.data.entries
          setEntries(posts)
          console.log(posts)
          console.log(entries)
          } catch (e) {
            console.log(e)
          }
      }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    let randomNumber = getRandomInt(20)
      
    useEffect(()=>{
      getEntries()
    }, [])

return (
    <>      
    <BlogHeader />
    <Container>
      <Row>
        <Col  sm="12" md="9"  >
          {entries.map( entry =>
          <>
          <Col key={entry._id}>
          <Link to={`${url}/${entry._id}`}>
          <BlogCard  data={entry} />
          </Link>
          </Col>
          </>)
          }
        </Col >
        <Col className={styles.aside} md="3" >
          <h4> Filtros</h4>
        <Form>
          <FormGroup check>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
            <Label check>
            <Input type="checkbox" />{' '}
              Check me out
            </Label>
          </FormGroup>
        </Form>
        <h4> Top 5 destacados</h4>
        <ul>
        {entries.map( (entry) =>
            (
            <Link to={`${url}/${entry._id}`}>
            <li>
            <h6> {entry.title} </h6>
            <p>{entry.createdAt} - Lectura de {randomNumber} min</p>
            </li>
            </Link>
            ))
          }
          </ul>
        </Col>
      </Row>
    </Container>
    <Container  fluid={true}>
        <Row className={styles.newsletterContainer}>
            <Col sm="12" md="6"  className={styles.text}>
                <h2> Suscríbete a nuestro Newsletter</h2>
                  <div className={styles.input}> <span><img alt='envelope' className={styles.icon} src="/envelope-solid.svg" /></span> <p>Correo electrónico</p></div>
                <button > Suscribirme  </button>
            </Col>
            <Col  sm="12" md="6" className={styles.imagen}>
                <img alt="" src='/newsletter.png' />
            </Col>
        </Row>
      <BottomContainer />
      </Container>
    <FooterForm />
    </>
  )
}