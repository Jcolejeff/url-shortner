import React from "react";
import styled from "styled-components";
import bg from "../images/bg-boost-desktop.svg";
import bg2 from "../images/bg-boost-mobile.svg";
import {
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="boost">
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </section>

      <section className="footer-links">
        <h1>Shortly</h1>

        <div>
          <h5>Features</h5>
          <ul>
            <li> Link Shortening</li>
            <li>Branded Links </li>
            <li> Analytics</li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li> Blog</li>
            <li>Developers</li>
            <li> Support</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li> About</li>
            <li> Our Team</li>

            <li> Careers</li>
            <li> Contact</li>
          </ul>
        </div>
        <div className="social-links">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
     <h6>Coded by ikwuh Jeffery</>
      </section>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: hsl(260, 8%, 14%);

  .boost {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--clr-white);
    gap: 1rem;
    background: url(${bg2}) center/cover no-repeat, hsl(257, 27%, 26%);
    @media (min-width: 65rem) {
      background: url(${bg}) center/cover no-repeat, hsl(257, 27%, 26%);
    }
    height: 30vh;
    h3 {
      font-size: 2rem;
      font-weight: 500;
    }
    button {
      background: hsl(180, 66%, 49%);
      color: var(--clr-white);
      border: none;
      padding: 1.5rem;
      padding-inline: 5rem;
      border-radius: 20px;
      font-size: 1.8rem;
    }
  }
  .footer-links {
    padding: 3rem;
    background-color: hsl(260, 8%, 14%);
    color: var(--clr-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    @media (min-width: 65rem) {
      flex-direction: row;
      justify-content: space-around;
    }
    div {
      text-align: center;
      font-size: 1.2rem;
      color: hsl(257, 7%, 63%);
    }
    h5 {
      font-size: 1.5rem;
      color: var(--clr-white);
    }
  }
h6{color: var(--clr-white);}
  .social-links {
    display: flex;
    gap: 3rem;
    svg {
      font-size: 2.5rem;
      color: var(--clr-white);
    }
  }
`;
