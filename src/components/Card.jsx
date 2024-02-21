import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
const Card = ({ review }) => {
	return (
		<>
			<div className="cards">
				<div className="review-img">
					<img src={review.image} />
					<div className="circle"></div>
				</div>

				<div>
					<h3>{review.name}</h3>
				</div>
				<div>
					<h5>{review.job}</h5>
				</div>

				<div className="quote-icon icon-1">
					<FaQuoteLeft />
				</div>
				<div>
					<p>{review.text}</p>
				</div>
				<div className="quote-icon">
					<FaQuoteRight />
				</div>
			</div>
		</>
	)
}

export default Card
