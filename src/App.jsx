import "./App.css"
import Container from "./components/Container"
import Testimonial from "./components/Testimonial.jsx"
import review from "../data.js"
// import { useState } from "react"

function App() {
	// const [review, setReview] = useState([])
	return (
		<>
			<Container>
				<div>
					<h1 className="title">Our Testimonials</h1>
				</div>
				<div className="underline"></div>
				<Testimonial review={review}></Testimonial>
			</Container>
		</>
	)
}

export default App
