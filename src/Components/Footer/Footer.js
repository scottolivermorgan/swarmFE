import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <footer className="page-footer font-small " align="center">
		<div className="container">
		<center>
			<div className="row" align="center">
				<center>
					<SocialIcon url="https://www.facebook.com/Swarm-Labs-102522568202848" />
					<SocialIcon url="https://twitter.com/SwarmLtd" />
					<SocialIcon url="https://www.linkedin.com/in/chris-lowe-1a63881b2/" />
					<SocialIcon url="https://www.instagram.com/swarmlabs" />
					<SocialIcon url="https://www.youtube.com/channel/UC4xdb2kD3QfE5TkDHT8x71w/featured" />
                </center>
			</div>
			<br></br>
			<sub>© 2022 Copyright</sub>
			<sub > Swarm Labs</sub>
		</center>
		</div>
	</footer>
    )
};

export default Footer;