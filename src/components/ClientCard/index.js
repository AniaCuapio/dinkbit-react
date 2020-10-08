import React from 'react';
//CSS & reactstrap
import styles from './ClientCard.module.scss'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function ClientCard({data}){
    let {img, title, description}=data
    return (
    <div className={styles.cardContainer}>
        <Card>
        <CardImg width="100%" src={img} alt="Card image cap" />
        <CardSubtitle className={styles.subtitle}>{description}</CardSubtitle>
        <CardTitle className={styles.title}>{title}</CardTitle>
        </Card>
    </div>
    )
}

