import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';



export const Home = () => {
  return (
    <div>

      <Container fluid className="img-txt">
        
          <p class="txt1">Welcome To Company</p>
          <p class="txt2">Lorem ipsum dolor sit amet</p>
          <div class="hbtn">
             <div ><Button variant="outline-info" >Read More</Button></div>
             <div><Button variant="outline-info">About Us</Button></div>
          </div>
          
      </Container>

    </div>
  );
};

