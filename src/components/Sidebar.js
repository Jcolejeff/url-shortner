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
				<ul className="links">
					<li>hello</li>
				</ul>
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
		font-size: 1.4rem;
		background: transparent;
		border-color: transparent;
		color: var(--clr-primary-5);
		transition: var(--transition);
		cursor: pointer;
		color: var(--clr-red-dark);
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
		margin-bottom: 10rem;
		margin-top: 8rem;
	}
	.links a {
		display: block;
		text-align: center;
		font-size: 1rem;
		text-transform: capitalize;
		padding: 1rem 1.5rem;
		color: var(--clr-grey-3);
		transition: var(--transition);
		letter-spacing: var(--spacing);
	}

	.links a:hover {
		padding: 1rem 1.5rem;
		padding-left: 2rem;
		background: var(--clr-grey-10);
		color: var(--clr-grey-2);
	}

	.sidebar {
		position: fixed;
		top: 5rem;
		left: 1.3rem;
		width: 90vw;
		height: 55%;
		background: var(--clr-white);
		transition: var(--transition);
		transform: scale(0);
		z-index: -100;
		border-radius: 20px;
		background-color: red;
	}
	.show-sidebar {
		transform: scale(1);
		z-index: 999;
		right: 30%;
	}
	.cart-btn-wrapper {
		margin: 2rem auto;
	}
	@media screen and (min-width: 992px) {
		.sidebar {
			display: none;
		}
	}
`;

export default Sidebar;
