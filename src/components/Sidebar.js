import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import useGlobalContext from "../context";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<SidebarContainer>
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar" : " sidebar"}`}
			>
				<div className="sidebar-header">
					<img src="" alt="" className="logo" />
					<button type="button" className="close-btn" onClick={closeSidebar}>
						<FaTimes></FaTimes>
					</button>
				</div>
				<div className="links">
					<h5> Features</h5>
					<h5>Pricing</h5>
					<h5>Resources</h5>
					<hr />
					<h5>Login</h5>
					<button>Sign Up</button>
				</div>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	text-align: center;

	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		margin-top: -1rem;
	}
	.close-btn {
		font-size: 2rem;
		background: transparent;
		border-color: transparent;
		color: white;
		transition: var(--transition);
		cursor: pointer;
		margin-top: 0.2rem;
	}
	.close-btn:hover {
		color: var(--clr-red-light);
	}
	.logo {
		justify-self: center;
		height: 80px;
	}
	.links {
		color: white;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		h5 {
			font-size: 2rem;
		}
		button {
			width: 80%;
			justify-self: center;
			padding: 1rem;
			border: none;
			background-color: hsl(180, 66%, 49%);
			color: white;
			font-size: 1.7rem;
			border-radius: 2rem;
			font-weight: 700;
			transition: var(--transition);
			text-align: center;

			&:hover {
				color: hsl(180, 66%, 49%);
				background: white;
			}
		}
	}

	.sidebar {
		position: fixed;
		top: 10rem;
		left: 1.3rem;
		width: 90vw;
		height: 65%;
		background: hsl(257, 27%, 26%);
		transition: var(--transition);
		transform: scale(0);
		z-index: -100;
		border-radius: 20px;
	}
	.show-sidebar {
		transform: scale(1);
		z-index: 999;
		right: 30%;
	}

	@media screen and (min-width: 992px) {
		.sidebar {
			display: none;
		}
	}
`;

export default Sidebar;
