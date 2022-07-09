import styled from "styled-components";
import List from "./List";
import services from "../data";
import { useEffect, useState } from "react";
import bg1 from "../images/bg-shorten-mobile.svg";
import bg2 from "../images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Info = () => {
  const [query, setQuery] = useState("");
  const [Loading, setLoading] = useState(false);
  const [List, setList] = useState(getLocalStorage());
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(List));
  }, [List]);
  const FetchLink = async () => {
    const response = await fetch(
      ` https://api.shrtco.de/v2/shorten?url=${query}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Wrapper>
      {/* <List /> */}

      <section className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            FetchLink();
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            name="query"
            placeholder="Shorten a link here..."
          />
          <button> Shorten Url</button>
        </form>
      </section>
      <section className="list">
        <article>
          <p>Lorem ipsum dolor sit amet.</p>
          <hr />
          <p className="copy">
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
    </Wrapper>
  );
};

export default Info;
const Wrapper = styled.section`
  background-color: hsl(0, 0%, 92%);
  padding-block-end: 10rem;

  header {
    margin: 10rem;
    margin-inline: auto;
    text-align: center;
    width: 90%;
    p {
      font-size: 1.5rem;
      color: hsl(0, 0%, 55%);
      font-weight: 500;
    }
  }
  .form {
    background: url(${bg1}) left/contain, hsl(257, 27%, 26%);
    border-radius: 10px;
    padding: 2rem;
    transform: translateY(-50%);
    width: 80%;
    @media (min-width: 65rem) {
      width: 90%;
    }
    margin-inline: auto;
    form {
      display: flex;
      flex-direction: column;
      @media (min-width: 650px) {
        display: grid;
        grid-template-columns: 1fr 20rem;
        justify-items: center;
        align-items: center;
      }
      input {
        border: none;
        border-radius: 5px;
        padding: 1rem;
        margin-inline: auto;
        width: 100%;
      }
      button {
        display: block;
        background: hsl(180, 66%, 49%);
        color: var(--clr-white);
        border: none;
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        border-radius: 5px;
      }
    }
  }
  .list {
    margin-inline: auto;
    padding: 1.6rem;
    width: 80%;
    background-color: white;
    border-radius: 15px;
    @media (min-width: 65rem) {
      padding: 1rem;
      width: 90%;
      article {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .copy {
          display: grid;
          grid-template-columns: 1fr 10rem;
          align-items: center;
          gap: 4rem;
        }
      }
    }

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
        font-size: 1rem;
        padding: 0.8rem;
        border: none;
        border-radius: 10px;
        background: hsl(180, 66%, 49%);
        color: var(--clr-white);
        font-weight: 700;
      }
    }
  }

  .services-center {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  @media (min-width: 65rem) {
    padding-block-end: 20rem;
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      width: 95%;
      margin-inline: auto;
    }
    .item-3 {
      transform: translateY(40%);
    }
    .item-2 {
      transform: translateY(20%);
    }
  }
`;
