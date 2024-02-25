import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import './Research.css'
import fig1 from '../../images/fig1.png';
import fig2 from '../../images/fig2.gif';
import fig3 from '../../images/fig3.jpeg';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../navbar/navbar.css'
import SideNav from '../navbar/navbar.js';

function Research() {
    return(
        <>
		<table>
			<th>
				{SideNav()}
			</th>
		<center className="blurb-box">
		<div className="title"> <b>Research</b></div>		
	    <Card sx={{ maxWidth: 1145 }}>
			<CardActionArea>
      			<CardMedia sx={{ height: 340 }} image={fig2} 
										title="Scott"/>
      				<CardContent>
        				<Typography gutterBottom variant="h5" component="div">
							<center>
								<b>Using adsorption kinetics to assemble vertically
									aligned nanorods at liquid interfaces for
									metamaterial applications.
								</b>
							</center>
        				</Typography>
        				<Typography variant="body2" color="text.secondary">
							<center>
							Vertically aligned monolayers of metallic nanorods have a wide 
							range of applications as metamaterials or in surface enhanced Raman 
							spectroscopy. However the fabrication of such structures using current
							top-down methods or through assembly on solid substrates is either 
							difficult to scale up or have limited possibilities for further 
							modification after assembly. The aim of this paper is to use the adsorption
							kinetics of cylindrical nanorods at a liquid interface as a novel route 
							for assembling vertically aligned nanorod arrays that overcomes these problems.
							</center>
        				</Typography>
						<br></br>
						<center>		
							<Link to='https://pubs.rsc.org/en/content/articlepdf/2022/cp/d1cp05484h'> 
            					<button className = "main-btn">More</button>
            				</Link>
						</center>
      				</CardContent>
				</CardActionArea>
    	</Card>
		<br></br>
		<Card sx={{ maxWidth: 1145 }}>
			<CardActionArea>
      			<CardMedia sx={{ height: 340 }} image={fig3} 
										title="Scott"/>
      				<CardContent>
        				<Typography gutterBottom variant="h5" component="div">
							<center>
								<b>Optoelectronic Switching Memory Based on ZnO 
									Nanoparticle/Polymer NanocompositesUsing adsorption kinetics to assemble vertically
									aligned nanorods at liquid interfaces for
									metamaterial applications.
								</b>
							</center>
        				</Typography>
        				<Typography variant="body2" color="text.secondary">
							<center>
							Optoelectronic switching memories are emerging as practical 
							candidates for applications of optically tunable neuromorphic 
							computing systems and artificial vision systems. Here, we report
							 on the fabrication of an optoelectronic switching memory 
							 device based on semiconducting zinc oxide nanoparticles (ZnO NPs)
							  embedded within a photoactive azobenzene polymer. 
							  The device shows electronic resistive switching and a 
							  reversible optical switching effect upon changing the 
							  polarization of the applied light. 
							</center>
        				</Typography>
						<br></br>
						<center>		
							<Link to='https://pubs.acs.org/doi/full/10.1021/acsapm.2c02034'> 
            					<button className = "main-btn">More</button>
            				</Link>
						</center>
      				</CardContent>
			</CardActionArea>
    	</Card>
		<br></br>
		<Card sx={{ maxWidth: 1145 }}>
			<CardActionArea>
      			<CardMedia sx={{ height: 340 }} image={fig1} 
										title="Scott"/>
      				<CardContent>
        				<Typography gutterBottom variant="h5" component="div">
							<center>
								<b>Adsorption trajectories of nonspherical particles 
									at liquid interfaces.
								</b>
							</center>
        				</Typography>
        				<Typography variant="body2" color="text.secondary">
							<center>
							The adsorption of colloidal particles at liquid interfaces 
							is of great importance scientifically and industrially, but 
							the dynamics of the adsorption process is still poorly understood. 
							In this paper we use a Langevin model to study the adsorption dynamics
							 of ellipsoidal colloids at a liquid interface. Interfacial 
							 deformations are included by coupling our Langevin dynamics to a 
							 finite element model while transient contact line pinning due to 
							 nanoscale defects on the particle surface is encoded into our model
							  by renormalizing particle friction coefficients and using dynamic 
							  contact angles relevant to the adsorption timescale.
							</center>
        				</Typography>
						<br></br>
						<center>		
							<Link to='https://journals.aps.org/pre/abstract/10.1103/PhysRevE.103.042604'> 
            					<button className = "main-btn">More</button>
            				</Link>
						</center>
      				</CardContent>
			</CardActionArea>
    	</Card>
			<br></br>
			<br></br>
		<Link to='/'> 
                    <button className = "main-btn">Home</button>
                </Link>
		</center>
		</table>
        </>
    )
}
export default Research;