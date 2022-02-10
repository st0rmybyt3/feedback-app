import { Link } from "react-router-dom";

import Card from "../components/shared/Card";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About this project</h1>
				<p>React app to leave feedback about a service</p>
				<p>version: 1.0.0</p>

				<Link to="/">
					<p>Back to Home</p>
				</Link>
			</div>
		</Card>
	);
}

export default AboutPage;
