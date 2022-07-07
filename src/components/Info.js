import React from "react";
import styled from "styled-components";
import List from "./List";
const Info = () => {
	return (
		<Wrapper>
			{/* <List /> */}
			<section className="list">
				<article>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						<h5>Lorem ipsum dolor sit amet.</h5>
						<button>copy</button>
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
			<section>
				<div>
					<h3> Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.{" "}
					</p>
				</div>
				<div>
					<h3> Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.{" "}
					</p>
				</div>
				<div>
					<h3> Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
			</section>
		</Wrapper>
	);
};

export default Info;
const Wrapper = styled.section``;
