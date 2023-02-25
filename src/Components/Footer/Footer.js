import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

function Footer() {
    return(
        <footer className="page-footer" align="center">
		<div className="container">
		<center>
			<div className="row" align="center">
			<br></br>
				<center>
					<SocialIcon bgColor="white" url="https://www.facebook.com/Swarm-Labs-102522568202848" /> {' '}
					<SocialIcon bgColor="white" url="https://twitter.com/SwarmLtd" /> {' '}
					<SocialIcon bgColor="white" url="https://www.linkedin.com/in/chris-lowe-1a63881b2/" /> {' '}
					<SocialIcon bgColor="white" url="https://www.instagram.com/swarmlabs" /> {' '}
					<SocialIcon bgColor="white" url="https://www.youtube.com/channel/UC4xdb2kD3QfE5TkDHT8x71w/featured" />  {' '}
                </center>
			</div>
			<sub className="copy-right">© 2023 Copyright</sub>
			<sub className="copy-right"> Swarm Labs</sub>
		</center>
		</div>
	</footer>
    )
};

export default Footer;