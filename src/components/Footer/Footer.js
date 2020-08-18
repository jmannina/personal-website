import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



class Footer extends React.Component{

    render (){
        return(
            <div id="contact">
                <Container id="containerfooter" fluid>
                    <br/><br/>
                    <Row>
                        <Col></Col>
                        <Col id="colfooter"> <h1>WHERE TO FIND ME</h1></Col>
                        <Col></Col>
                    </Row>
                    <br/><br/><br/><br/>
                    <Row>
                        <Col md={4} sm={12} id="colfooter"><a href="https://www.linkedin.com/in/joseph-mannina"> <Image id="imagefooter" src="/linkedin.png" fluid /></a> </Col>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Col md={4} sm={12} id="colfooter"> <a href="https://github.com/jmannina"><Image id="imagefooter" src="/github.png" fluid /> </a>  </Col>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Col md={4} sm={12} id="colfooter"><a href="mailto:jmannina96@gmail.com"> <Image id="imagefooter" src="/email.png" fluid /> </a> </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                




                </Container>
            </div>

        );
    }
}

export default Footer;