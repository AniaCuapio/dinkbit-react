import React from 'react'

//components
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'
import BottomContainer from '../../components/BottomContainer'
import FooterForm from '../../components/FooterForm'

//CSS and reactstrap
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './Detail.module.scss'

export default function DetailView (){
let post = {
    "_id": "5f766513520eb955cd5ca9b6",
    "author": "Gerardo",
    "authorDescription": "Android Developer",
    "authorImage": "https://dinkbit.com/assets/img/dinkbit/gerardo.png",
    "authorPhrase": "Think out of the box",
    "createdAt": "2020-06-22T00:16:26.759Z",
    "imageurl": "https://dinkbit.com/storage/wink/images/IOzLDv6T9xapO4AVLvQVBSHxB31OG510oFCgZPHB.png",
    "content": "La compañías siempre buscan oportunidades para alcanzar la mayor audiencia con sus productos o servicios. Si tu empresa busca lanzar un servicio digital, actualmente tienes muchas opciones para elegir la plataforma en la que será lanzado y en el mercado actual esa decisión es vital para determinar su éxito. ¿Cómo puedes identificar si tu idea se adapta a ser una aplicación móvil? Esa es la pregunta que responderemos en este artículo. Aplicación para mi negocio. En 2020, según el portal de investigación GSMA Intelligence, ya hay más de 5.2 mil millones de smartphones, ¡casi uno por persona en el planeta!; además, a eso hay que añadirle que por diversas razones de preferencias actuales, las aplicaciones móviles son el formato que más se adapta al comportamiento de consumo de la mayoría de las generaciones actuales. Y es que, gracias a la capacidades de un smartphone, su comodidad, sus diferentes funciones cómo: acceso a ubicación, detector de movimiento, acceso a Internet, reproductor multimedia, integración con aplicaciones de terceros y servicios en la nube, etc. Prácticamente se puede materializar cualquier idea en un aplicación móvil, pero vamos por partes. ¿Porqué una aplicación móvil? Cada idea o proyecto son diferentes, para encontrar y aprovechar al máximo las oportunidades de que sean exitosos deben tener muy claro su alcance y propósito para que se pueda desarrollar el producto que se ajuste y cumpla perfectamente con el objetivo del servicio o producto. Aplicación movil. Cuando se trata de un servicio o producto digital, tarde o temprano te enfrentarás a la difícil (?) decisión de si desarrollar un sitio web o una aplicación. Aunque al principio puede parecer abrumador elegir, realmente sólo necesitas hacer un pequeño análisis de qué quieres para tu idea de negocio y si algún requerimiento sólo es posible o si funciona significativamente mejor en el contexto de un smartphone, ¡la decisión está tomada! Exploremos las posibilidades Tomemos como ejemplo algunos casos de éxito actuales, ¿Uber tendría el mismo éxito sin las capacidades de rastreo en tiempo real y portabilidad de los teléfonos inteligentes que tienen tanto operadores como usuarios?, aplicaciones para presentar contenido en vía streaming cómo Netflix, Spotify para música, o Sei para meditación, por mencionar unos ejemplos, son más practicas, frecuentemente utilizadas en smartphones y además ofrecen funciones para ver contenido aunque el usuario no tenga conexión a Internet. También hay aplicaciones para notas, agenda o rutinas de ejercicios que son más eficientes en una aplicación móvil gracias a que están en un dispositivo que los usuarios siempre llevan consigo. A continuación te decimos tres características clave que podrían ser el indicio definitivo de que lo que mejor se adapta a tu proyecto es una aplicación móvil.1.  ¿Depende o necesita alguna función de hardware que un smartphone satisface? Los teléfonos actuales, incluso los modelos de gama baja, cuentan con toda una variedad de hardware y software que está disponible para ser utilizado por tu servicio; cámara integrada, acelerómetro, sensor de ubicación, acceso a Internet, micrófono, NFC, algunos equipos incluso tienen lector de huellas digitales, todas esas capacidades en conjunto con el software abren un abanico de posibilidades para materializar tu producto. 2. ¿Tu idea requiere de mucha interacción con tus usuarios? Una aplicación móvil aporta más cercanía con los usuario que cualquier otro tipo de plataforma, esto gracias a que los usuarios tienen acceso inmediato y por eso conexión directa con tu producto o servicio. Una aplicación bien diseñada puede y suele ser utilizada por tus usuarios de manera cotidiana lo cual ayuda a fortalecer el vínculo entre tu negocio y tus clientes.  3.  ¿Tu plataforma necesita funcionar sin internet? Notas, descargar música para escuchar offline, calendario, juegos, acceso a contenido para aprender son sólo algunos ejemplo de acciones o utilidades a los que tus usuarios podrían querer tener acceso aún sin conexión a Internet. Cómo saber si mi negocio necesita una app movil. Si respondiste sí a alguna de estas preguntas es muy probable que tu plataforma funciones mejor en una aplicación móvil, si respondiste sí a todas, es seguro que es lo que necesitas y si quieres una aplicación increíble te invito a revisar nuestro proyectos, donde siempre hacemos cosas increíbles con resultados de cinco estrellas. ¡Nos vemos!",
    "title": "¿Mi negocio necesita una aplicación móvil? "
}


    let {imageurl, title, createdAt, content, author, authorDescription, authorImage, authorPhrase  }=post
    return (<>
    <Header/>
    <Container>
    <Row>
        <Col>
        <a href='/Blog' > Regresar al Blog </a>
        <h1>{title}</h1>
        <div>
        <p>{createdAt}</p>
        <div className={StyleSheet.icons}>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
        </div>
        </div>
        <img width='70%' alt='' src={imageurl} />
        <p>{content}</p>

        <div>
            <Avatar url={authorImage}/>
            <p>{author}</p>
            <p> {authorDescription} </p>
            <p> {authorPhrase} </p>
        </div>

        </Col>
    </Row>
    </Container>
    <BottomContainer />
    <FooterForm />
    </>)
}