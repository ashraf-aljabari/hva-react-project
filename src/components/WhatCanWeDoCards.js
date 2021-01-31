import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileUI from "react-profile-card";
import "./WhatCanWeDoCardsStyle.css";

const WhatCanWeDoCards = () => {
	return (
		<Container fluid className="developersCards">
			<h2 style={{ textAlign: "center", padding: "2rem" }}>
				<strong>WHAT CAN WE DO</strong>
			</h2>
			<Row>
				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://seeklogo.com/images/G/gmp-quality-logo-029EAE8B9B-seeklogo.com.png"
							name="Manufacturing
              EU GMP
              GMP+"
						/>
					</div>
				</Col>
				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://png.pngtree.com/png-vector/20190820/ourlarge/pngtree-light-bulb-icon-vector--light-bulb-ideas-symbol-illustration-png-image_1694700.jpg"
							name="Wide rage of products:
              Medicated premixes
              Antimicrobals
              Feed supplements"
						/>
					</div>
				</Col>

				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://img.pngio.com/research-and-development-png-6-png-image-research-and-development-png-390_339.png"
							name="Customer oriented
              reserch developement
              and registration"
						/>
					</div>
				</Col>

				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://www.pngitem.com/pimgs/m/409-4092162_free-handshake-logo-png-transparent-shaking-hands-png.png"
							name="Contact manufacturing"
						/>
					</div>
				</Col>
				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://www.kindpng.com/picc/m/77-775601_critical-thinking-logo-hd-png-download.png"
							name="More than 40 years
              experience in
              veterinary business"
						/>
					</div>
				</Col>
				<Col>
					<div className="developers-cards">
						<ProfileUI
							imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLrUk4hLiNm_D2g58M6FCY7WOYMmJIoeY2g&usqp=CAU"
							name="64.4 mullion €
              turnover in 2019
              240 employees"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default WhatCanWeDoCards;
