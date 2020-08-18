import React from 'react';
import "./Project.css";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



class Project extends React.Component{
    render() {
        return (
            <div id="project">
                <Container id="projectContainer" fluid>
                    <br/><br/>
                    <Row>
                        <Col></Col>
                        <Col id="col"> <h1>What I've Done</h1></Col>
                        <Col></Col>
                    </Row>
                    <br/><br/>
                    <Row id="row">
                        <Col></Col>
                        <Col md={4} sm={12} id="colproject">
                            <Image id fluid src="/weather.png"></Image>
                            
                        </Col>
                        <br/>
                        <Col id="colproject" md={4} sm={12}>
                        <br/>
                        <h2>Weather Bot</h2><br/><h5>Developed a messenger bot that utilizes geolocation and weather APIs to convert a city or zip code into coordinates, using the data to return the current weather forecast for any location in the world. Built with: Visual Studio, Node.js, discord.js, Open Cage Data API, & Open Weather API. Made available for public use at github.com/Jmannina/weather-bot. Deployed with Heroku and maintained using git version control.</h5>
                        </Col>  
                        <Col></Col>
                    </Row>

                    <Row id="row"></Row>
                    
                    <Row id="row">
                        <Col md={{ order:0}}></Col>
                        <Col id="colproject" xs={{span: 12, order:3}} md={{span: 4, order:2}}>      
                        <br/>
                        <h2>Personal Website</h2><br/><h5>This website here. Fully-responsive and works well with all viewports. Built with React.js, React-Bootstrap, and CSS. </h5>
                            </Col> 
                            
                            <Col id="colproject" xs={{span: 12, order:2}} md={{span: 4, order:3}}><Image fluid src="/person.png"></Image></Col>
                            <Col md={{order:4}}></Col>
                        </Row>
                        <Col></Col>

                    <Row id="row">
                        <Col></Col>
                    </Row>
                        
                    <Row id="row">
                        <Col></Col>
                        
                        <Col md={4}sm={12} id="colproject">
                            <Image fluid src="/comingsoon.png"></Image>
                            
                        </Col>
                        <Col id="colproject" md={4}sm={12}>
                        <br/>
                        <h2>Coming Soon...</h2><br/><h5>More projects in progress.Currently focusing on learning and developing voice-first applications for alexa devices.</h5>
                        </Col>  
                       
                        <Col></Col>
                    </Row>

                    <br/><br/>
                </Container>
            </div>

        );
    }
}
export default Project;