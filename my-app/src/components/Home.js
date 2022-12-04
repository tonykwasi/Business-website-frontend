import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { GoPerson } from "react-icons/go";


export const Home = () => {
  return (
    <div>
       {/* text over background image*/}
      <Container fluid className="img-txt">
        
          <p class="txt1">Welcome To Company</p>
          <p class="txt2">Lorem ipsum dolor sit amet</p>
          <div class="hbtn">
             <div ><Button variant="outline-info" >Read More</Button></div>
             <div><Button variant="outline-info">About Us</Button></div>
          </div>

      </Container>

      {/* The About section */}
      <div className="about">
          <div className="item1" >
            <h3>About US</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <p style={{lineHeight: "1px"}}>eiusmod tempor incididunt ut labore et Lorem ipsum</p>
          </div>
          <div className="item2" >
             <div ><Button bg="outline-info" class="go">< GoPerson /></Button></div>
             <div class="badge">
               <p class="badge1">Business Planning</p>
               <p class="badge2">delectus reiciendis maiores alias</p>
               <p class="badge2">consequatur aut.maiores alias</p>
             </div>
          </div>
          <div className="item3" >
            <div ><Button bg="outline-info"class="go" >< GoPerson /></Button></div>
            <div class="badge">
               <p class="badge1">Market Research</p>
               <p class="badge2">delectus reiciendis maiores alias</p>
               <p class="badge2">consequatur aut.maiores alias</p>
             </div>
          </div>
          <div className="item4" >
             <div ><Button bg="outline-info" class="go">< GoPerson /></Button></div>
             <div class="badge">
               <p class="badge1">Business Strategy</p>
               <p class="badge2">delectus reiciendis maiores alias</p>
               <p class="badge2">consequatur aut.maiores alias</p>
             </div>
          </div>
          <div className="item5">
             <div ><Button bg="outline-info" class="go">< GoPerson /></Button></div>
             <div class="badge">
               <p class="badge1">Finance Planning</p>
               <p class="badge2">delectus reiciendis maiores alias</p>
               <p class="badge2">consequatur aut.maiores alias</p>
             </div>
          </div>
      </div>
       

       {/* Our Services Page */}
        <div class="services">
           <div class="s1" style={{backgroundColor: "blue"}}>1</div>
           <div class="s2" style={{backgroundColor: "green"}}>2</div>
           <div class="s3" style={{backgroundColor: "brown"}}>3</div>
           <div class="s4" style={{backgroundColor: "red"}}>4</div>
        </div>
        <br></br><br></br><br></br><br></br>
    </div>
  );
};

