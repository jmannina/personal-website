import React from 'react';
import "./Work.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





class Work extends React.Component{

   
    render(){

        return(
            

            


            <div id="work">
                
                <Container id='containerwork' fluid>
                <Col></Col>
                        <Col id="colfooter"> <h1>WHAT I KNOW</h1></Col>
                <Col></Col>
                <br/><br/>
                <Row>
                <Col id="colfooter" sm={12} md={4}> <Image fluid src="/development.png"/><br/><br/> <h2>Development</h2><br/><h5>Full-stack development experience using a variety of technologies. A strong fundamental background of computer science knowledge with a Bachelor of Science in Computer Science.</h5> <br/></Col>
                
                <Col id="colfooter" sm={12}md={4}> <Image fluid src="/design.png"/><br/><br/> <h2>Design</h2><br/><h5>Designed user interfaces and user experiences for numerous applications and websites during my time acquiring a minor in interactive and social media.</h5> <br/></Col>
                
                <Col id="colfooter" sm={12} md={4}> <Image  fluid src="/project.png"/><br/><br/> <h2>Communication</h2><br/><h5>Excellent verbal and written communication skills, working both with technical and non-technical audiences.</h5> <br/></Col>
                

                </Row>
               
  
               
                </Container>
                
            </div>
        )
    }
}

export default Work;
