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
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }}
						 url="https://www.facebook.com/Swarm-Labs-102522568202848" /> {'s'}
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }} 
						url="https://twitter.com/SwarmLtd" /> {'s'}
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }} 
						url="https://www.linkedin.com/in/chris-lowe-1a63881b2/" /> {'s'}
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }} 
						url="https://www.instagram.com/swarmlabs" /> {'s'}
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }} 
						url="https://www.youtube.com/channel/UC4xdb2kD3QfE5TkDHT8x71w/featured" />  {'s'}
					<SocialIcon bgColor="white" style={{ height: 25, width: 25 }} 
						url="https://github.com/scottolivermorgan?tab=repositories" /> {'s'}
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