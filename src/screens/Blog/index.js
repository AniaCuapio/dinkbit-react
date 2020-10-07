import React, { useEffect, useState } from 'react'

import {getEntriesService} from '../../services'
import BlogCard from '../../components/BlogCard'

//components
import BlogHeader from '../../components/BlogHeader'
import BottomContainer from '../../components/BottomContainer';
import FooterForm from '../../components/FooterForm'

//CSS and reactstrap
import styles from './Blog.module.scss'
import { Container, Row, Col  } from 'reactstrap';

export default function Blog (){

  const [entries, setEntries] = useState([])


    async function getEntries() {
        console.log('funciona')
          try {
          const response = await getEntriesService()
          const posts = response.data.entries
          setEntries(posts)
          console.log(posts)
          console.log(entries)
          /*let parsedPosts = [];
         for (let key in data) {
          let post = data[key];
             post["key"] = key;
          parsedPosts.push(post);
           }
            if (parsedPosts) {
              setEntries(parsedPosts);
            }
            console.log(entries)
           console.log(typeof(entries))*/
          } catch (e) {
            console.log(e)
          }
      }

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
    
      /*const UICards = posts.map(
        ({ _id, author, authorDescription, authorImage, authorPhrase, content, createdAt, imageurl, title}) => (
          <Col key={_id}>
           <BlogCard  title={title} content={content} createdAt={createdAt} imageurl={imageurl} author={author} />
          </Col>
       )
        )   */

        useEffect(()=>{
          getEntries()
        }, [])

return (
    
    <>      
    <BlogHeader />
    <Container>
      <Row>
        <Col  sm="12" md="8"  >
          {
            entries.map( entry => <li>{entry.author}</li>)
          }
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Col >
        <Col className={styles.aside} md="4" >
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
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