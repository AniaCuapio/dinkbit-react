import React, { useEffect, useState } from 'react'

//Services
import {getEntriesService} from '../../services'

// RRD
import {  BrowserRouter as Router, Switch,  Route,   Link, useParams} from "react-router-dom";
 
//components
import BlogHeader from '../../components/BlogHeader'
import BlogCard from '../../components/BlogCard'
import BottomContainer from '../../components/BottomContainer';
import FooterForm from '../../components/FooterForm'
import DetailView from '../DetailView'

//CSS and reactstrap
import styles from './Blog.module.scss'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Blog (){

//const { url } = useRouteMatch(); useRouteMatch,

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

    //          <Link to={`${url}/${entry._id}`}>
//          </Link>{`${entry._id}
//          <Link to="/detail">


return (
    <>    
    <Router>
    <BlogHeader />
    <Container>
      <Row>
        <Col  sm="12" md="9"  >
          {entries.map( entry =>
          <>
          <Link to="/detail">
          <Col key={entry._id}>
          <BlogCard  data={entry} />
          </Col>
          </Link>
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
            <li>
            <h6> {entry.title} </h6>
            <p>{entry.createdAt} - Lectura de {randomNumber} min</p>
            </li>
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
    <Switch>
    <Route exact path="/detail">
                <DetailView />
          </Route>
    </Switch>
    </Router>  
    
    </>
  )
}