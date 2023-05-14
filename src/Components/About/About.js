import React from 'react';
import scott from '../../images/scott.png';
import chris from '../../images/chris.png';
import charlie from '../../images/charlie.png';
import jacqueline from '../../images/jacqueline.png';
import './About.css'
import { SocialIcon } from 'react-social-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SideNav from '../navbar/navbar.js';
import '../navbar/navbar.css'
import { CardActionArea } from '@mui/material';


function About() {
	const BASE_URL = process.env.REACT_BASE_APP_URL;
    return(
        <>
		<table>
			<th>
				{SideNav()}
			</th>
			<th>
				<td>
				<center className="blurb-box">
					<div className="about-us"> <b>About us</b></div>		
	    				<div>
							Whether you need cutting-edge research, groundbreaking solutions,
							 or a fresh perspective on a complex problem,
							 we've got your back.
						</div>
						<br></br>
						<div class='container'>
        	<table>
				<tr>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 140 }} image={scott} 
													title="Scott"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Scott Morgan</b>
										<sub class = 'titles'> PhD. MPhys.PGcert.</sub>
									</center>
									<center>
										<b><sub class = "role">Lead Scientist & Engineer</sub></b>
									</center>
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										Passionate surfer whose enthusiasm far exceeds his skill
									</center>
        						</Typography>
								<center>
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://www.linkedin.com/in/scott-oliver-morgan/" />{' '}
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://scholar.google.com/citations?user=LI_qhRsAAAAJ&hl=en" />{' '}
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://github.com/scottolivermorgan?tab=repositories" /> {' '}
      							</center>
      						</CardContent>
							</CardActionArea>
    					</Card>
					</td>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 172 }} image={chris} 
													title="Chris"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Chris Lowe</b>
										<sub class = 'titles'> MPhys.</sub>
									</center>
									<center>
										<b><sub class = "role">Scientific Consultant</sub></b>
									</center>
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										Avid motorbike fan, technologist & wannabe chef.
									</center>
        						</Typography>
								<center>
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://www.linkedin.com/in/chris-lowe-86221899/" />{' '}
      							</center>
      						</CardContent>
							</CardActionArea>
    					</Card>
					</td>
				</tr>
				<tr>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 172 }} image={charlie} 
													title="Charlie"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Charlie Street</b>
										<sub class = 'titles'></sub>
									</center>
									<center>
										<b><sub class = "role">Sales Lead</sub></b>
									</center>
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
									Tenacious outdoorsman, forager and spear fisherman.
									</center>
        						</Typography>
								<center>
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://www.linkedin.com/in/charlie-heath-a3a435135/" />{' '}
      							</center>
      						</CardContent>
						</CardActionArea>
    					</Card>
					</td>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 140 }} image={jacqueline} 
													title="Jacqueline"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Jacqueline Maxfield</b>
										<sub class = 'titles'> Bsc.</sub>
									</center>
									<center>
										<b><sub class = "role">Lead Branding and Design</sub></b>
									</center>
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										Graphic designer & cat lover with an obsession for typography.
									</center>
        						</Typography>
								<center>
									<SocialIcon bgColor="#382e2c" style={{ height: 15, width: 15 }} 
												url="https://www.linkedin.com/in/maxfieldjacqueline/"/>{' '}
      							</center>
      						</CardContent>
							</CardActionArea>
    					</Card>
					</td>
				</tr>
			</table>
        	</div>
			</center>
			</td>
			</th>
			</table>
        </>
    )
}
export default About;