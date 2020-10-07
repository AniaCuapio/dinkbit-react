import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button  } from 'reactstrap';
import FooterForm from '../../components/FooterForm'
import BlogHeader from '../../components/BlogHeader'
//import {getEntriesService} from '../../services'
import BlogCard from '../../components/BlogCard'

import styles from './Blog.module.scss'

export default function Blog (){

    const [entries, setEntries] = useState([])

  //  async function getEntries() {
  //      console.log('funciona')
  //        try {
  //          const response = await getEntriesService()
  //          const data = response.data
  //          let parsedPosts = [];
  //          for (let key in data) {
  //            let post = data[key];
  //            post["key"] = key;
  //            parsedPosts.push(post);
  //          }
  //          if (parsedPosts) {
  //            setEntries(parsedPosts);
  //          }
  //          console.log(entries)
  //          console.log(typeof(entries))
  //        } catch (e) {
  //          console.log(e)
  //        }
  //    }

//      useEffect(() => {
//        fetch("https://dinkbit-api-quick-gelada-ua.mybluemix.net/entries")
//          .then((res) => res.json())
//          .then((data) => {
//            console.log(data);
//            let parsedEntries = [];
//            for (let key in data) {
//              let post = data[key];
//              post["key"] = key;
//              parsedEntries.push(post);
//            }
//            if (parsedEntries) {
//              setEntries(parsedEntries);
//            console.log(entries)
//            console.log(typeof(entries))
//            }
//          });
//      }, []);
    


//      const UICards = entries.map(
//        ({ _id, author, authorDescription, authorImage, authorPhrase, content, createdAt, imageurl, title}) => (
//          <Col key={_id}>
//            <BlogCard  title={title} content={content} createdAt={createdAt} imageurl={imageurl} author={author} />
//          </Col>
//        )
//        )    {UICards}

return (
    <>      
    <BlogHeader />
    <Container>
    <Row>
    <Col  >
    <Col >
       <BlogCard  />
    </Col>
    </Col>
  </Row>
    </Container>
        <div className={styles.newsletterContainer}>
            <div className={styles.text}>
                <p> Suscríbete a nuestro Newsletter</p>
                <Form>
                <FormGroup className={styles}>
                    <input type="email" name="email" id="email" placeholder="Correo eléctronico" />
                </FormGroup>
                <button > Suscribirme </button>
                </Form>
            </div>
            <div className={styles.imagen}>
                <img alt="" width="100%" src='/newsletter.png' />
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <h1>¡Te queremos escuchar!</h1>
            <Button color="primary" > Contáctanos </Button>
        </div>
    <FooterForm />
    </>
  )
}