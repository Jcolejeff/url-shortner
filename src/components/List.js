import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
const List = ({ items, removeItem, copyToClipboard }) => {
	return (
		<div className="grocery-list">
			{items.map((item) => {
				const { id, short_link, original_link } = item;
				return (
					<Wrapper key={id}>
						<section className="list">
							<article>
								<p>{original_link}</p>
								<hr />
								<p className="copy">
									<h5>{short_link}</h5>
									<button
										onClick={() => copyToClipboard(short_link)}
										type="button"
										className="btn"
									>
										Copy
									</button>
									<button
										type="button"
										className="btn"
										onClick={() => removeItem(id)}
									>
										<FaTrash />
									</button>
								</p>
							</article>
						</section>
					</Wrapper>
				);
			})}
		</div>
	);
};

export default List;

const Wrapper = styled.section`
	.list {
		margin-inline: auto;
		margin-block-end: 3rem;
		padding: 1.6rem;
		width: 80%;
		background-color: white;
		border-radius: 15px;
		@media (min-width: 65rem) {
			padding: 1rem;
			width: 90%;
			article {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				align-items: center;
				gap: 2rem;
				.copy {
					display: grid;
					grid-template-columns: 1fr 1fr 10rem;
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
				&:hover {
					background-color: hsla(180, 86%, 59%, 1);
					cursor: pointer;
				}
			}
		}
	}
`;
