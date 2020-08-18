import React from 'react';
import "./About.css";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Button from 'react-bootstrap/esm/Button';



class About extends React.Component{

    render(){

        return(
            <div>
                <div className="overlay">
                <Jumbotron fluid className="jumbo">
                    
                    <Container fluid>
                        <Row >
                            <Col></Col>
                            <Col xl={4} md={12} sm={12}><br/><br/><br/><h1>WELCOME</h1><br/><h5>Hello my name is Joseph Mannina. I am a full-stack software developer with proffesional experience in a microsoft stack. Currently located in Scottsdale, AZ and actively seeking development positions.</h5><br/></Col>
                            <Col xl= {4} md={12} sm={12}><Image fluid src="/14.png"/></Col>
                            <Col></Col>
                            
                        </Row>
                    </Container>

                    
        
          
                </Jumbotron>
                </div>

            </div>
        )
    }
}

export default About;









