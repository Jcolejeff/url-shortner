import React, { useEffect } from "react";
import styled from "styled-components";

const Alert = ({ type, msg, removeAlert, list }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list]);
	return (
		<Wrapper>
			<p className={`alert alert-${type}`}>{msg}</p>;
		</Wrapper>
	);
};

export default Alert;

const Wrapper = styled.div`
	width: 90%;
	margin-inline: auto;
	margin-block-start: -3rem;
	.alert {
		margin-bottom: 1rem;
		display: grid;
		align-items: center;
		text-align: center;
		font-size: 1.5rem;
		border-radius: 0.25rem;
		letter-spacing: var(--spacing);
		text-transform: capitalize;
	}
	.alert-danger {
		color: #721c24;
		background: #f8d7da;
	}
	.alert-success {
		color: #155724;
		background: #d4edda;
	}
`;
