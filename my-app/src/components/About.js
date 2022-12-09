import React from 'react'
import "./About.css";
import { GoThumbsup } from "react-icons/go";
import Form from 'react-bootstrap/Form'; 
import { CiMail } from "react-icons/ci";
import Button from 'react-bootstrap/Button';

export const About = () => {
  return (
    <div>
        {/* first session */}
        <div class="backgroud-image">
           
        </div>
         <div class="txt">
             Home / / About
          </div>

          {/* Second session */}
          <div class="second-session">
            <div class="ss1" >
                <div class="ss55">
                   <p class="psees">
                     delectus reiciendis maiores alias consequatur aut.maiores alias Lorem <br></br>
                     ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod delectus <br></br>
                     reiciendis maiores alias consequatur aut.maiores alias Lorem ipsum dolor <br></br> 
                     sit amet, consectetur
                   </p>
                </div>
                <div class="ss66">
                   <p class="psee">
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                   </p>
                </div>
                <div class="ss77" >
                   <p class="psee">
                     < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                     < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                     < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                     < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                     < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                    < GoThumbsup /> Lorem ipsum dolor sit <br></br>
                   </p>
                </div>
            </div>
            <div class="ss2">
                <div class="ss11" ></div>
                <div class="ss22" ></div>
                <div class="ss33" ></div>
                <div class="ss44" ></div>
            </div>
            
          </div>


          {/* third session */}
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
          
          {/* Our Team */}
          <div class="team" >
            <div class="team1" >
              <p class="os">Our Team</p>
              <p class="os2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore et Lorem ipsum
              </p>
            </div>
            <div class="team2">
               <p class="pp">Willam Jon <br></br> Founder</p>
               
            </div>
            <div class="team3" >
               <p class="pp">Sam Jcob <br></br>   Director</p>
               
            </div>
            <div class="team4" >
              <p class="pp">Liam Max <br></br>Marketing</p>
              
            </div>
            <div class="team5">
              <p class="pp">Willam Jon <br></br>Manager</p>
               
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
  )
}
