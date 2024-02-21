import { useState } from "react"
import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Testimonial = ({ review }) => {
	const [index, setIndex] = useState(0)
	const leftHandler = () => {
		if (index - 1 < 0) {
			setIndex(review.length - 1)
		} else {
			setIndex(index - 1)
		}
	}

	const rightHandler = () => {
		if (index + 1 >= review.length) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	const surpriseHandler = () => {
		let randomIndex = Math.floor(Math.random() * review.length)
		setIndex(randomIndex)
	}
	return (
		<>
			<Card review={review[index]}></Card>
			<div className="btn-div">
				<button
					className="direct-btn"
					onClick={leftHandler}
				>
					<FiChevronLeft />
				</button>
				<button
					className="direct-btn"
					onClick={rightHandler}
				>
					<FiChevronRight />
				</button>
			</div>

			<div>
				<button
					className="surprise-btn"
					onClick={surpriseHandler}
				>
					surprise me
				</button>
			</div>
		</>
	)
}

export default Testimonial
