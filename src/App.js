import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import feedbackData from "./data/feedbackData";

import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Link to="/">
					<Header />
				</Link>
				<div className="container">
					<Routes>
						<Route
							path="/"
							exact
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList	/>
								</>
							}
						/>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
