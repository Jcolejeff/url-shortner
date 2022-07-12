import styled from "styled-components";
import List from "./List";
import services from "../data";
import { useEffect, useState } from "react";
import bg1 from "../images/bg-shorten-mobile.svg";
import Alert from "./Alert";

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
	const [list, setList] = useState(getLocalStorage());
	const [loading, setIsloading] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
	};
	const removeItem = (id) => {
		showAlert(true, "danger", "item removed");
		setList(list.filter((item) => item.id !== id));
	};

	const copyToClipboard = (item) => {
		navigator.clipboard.writeText(item);
		setAlert({ show: true, type: "success", msg: "copied to clipboard" });
	};
	const FetchLink = async () => {
		if (!query) {
			showAlert(true, "danger", "No url parameter set ,please enter value");
			return;
		}
		setIsloading(true);

		try {
			const response = await fetch(
				` https://api.shrtco.de/v2/shorten?url=${query}`
			);
			const data = await response.json();
			console.log(data);
			if (data.ok) {
				setIsloading(false);
				setList([
					...list,
					{ id: new Date().getTime().toString(), ...data.result },
				]);
			} else {
				setIsloading(false);
				showAlert(true, "danger", data.error.substring(0, 23));
			}
		} catch (error) {
			setIsloading(false);
			showAlert(true, "danger", "Network Error,Try again");
		}
	};
	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);
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
					<button disabled={loading}>
						{loading ? "Loading..." : "Shorten Url"}
					</button>
				</form>
			</section>
			{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
			{list.length > 0 && (
				<div>
					<List
						items={list}
						removeItem={removeItem}
						copyToClipboard={copyToClipboard}
					/>
					<button className="clear-btn" onClick={clearList}>
						Clear
					</button>
				</div>
			)}

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
			gap: 1.5rem;
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
				font-size: 1.2rem;
				font-weight: 700;
				border-radius: 5px;
				transition: var(--transition);
				&:hover {
					background-color: hsla(180, 86%, 59%, 1);
					cursor: pointer;
				}
			}
			button:disabled {
				cursor: not-allowed;
				opacity: 0.7;
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
		width: 80%;
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
			width: 90%;
			margin-inline: auto;
		}
		.item-3 {
			transform: translateY(40%);
		}
		.item-2 {
			transform: translateY(20%);
		}
	}
	.clear-btn {
		text-transform: capitalize;
		width: 10rem;
		display: grid;
		align-items: center;
		background: white;
		border-color: transparent;
		color: var(--clr-red-light);
		margin-inline: auto;
		letter-spacing: var(--spacing);
		cursor: pointer;
		transition: var(--transition);
		margin-top: 1.25rem;
		font-size: 1.5rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
		border-radius: 10px;
	}
	.clear-btn:hover {
		color: var(--clr-red-dark);
	}
`;
