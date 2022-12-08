import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { GoPerson } from "react-icons/go";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import Form from 'react-bootstrap/Form'; 
import { CiMail } from "react-icons/ci";

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
           <div class="s1">
             <p class="ps1">Our Services</p>
             <p class="ps2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
             <p class="ps3">eiusmod tempor incididunt ut labore et Lorem ipsum</p>
           </div>
           <div class="s2" style={{backgroundColor: "white"}}>
              <p class="sb">Finance Planning</p>
              <p class="fpt">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum nibh urna, euismod ut
               ornare non Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. 
               Vestibulum nibh urna, 
               euismod ut ornare non
               </p>
           </div>
           <div class="s3" style={{backgroundColor: "white"}}>
              <p class="sb">Market Research</p>
              <p class="fpt">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum nibh urna, euismod ut
               ornare non Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. 
               Vestibulum nibh urna, 
               euismod ut ornare non
               </p>
           </div>
           <div class="s4" style={{backgroundColor: "white"}}>
              <p class="sb">Business Planning</p>
              <p class="fpt">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum nibh urna, euismod ut
               ornare non Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. 
               Vestibulum nibh urna, 
               euismod ut ornare non
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

         {/* Image Gallery after service  */}
         <div className="gallery">
            <div class="g1"></div>
            <div class="g2" style={{ backgroundColor: "aqua"}}>
              <p style={{ color: "blue", fontSize: "20px"  }}> How long before the 
                 <br></br> exit you must be 
                 <br></br>planning it
              </p>
              <p>
               Lorem Ipsum is simply text the
               printing and typesetting standard industry. 
               Lorem Ipsum has been the industry's 
               standard dummy text.
              </p>
            </div>
            <div class="g3"></div>
            <div class="g4" style={{ backgroundColor: "aqua" }}>
            <p style={{ color: "blue", fontSize: "20px"  }}> How long before the 
                 <br></br> exit you must be 
                 <br></br>planning it
              </p>
              <p>
               Lorem Ipsum is simply text the
               printing and typesetting standard industry. 
               Lorem Ipsum has been the industry's 
               standard dummy text.
              </p>
            </div>
            <div class="g5" style={{ backgroundColor: "aqua" }}>
            <p style={{ color: "blue", fontSize: "20px"  }}> How long before the 
                 <br></br> exit you must be 
                 <br></br>planning it
              </p>
              <p>
               Lorem Ipsum is simply text the
               printing and typesetting standard industry. 
               Lorem Ipsum has been the industry's 
               standard dummy text.
              </p>
            </div>
            <div class="g6"></div>
            <div class="g7" style={{ backgroundColor: "aqua" }}>
            <p style={{ color: "blue", fontSize: "20px"  }}> How long before the 
                 <br></br> exit you must be 
                 <br></br>planning it
              </p>
              <p>
               Lorem Ipsum is simply text the
               printing and typesetting standard industry. 
               Lorem Ipsum has been the industry's 
               standard dummy text.
              </p>
            </div>
            <div class="g8"></div>
         </div>
         

         {/* Our clients */}
          <div class="clnts" >
            <div class="clt1" >
              <p class="clt11">Our Clients</p>
              <p class="clt111">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore et Lorem ipsum
              </p>
            </div>
            <div class="clt2">
              <p>
                Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et <br></br>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
               <div >
                 <img
                   src={c1}
                   alt="girl" 
                   class="c1"                        
                  />
               </div>
               <p class="td">Tedd Wilson</p>
            </div>
            <div class="clt3">
               <p>
                Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et <br></br>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
              <div>
                 <img
                   src={c2}
                   alt="girl"  
                   class="c2"                        
                  />
               </div>
               <p class="td">Tedd Wilson</p>
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

