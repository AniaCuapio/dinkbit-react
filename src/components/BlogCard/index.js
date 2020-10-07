import React from 'react';
import {  Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import styles from './BlogCard.module.scss'
import Avatar from '../../components/Avatar'

const BlogCard = ({title, content, createdAt, imageurl, author, authorImage}) => {

  function processDate (date){
  }

let readableDate = processDate(createdAt)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let randomNumber = getRandomInt(20)

//  let description = `${content.slice(0, 20)+'...'}`
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={imageurl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
          <Avatar authorImage={authorImage}></Avatar>
          <CardText> {author} </CardText>
          <CardText> {readableDate} Lectura de {randomNumber} min</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
