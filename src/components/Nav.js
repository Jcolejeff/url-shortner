import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import useGlobalContext from "../context";
import logo from "../images/logo.svg";

const Nav = () => {
	const { openSidebar } = useGlobalContext();

	return (
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} />
					<div className="nav-links">
						<a> features </a>
						<a>Pricing</a>
						<a> Resources</a>
					</div>

					<button onClick={openSidebar} type="button" className="nav-toggle">
						<FaBars></FaBars>
					</button>
				</div>
				<div>
					<div className="login-links">
						<a> login</a>
						<button className="sign-in">sign up</button>
					</div>
				</div>
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #e6e6e6;
	margin-block-end: 4rem;

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			width: 130px;
			margin-left: -15px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-primary-5);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.login-links {
		display: none;
	}

	@media (min-width: 992px) {
		padding-inline: 7rem;
		.sign-in {
			background-color: hsl(180, 66%, 49%);
			border: none;
			padding-inline: 1rem;
			padding-block: 0.6rem;
			border-radius: 2rem;
			color: white;
			font-weight: 900;
		}
		.login-links {
			display: flex;
			gap: 4rem;
			align-items: center;
		}
		.nav-toggle {
			display: none;
		}

		.nav-center {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			gap: 2rem;
			margin-inline-start: 2rem;

			a {
				color: var(--clr-grey-3);
				font-size: 0.8rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-primary-7);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Nav;
