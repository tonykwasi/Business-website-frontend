import React from "react";
import "./Services.css";
import { FaRegHandPeace } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { CiMail } from "react-icons/ci";

export const Services = () => {
  return (
    <div>
      {/* first session */}
      <div class="backgroud-image"></div>
      <div class="txt">Home / / Service</div>

      <div class="service">
        <div class="serve1">
          <p class="p">Our Services</p>
          <p class="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br></br>
            eiusmod tempor incididunt ut labore et Lorem ipsum
          </p>
        </div>
        <div class="serve2">
          <div class="icon">
            <FaRegHandPeace />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
        <div class="serve3">
          <div class="icon">
            <FaSistrix />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
        <div class="serve4">
          <div class="icon">
            <FaRegChartBar />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
        <div class="serve5">
          <div class="icon">
            <FaCheck />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
        <div class="serve6">
          <div class="icon">
            <FaHandshake />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
        <div class="serve7">
          <div class="icon">
            <FaRegComment />
          </div>
          <p class="ict">Finance Planning</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Vestibulum nibh urna
          </p>
        </div>
      </div>

      {/* Our Services Page */}
      <div class="services">
        <div class="s1">
        <p class="ps1">Service</p>
             <p class="ps2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
             <p class="ps3">eiusmod tempor incididunt ut labore et Lorem ipsum</p>
        </div>
        <div class="s2" style={{ backgroundColor: "white" }}>
          <p class="sb">Finance Planning</p>
          <p class="fpt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare
            non
          </p>
        </div>
        <div class="s3" style={{ backgroundColor: "white" }}>
          <p class="sb">Market Research</p>
          <p class="fpt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare
            non
          </p>
        </div>
        <div class="s4" style={{ backgroundColor: "white" }}>
          <p class="sb">Business Planning</p>
          <p class="fpt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare
            non
          </p>
        </div>
      </div>

      {/* Our Price  */}
      <div className="price">
              <div className= "price1">
                <p class="ps1" style={{ color: "black" }}>Our Price</p>
                <p class="ps2" style={{ color: "brown" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <p class="ps3" style={{ color: "brown" }}>eiusmod tempor incididunt ut labore et Lorem ipsum</p>
              </div>
              <div className= "price2">
                <p className="gld">GOLDEN</p>
                <p>$60 / month</p>
                <p>
                   Lorem ipsum <br></br>
                   Dolor sit <br></br>
                   Consectetuer <br></br>
                   Adipiscing <br></br>
                   Lorem ipsum <br></br>
                </p>
                <Button bg="outline-info" >Read More</Button>
              </div>
              <div className= "price3">
                <p className="gld">PREMIUM</p>
                <p>$60 / month</p>
                <p>
                   Lorem ipsum <br></br>
                   Dolor sit <br></br>
                   Consectetuer <br></br>
                   Adipiscing <br></br>
                   Lorem ipsum <br></br>
                </p>
                <Button bg="outline-info" >Read More</Button>
              </div>
              <div className= "price4" style={{ backgroundColor: "blue"}}>
                <p className="gld">PLATINUM</p>
                <p>$70 / month</p>
                <p>
                   Lorem ipsum <br></br>
                   Dolor sit <br></br>
                   Consectetuer <br></br>
                   Adipiscing <br></br>
                   Lorem ipsum <br></br>
                </p>
                <Button bg="outline-info" >Read More</Button>
              </div>
              <div className= "price5">
                <p className="gld">SILVER</p>
                <p>$80 / month</p>
                <p>
                   Lorem ipsum <br></br>
                   Dolor sit <br></br>
                   Consectetuer <br></br>
                   Adipiscing <br></br>
                   Lorem ipsum <br></br>
                </p>
                <Button bg="outline-info" >Read More</Button>
              </div>
          </div>

         {/* footer */}

         <div class="footer" style={{backgroundColor: "black"}}>
             <div class="footer1">
               <p class= "ad">Address</p>
               <p class="ad1">
                  Address <br></br> 
                  Melbourne,south Brisbane, <br></br> 
                  QLD 4101,Aurstralia.
               </p>
               <p class="ad2">
                 Phone <br></br> + 1 (234) 567 8901
               </p>
               <p class="ad3">
                 Email <br></br> info@example.com
               </p>
             </div>
             <div class="footer2" >
                <p class= "ad">Twitter Us</p>
                <p class="ad1">
                  sit amet consectetur adipiscing <br></br> 
                  info@example.com <br></br> 
                  Posted 3 days ago
               </p>
               <p class="ad1">
                  sit amet consectetur adipiscing <br></br> 
                  info@example.com <br></br> 
                  Posted 3 days ago
               </p>
             </div>
             <div class="footer3" >
               <p class= "ad">NewsLetter</p>
               <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                 />
                 <Button bg="danger">< CiMail /></Button>
               </Form>
               <p class="ad1">
                  sit amet consectetur adipiscing <br></br> 
                  info@example.com <br></br> 
                  Posted 3 days ago
               </p>
             </div>
             <div class="footer4" >
                <p class="ec">Economy</p>
                <p class="ad1">© 2019 Economy . All Rights Reserved | Design by Tony</p>
             </div>
          </div>

    </div>
  );
};
