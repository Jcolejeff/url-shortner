import { useState } from "react";
import styled from "styled-components";
import hero from "../images/illustration-working.svg";
import hero2 from "../images/illustration-working.png";

const Hero = () => {
	const [query, setQuery] = useState("");
	const FetchLink = async () => {
		const response = await fetch(
			` https://api.shrtco.de/v2/shorten?url=${query}`
		);
		const data = await response.json();
		console.log(data);
	};
	return (
		<Wrapper>
			<section className="hero">
				<div>
					<picture>
						<source media="(min-width:650px)" srcSet={hero} />
						<img src={hero2} alt="hero" />
					</picture>
				</div>
				<div className="desc">
					<h1>
						More than just <br /> shorter links
					</h1>
					<p>
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<button>Get Started</button>
				</div>
			</section>
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
		</Wrapper>
	);
};

export default Hero;

const Wrapper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.desc {
		margin-inline: auto;
		text-align: center;
		h1 {
			font-weight: 700;
			font-size: 4rem;
		}
		p {
			font-size: 1.8rem;
			color: hsl(0, 0%, 75%);
			margin-block-end: 3rem;
			line-height: 1.8;
		}
		button {
			background: hsl(180, 66%, 49%);
			color: var(--clr-white);
			border: none;
			padding: 1.5rem;
			font-size: 1.8rem;
			font-weight: 700;
			padding-inline: 4.5rem;
			border-radius: 30px;
		}
	}
	.hero {
		picture {
			text-align: center;
			margin-inline-start: 3rem;
		}
	}
	.form {
		form {
			display: flex;
			flex-direction: column;
			input {
				border: none;
				border-radius: 5px;
				padding: 1.7rem;
				margin-inline: auto;
				width: 100%;
			}
			button {
				background: hsl(180, 66%, 49%);
				color: var(--clr-white);
				border: none;
				padding: 1.5rem;
				font-size: 1.9rem;
				font-weight: 500;
				border-radius: 5px;
				margin-block-start: 1.5rem;
			}
		}
		background-color: hsl(257, 27%, 26%);
		border-radius: 10px;
		padding: 2rem;
		width: 90%;
		margin-block-start: 8rem;
	}
`;
