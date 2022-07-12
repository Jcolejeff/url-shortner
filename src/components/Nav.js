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
					<img src={logo} alt="logo" />
					<div className="nav-links">
						<ul>
							<li> features </li>
							<li>Pricing</li>
							<li> Resources</li>
						</ul>
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
	padding: 4rem;
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
			width: 100px;
			margin-left: -15px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-primary-5);
		cursor: pointer;
		svg {
			font-size: 2.8rem;
			color: hsl(0, 0%, 75%);
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
			padding-inline: 2rem;
			padding-block: 1rem;
			border-radius: 2rem;
			color: white;

			font-weight: 900;
			transition: var(--transition);
			&:hover {
				opacity: 0.5;
				cursor: pointer;
			}
		}
		.login-links {
			display: flex;
			gap: 4rem;
			align-items: center;
			font-size: 1.5rem;
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
			ul {
				display: flex;
				gap: 1rem;
			}

			li {
				color: hsl(0, 0%, 60%);
				font-size: 1.1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				transition: var(--transition);
				&:hover {
					color: black;
				}
			}
		}
	}
`;

export default Nav;
