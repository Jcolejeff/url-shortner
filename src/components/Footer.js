import React from "react";

const Footer = () => {
	return (
		<footer>
			<section>
				<h3>Boost your links today</h3>
				<button>Get Started</button>
			</section>

			<section>
				<img src="" alt="" />
				<div>
					<h5>Features</h5>
					<ul>
						<li> Link Shortening</li>
						<li>Branded Links </li>
						<li> Analytics</li>
					</ul>
				</div>
				<div>
					<h5>Resources</h5>
					<ul>
						<li> Blog</li>
						<li>Developers</li>
						<li> Support</li>
					</ul>
				</div>
				<div>
					<h5>Company</h5>
					<ul>
						<li> About</li>
						<li> Our Team</li>

						<li> Careers</li>
						<li> Contact</li>
					</ul>
				</div>
				<div className="social-links"></div>
			</section>
		</footer>
	);
};

export default Footer;
