import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carouselc() {
	return (
		<div className="container-home">
			<Carousel className="homeP-imgcarousel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.jordanyp.com/img/cats/agriculture.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>HVA Health</h3>
						<p>
							„FOR THE FUTURE OF AGRICULTURE, FOR THE WELFARE OF OUR ANIMALS”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.jordanyp.com/img/cats/agriculture.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>HVA Health</h3>
						<p>PHARMACEUTICALS MANUFACTURING –INNOVATION AND VOLUME</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.jordanyp.com/img/cats/agriculture.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>HVA Health</h3>
						<p>
							YOU CAN TRUST OUR MANUFACTURING EXPERIENCE, EITHER IN PELLETING OR
							IN THE PRODUCTION OF SUSPENSIONS AND SOLUTIONS!
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
