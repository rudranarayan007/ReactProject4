import React from "react";
import "./Card.css";
import Iso from "../Asset/Image/Iso.png";
import Marble from "../Asset/Image/Marble.jpg";
import Frame from "../Asset/Image/Frame.jpg";
import Bottle from "../Asset/Image/Bottle.jpg";
import Member from "../Asset/Image/Member.jpg";
import Instagram from "../Asset/Image/Instagraam.jpg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Card(props) {
  return (
    <div>
      <div className="navbar">
        <div>
          <h2> Joale</h2>
          <nav>
            <ul>
              <li>
                {" "}
                <a href="#">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Page</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Portfolio</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Blogs</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Shop</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Element</a>{" "}
              </li>
            </ul>
          </nav>
          <div className="icons">
            <ShoppingCartIcon />
            <SearchIcon />
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="Cyan"></div>
      <div className="think">
        <h1>
          Think Simple <br />
          Design Simple
        </h1>
        <div className="textdivider"></div>
        <div className="textdividercircle"></div>
        <br />
        <p>
          Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl
          nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus
          nullam eget felis eget nunc lobortis mattis
        </p>
        <p>Mollis aliquam ut porttitor leo a diam sollicitudin</p>
        <button>READ MORE</button>
      </div>
      <div className="particle">
        <img src={Iso} />
      </div>
      {/* part2 */}
      <div className="uxui">
        <div className="Rectangle"></div>
        <h1 className="ux">
          UX/UI Design <br />
          We are an Awesome Agency
        </h1>
        <div className="paramaster">
          <div className="paragaraph">
            <p>
              Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
              nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
              risus nullam eget felis eget nunc lobortis mattis mi ipsum
              faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget
              felis eget nunc lobortis mattis nisl nunc mi ipsum faucibus vitae
              aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc
              lobortis mattis mi ipsum faucibus vitae aliquet nec ullamcorper
              sit amet risus nullam eget felis eget nunc lobortis mattis nisl
              nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
              risus nullam eget felis eget nunc lobortis mattis mi ipsum
              faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget
              felis eget nunc lobortis mattis
            </p>
          </div>
          <div className="paragaraph2">
            <p>
              Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
              nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
              risus nullam eget felis eget nunc lobortis mattis mi ipsum
              faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget
              felis eget nunc lobortis mattis nisl nunc mi ipsum faucibus vitae
              aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc
              lobortis mattis mi ipsum faucibus vitae aliquet nec ullamcorper
              sit amet risus nullam eget felis eget nunc lobortis mattis
            </p>
          </div>
          <div className="paragaraph3">
            <p>
              Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
              nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
              risus nullam eget felis eget nunc lobortis mattis mi ipsum
              faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget
              felis eget nunc lobortis mattis
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="Photocontainer">
        <div className="Cont1">
          {" "}
          <img src={Marble} />
        </div>
        <div className="Cont2">
          {" "}
          <img src={Frame} />{" "}
        </div>
        <div className="Cont3">
          <img src={Bottle} />{" "}
        </div>
      </div>
      <div className="Photocontainer2">
        <div className="Cont5">
          <img src={Frame} />{" "}
        </div>
        <div className="Cont6">
          {" "}
          <img src={Bottle} />
        </div>
        <div className="Cont4">
          {" "}
          <img src={Marble} />
        </div>
      </div>

      <div className="Strategy">
        <h1>
          Website Stategy and Implementation <br /> Let's Get Satrted with Joale
          PSD Template
        </h1>
        <button>PURCHASE NOW</button>
      </div>
      <div className="planning">
        <BusinessCenterIcon style={{ color: "green" }} />
        <div className="plan">
          {" "}
          <h2> 01/Planning </h2>
          <p>
            {" "}
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob
          </p>
        </div>
        <div className="design">
          {" "}
          <h2> 02/Design </h2>
          <p>
            {" "}
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob
          </p>
        </div>
        <div className="dev">
          {" "}
          <h2> 03/Development </h2>
          <p>
            {" "}
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob
          </p>
        </div>
        <div className="promo">
          {" "}
          <h2> 04/Promotion </h2>
          <p>
            {" "}
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob
          </p>{" "}
        </div>
      </div>

      <div>
        <img src={Member} />
      </div>
      <div className="Where">
        <h3>
          Where do new ideas come from <br /> the answer is simple:differnces
          Creativity comes from unlikely juxtapositions
        </h3>
      </div>
      <div className="White"></div>

      <div className="Footer">
        <div className="partone">
          <div className="smallpart">
            <div>
              <h4> About us </h4>
              <div className="pinkline"></div>
              <br /> <p> About us</p> <p> Privacy Policy</p>{" "}
              <p> Terms and condition</p>
              <p> Services</p> <p> Works</p> <p> Contact Us</p> <p> Socials </p>{" "}
              <p> Quote Us</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="smallpart2">
            <div>
              <h4> Company</h4>
              <div className="pinkline"></div>
              <br /> <p> Career</p> <p> Customers</p> <p> Help</p>
              <p> Our Terms</p> <p> help</p> <p> Leader Board</p> <p> Awards</p>{" "}
              <p> Reputations</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="smallpart3">
            <div>
              <h4> Services</h4>
              <div className="pinkline"></div>
              <br /> <p> Design</p> <p> Development</p> <p> Digital</p>
              <p> Campeign</p> <p>SEO</p> <p> Social</p> <p> Branding</p>{" "}
              <p> help</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="smallpart4">
            <div>
              <h4> Insatgram</h4>
              <div className="pinkline"></div>
              <br />
              <img src={Instagram} />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="whiteline"></div>
          <div className="joalefooter">
            <h2> Joale</h2>
           
            <p> Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam eget felis eget nunc lob</p>
            <h4> Contact </h4>
            <div className="addres"> <p> Plot No 504/2382/2701, First Floor, Phase-II,
              Kanan Vihar, Patia, Bhubaneswar, Odisha 751024</p></div>
         
         <div className="iconsfoot">
<FacebookIcon/>
<TwitterIcon/>
<WhatsAppIcon/>
<EmailIcon/>
<YouTubeIcon/>
         </div>
          </div>
        </div>
      </div>
      <div className="parttwo">
        <p> @2022 All Copyright reserverd by RN Dash </p>
      </div>
    </div>
  );
}
