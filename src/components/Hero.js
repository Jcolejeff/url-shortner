import styled from "styled-components";
import hero from "../images/illustration-working.svg";
import hero2 from "../images/illustration-working.png";

const Hero = () => {
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
					<h1>More than just shorter links</h1>
					<p>
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<button>Get Started</button>
				</div>
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
	margin-inline: 8rem;
	padding-block-end: 10rem;

	.hero {
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
		@media (min-width: 65rem) {
			display: flex;
			flex-direction: row-reverse;
			gap: 3rem;
			& > * {
				flex: 1;
			}
			.desc {
				margin: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				text-align: left;
				h1 {
					font-size: 6rem;
				}
			}
			picture {
				img {
					width: 110%;
				}
			}
		}
	}
`;
