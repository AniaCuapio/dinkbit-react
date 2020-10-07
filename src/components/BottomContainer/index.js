import { Row, Col  } from 'reactstrap';
import React from 'react'
import styles from './BottomContainer.module.scss'

export default function BottomContainer(){
    return (
<Row className={styles.bottomContainer}>
<Col >
    <h2>¡Te queremos</h2>
    <h2>escuchar!</h2>
    <button > Contáctanos </button>
</Col>
</Row>
    )
}
