//import React from 'react';
//import logo from '../../images/logo.png';
//import { Link } from 'react-router-dom';
//import './Contact.css'
//function Contact() {
//    return(
//      <>
//		<div className="logo-box-sm">
//        <img src = {logo} className="App-logo-sm" alt="logo"></img>
//        </div>
//		<center className="blurb-box">
//		<div className="title"> <b>Contact us</b></div>		
//	    <div>
//        Duis aute irure dolor in 
//		reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
//		culpa qui officia deserunt mollit anim id est laborum.
//		</div>
//		<br></br>
//		<Link to='/'> 
//                    <button className = "main-btn">Home</button>
//                </Link>
//		</center>
//        </>
//    )
//}
//export default Contact;

import React, { Component } from 'react';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
//import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Contact.css'

const styles = {
    contactForm: {
        marginTop: 50,
        width: '60vh'
        }
  };

export class ContactForm extends Component {
    state = {
        userName: '',
        email: '',
        message: ''
    }
    
    // Handle submit button
    handleSubmit = async event => {
        
        const { userName, email, message } = this.state;
        
        try {
            const data = await postData('https://1u5leuz6gg.execute-api.us-west-2.amazonaws.com/prod/submit', { userName, email, message });
            console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
        } catch (error) {
            console.error(error);
        }

        async function postData(url = '', data = {}) {
            // Default options are marked with *
                const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        return await response.json(); // parses JSON response into native JavaScript objects
        }

        // Reset from after submiting
        document.getElementById('contact-form').reset();
        this.setState({ userName: "", email: "", message: "" });
        event.preventDefault();
    }

    // Handle fields change
    handleChange = input => event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
        
    }

    render() {
        const { classes } = this.props;
        const { userName, email, message } = this.state;
        return (
			<>
		<div className="logo-box-sm">
        <img src = {logo} className="App-logo-sm" alt="logo"></img>
       </div>
		<center className="blurb-box">
		<div className="title"> <b>Contact us</b></div>		
	    <div></div>
            <div className={classes.container}>
            <CssBaseline />
                <Typography variant="h4" align="center" component="h1" gutterBottom>
                    {'Contact Form'.toUpperCase()}
                </Typography>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <form
                        id="contact-form"
                        className={classes.contactForm}
                        onSubmit={this.handleSubmit}
                        >
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="name"
                                label="Name"
                                name="userName"
                                className={classes.inputField}
                                onChange={this.handleChange("userName")}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
                                className={classes.inputField}
                                onChange={this.handleChange("email")}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="message"
                                label="Message"
                                name="message"
                                className={classes.inputField}
                                onChange={this.handleChange("message")}
                                margin="normal"
                                multiline
                                rowsMax="4"
                                />
                            </Grid>
                            <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
                            <Grid item >
                                <Button
                                className={classes.formButton}
                                type="reset"
                                variant="contained"
                                color="default"
                                //disabled={submitting || pristine}
                                >
                                RESET
                                </Button>
                            </Grid>
                            <Grid item >  
                                <Button
                                className={classes.formButton}
                                type="submit"
                                variant="contained"
                                color="primary"
                                >
                                Submit
                                </Button>
                            </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                
            </div> 
		<br></br>
		<Link to='/'> 
                   <button className = "main-btn">Home</button>
               </Link>
		</center>
       </>
                      
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ContactForm);