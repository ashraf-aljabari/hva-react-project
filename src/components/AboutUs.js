import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

export default function AboutUs() {
	return (
		<div>
			<Container fluid className="aboutUsContainer">
				<Row>
					<Col className="whoWeAre">
						<div className=" contentRow">
							<h1>WHO WE ARE</h1>
							<p>
								Alpha-Vet Ltd. develops, manufactures and continuously improves
								portfolio of veterinary pharmaceuticals, feed supplements, pet
								food and plant nutrition products. As a result of our innovative
								investments, a GMP certificated veterinary pharma-ceutical
								factory, GMP+ cerificated feed supplements factory and a plant
								nutrion factory.{" "}
							</p>
							<button className="btn">LEARN MORE</button>
						</div>
					</Col>
					<Col className="ourGoal">
						{" "}
						<div className=" contentRow">
							<h1>WHAT IS OUR GOAL</h1>
							<p>
								According to Alpha-Vet’s philosophy, we can be successful and
								effective if we support agriculture with complex solutions:
								counselling, reasonably priced and excellent quality products.
								In order to protect pets we developed excellent quality
								preservative-free pet food, which guarantees a long, happy life
								for our favourite ones.
							</p>
							<button className="btn">LEARN MORE</button>
						</div>
					</Col>
				</Row>
				<Row>
					<Col style={{ padding: "0" }} md={3}>
						<div className="products">
							<h1>
								{" "}
								<div className="mark1">
									{" "}
									VETERINARY PHARMACEUTIC AL PRODUCTS
								</div>
							</h1>
							<div className="overproducts">
								<div className="suboverproducts">
									<div className="mark">
										{" "}
										<h3> Veterinary pharmaceutical products</h3>{" "}
									</div>
									<div className="mark">
										<p>
											{" "}
											A wild range of veterinary pharmaceutical products. Oral
											and external use, tablets as well and a new generation of
											medicinal premixes to mix with the forage: the more modern
											form of granulated fluids.{" "}
										</p>
									</div>
									<button className="card-btn">See more</button>
								</div>
							</div>
						</div>
					</Col>
					<Col style={{ padding: "0" }} md={3}>
						<div className="products1">
							{" "}
							<h1>
								{" "}
								<div className="mark1">FEED SUPPLEMENTS</div>
							</h1>
							<div className="overproducts1">
								<div className="suboverproducts1">
									<div className="mark">
										<h3> Feed supplements </h3>{" "}
									</div>
									<div className="mark">
										<p>
											{" "}
											A wild range of feed supplements. Our liquid vitamins and
											feed supplements fulfil all the requirements of healthy
											feed additives. Due to their unique composition and
											chelated new active ingredients they provide solutions for
											novel animal health challenges.{" "}
										</p>
									</div>
									<button className="card-btn">See more</button>
								</div>
							</div>
						</div>
					</Col>
					<Col style={{ padding: "0" }} md={3}>
						<div className="products2">
							<h1>
								{" "}
								<div className="mark1">PLANT NUTRITION PRODUCTS</div>
							</h1>
							<div className="overproducts2">
								<div className="suboverproducts2">
									<div className="mark">
										<h3> Plant nutrition products</h3>{" "}
									</div>
									<div className="mark">
										<p>
											{" "}
											A wild range of plant nutrition products. These products
											are a natural and economical alternative to conventional
											fertilization and plant protection technologies.{" "}
										</p>
									</div>
									<button className="card-btn">See more</button>
								</div>
							</div>
						</div>
					</Col>

					<Col style={{ padding: "0" }} md={3}>
						<div className="products3">
							<h1>
								{" "}
								<div className="mark1">PET FOOD</div>
							</h1>
							<div className="overproducts3">
								<div className="suboverproducts3">
									<div className="mark">
										<h3> Plant nutrition products</h3>{" "}
									</div>
									<div className="mark">
										<p>
											{" "}
											A wild range of plant nutrition products. These products
											are a natural and economical alternative to conventional
											fertilization and plant protection technologies.{" "}
										</p>
									</div>
									<button className="card-btn">See more</button>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
