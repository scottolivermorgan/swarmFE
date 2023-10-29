import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Blog.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SideNav from '../navbar/navbar.js';
import { CardActionArea } from '@mui/material';
import temp from '../../images/temp.png';
import '../navbar/navbar.css'

function Blog() {
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
					<div className="about-us"> <b>Blog Posts</b></div>		
	    				<div>
							
						</div>
						<br></br>
						<div class='container'>
        	<table>
				<tr>
					<td>
						<Card sx={{ maxWidth: 1145 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 340 }} image={temp} 
													title="Scott"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Post Title</b>
									</center>
								
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										blurb about post
									</center>
        						</Typography>
								<center>
								</center>
      						</CardContent>
							</CardActionArea>
    					</Card>
					</td>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 140 }} image={temp} 
													title="Scott"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Post Title</b>
									</center>
								
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										blurb about post
									</center>
        						</Typography>
								<center>
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
      						<CardMedia sx={{ height: 140 }} image={temp} 
													title="Scott"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Post Title</b>
									</center>
								
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										blurb about post
									</center>
        						</Typography>
								<center>
								</center>
      						</CardContent>
							</CardActionArea>
    					</Card>
					</td>
					<td>
						<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
      						<CardMedia sx={{ height: 140 }} image={temp} 
													title="Scott"/>
      						<CardContent>
        						<Typography gutterBottom variant="h5" component="div">
									<center>
										<b>Post Title</b>
									</center>
								
        						</Typography>
        						<Typography variant="body2" color="text.secondary">
									<center>
										blurb about post
									</center>
        						</Typography>
								<center>
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
export default Blog;