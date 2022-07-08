import React from "react";
import styled from "styled-components";
import List from "./List";
import services from "../data";

const Info = () => {
  return (
    <Wrapper>
      {/* <List /> */}
      <section className="list">
        <article>
          <p>Lorem ipsum dolor sit amet.</p>
          <hr />
          <p>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <button>Copy</button>
          </p>
        </article>
      </section>
      <header>
        <h1> Advanded Statistics </h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <div className="">
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            let Position = "item-1";
            if (id === 2) {
              Position = "item-2";
            }
            if (id === 3) {
              Position = "item-3";
            }
            return (
              <article key={id} className={`service ${Position} `}>
                <div className="image-container">
                  <img src={icon} alt="" className="icon" />
                </div>
                {/* <span className="icon">{icon}</span> */}
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
      {/* <section className="services-center">
        <div className="service">
          <span className="icon">{icon1}</span>
          <h3> Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.{" "}
          </p>
        </div>
        <div className="service">
          <span className="icon">{icon2}</span>
          <h3> Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.{" "}
          </p>
        </div>
        <div className="service">
          <span className="icon">{icon3}</span>
          <h3> Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </section> */}
    </Wrapper>
  );
};

export default Info;
const Wrapper = styled.section`
  background-color: hsl(0, 0%, 92%);
  padding: 3rem;
  padding-block: 10rem;

  header {
    margin: 10rem;
    margin-inline: auto;
    text-align: center;
    p {
      font-size: 1.5rem;
      color: hsl(0, 0%, 55%);
      font-weight: 500;
    }
  }
  .list {
    margin-inline: auto;
    padding: 1.4rem;
    p {
      font-size: 2rem;
      font-weight: 700;
      h5 {
        font-size: 1.5rem;
        color: hsl(180, 66%, 49%);
        font-weight: 700;
        margin-block-start: 2rem;
      }
      button {
        margin-inline-start: 0.2rem;
        width: 100%;
        font-size: 2rem;
        padding: 0.8rem;
        border: none;
        background: hsl(180, 66%, 49%);
        color: var(--clr-white);
        font-weight: 700;
      }
    }

    background-color: white;
  }

  .services-center {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .services-center {
    display: grid;
    gap: 2rem;
  }
  .service {
    background: var(--clr-white);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    margin-inline: auto;
    margin-block-start: 5rem;
    width: 90%;
    h4 {
      font-size: 1.7rem;
      font-weight: 700;
      color: hsl(260, 8%, 14%);
    }
    p {
      text-align: center;
      color: hsl(0, 0%, 75%);
      font-size: 1.3rem;
    }
    .image-container {
      background-color: hsl(257, 27%, 26%);
      border-radius: 80%;
      padding-block: 1.8rem;
      padding-inline: 0.8rem;
      width: 30%;
      margin-block-start: -7rem;
      margin-block-end: 3rem;
      margin-inline: auto;
      img {
        width: 60%;
      }
    }
  }

  span {
    width: 7rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    transform: translateY(-150%);
    svg {
      font-size: 8rem;
      color: hsl(257, 27%, 26%);
    }
  }
  @media (min-width: 992px) {
    margin-block-start: 10rem;
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .item-3 {
      background-color: red;
      transform: translateY(20%);
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(10.2rem);
    }
  }
`;
