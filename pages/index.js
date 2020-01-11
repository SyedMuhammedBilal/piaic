import React                       from "react"
import Slider                      from "react-slick";
import Layout                      from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"
import ScrollAnimation             from 'react-animate-on-scroll';
import { Link }                    from "gatsby"
import You                         from "../images/you.jpg"

import Styles from "../styles/index.css"
import             "../styles/grid.scss"
import             "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {

	var settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 500
	};

	const data = useStaticQuery(graphql`
		query {
			allContentfulContainer (
			sort:{
				fields: id
			}
			) {
				edges {
					node {
						Container
						rgba {
							rgba
						}
					}
				}
			}
			allContentfulImage {
				edges {
					node {
						picture {
							file {
								url
							}
						}
					}
				}
			}
			allContentfulIndex {
				edges {
					node {
						president {
							file {
								url
							}
						}
					}
				}
			}
			allContentfulText {
				edges {
					node {
						title
					}
				}
			}
		}
	`)

	console.log(data)

	return (
		<Layout>
		<head>
		    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="HandheldFriendly" content="true"/>
		</head>
		<body>
		<br/>
			<section>
			    <div class="box">
			    {data.allContentfulIndex.edges.map((edge) => {
			    	return (
				    <img class="press" src={edge.node.president.file.url} />
				    )
				})}   	
				    <div class="top-right">
				    <br/>
				        <h1 class="init">Presidential Initiative</h1>
				        <p class="ini">for Artifical Intelligence & Computing (PIAIC)</p>
				        <br/>
				        <br/>
				        <p class="in">The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting</p> 
				        <p class="in">latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to</p> 
				        <p class="in">become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented</p> 
				        <p class="in">reality, and internet of things.</p>
				        
				        <h1 class="app" ><b>| &nbsp;65K+</b></h1>
				        <p class="recived">Applications Recived</p>
				    </div>
				</div>
				<ScrollAnimation animateIn="fadeIn">
				<h1 class="avail-prog">Available Programs</h1>
				
				<div class="container">
				    {data.allContentfulContainer.edges.map((edge) => {
						
						let rgba = edge.node.rgba.rgba
				    	let color = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`
				    	console.log(color)
						
						return (
				    	<div className="box" style={{backgroundColor: color}}>
					        <br/>
					        <div className="content">
					            <p><b>{edge.node.Container}</b></p>
				            </div>
					    </div>
					    )
					})}
				</div>
				</ScrollAnimation>
				<br/>
				<br/>
				<div class="line">
					
				</div>
				<br/>
				<br/>
				<ScrollAnimation animateIn="fadeIn">
				<h1 class="head-2">Programs in Development</h1>
				<div class="scrollmenu">
					<div class="container-r">
						<div class="rect">
							<br/>
							<div class="g">
								<p>SDN/NFV for 5G</p>
							</div>
					    </div>
					    <div class="rect">
						    <br/>
						    <div class="ar">
							    <p>AUGMENTED REALITY</p>
						    </div>
					    </div>
					    <div class="rect">
						    <br/>
						    <div class="ep">
							    <p>ENTREPRENEURSHIP</p>
						    </div>
					    </div>
					    <div class="rect">
						    <br/>
						    <div class="mob">
							    <p>MOBILE WEB SPECIALIST</p>
						    </div>
					    </div>
					    <div class="rect">
						    <br/>
						    <div class="ios">
							    <p>IOS</p>
						    </div>
					    </div>
				    </div>
				</div>
				</ScrollAnimation>
				<br/>
				<br/>
			</section>
			<ScrollAnimation animateIn="fadeIn">
			<section class="youtube-sec">
				<br/>
				<br/>
		    	<h1><b class="vid-head">Videos</b></h1>
		    	<div class="iframe-container">
		    		<iframe width="560" height="315" src="https://www.youtube.com/embed/_rUQ301EJAo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		    	<div class="pres-cont">
		    	</div>
		    	<p class="pre-head">PIAIC Classes Coming Soon!</p>
		    	    {data.allContentfulText.edges.map((edge) => {
			    	    return (
		    	<p class="vid-para">{edge.node.title}</p>
		    	        )
                    })}
		        </div>
		        <br/>
		        <br/>
			</section>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn">
			<section class="img-sec">
				<br/>
				<br/>
				<h2 class="img-head">Images</h2>
				<div class="scrollmenu">
				    {data.allContentfulImage.edges.map((edge) => {
					    return (
					        <img class="launching" src={edge.node.picture.file.url}/>
					    )    
                    })}
                </div>
				<br/>
				<br/>
				<br/>
			</section>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">
			<section class="partners">
				<br/>
				<center><div>
					<p class="str"><b>Strategic Partners</b></p>
					<br/>
					<br/>
				    <img class="pana" src="https://www.piaic.org/static/media/panacloudLogo.9b5ef574.svg"/>
				    <img class="psx" src="https://www.piaic.org/static/media/psx2.c50b5ae4.png"/>
				    <img class="syl" src="https://www.piaic.org/static/media/saylaniLogo.c2a52d0a.png"/>
			    </div></center>
			</section>
			</ScrollAnimation>
			<div class="footer">
			    <div class="footer-container">
			        <div class="row">
			            <div class="col-md-4 col-sm-6">
			                <div class>
			                    <p class="footer-list-heads">Navigation</p>
			                    <ul class="footer-list-simple">
			                        <li>Home</li>
			                        <li>
			                            <a href="https://portal.piaic.org/signup" target="_blank">Apply</a>
			                        </li>
			                        <li>How it works</li>
			                        <li>Artificial Inteligence</li>
			                        <li>Cloud Native and Mobile Web Computing</li>
			                        <li>Blockchain</li>
			                        <li>Internet of Things and AI</li>
			                        <li>About The President</li>
			                        <li>Management Committee</li>
			                        <li>Women Inclusion in Technology (WIT)</li>
			                    </ul>
			                </div>
			            </div>
			            <div class="col-md-4 col-sm-6">
			                <p class="footer-list-heads">Locations </p>
			                <div>
			                    <p class="footer-list-heads">PIAIC Headquarters</p>
			                    <ul class="foooter-list-icon-ul">
			                        <li>
			                            <img src="https://www.piaic.org/static/media/locationIcon.d6ae43ac.svg"/>
			                            <a href="https://goo.gl/maps/UPXtpSiJ5NH2" target="_blank">Plot 245/2 M,  Block 6 PECHS, Karachi, Sindh 75100, Pakistan</a>
			                        </li>
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           +92-308-2220203 (WhatsApp as well)
			                        </li>
			                    </ul>
			                </div>
			                <div>
			                    <p class="footer-list-heads">PIAIC Helpline</p>
			                    <ul class="footer-list-icon-ul">
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           +92-308-2220203 (WhatsApp as well)
			                        </li>
			                    </ul>
			                </div>
			                <div class="mt-5 original-connect">
			                    <p class="footer-list-heads">Connect with us</p>
			                    <a target="_blank" href="https://www.facebook.com/groups/piaic">
			                        <img src="https://www.piaic.org/static/media/facebookIcon.7a82d3ab.svg" class="footer-list-contactus-icons"/>
			                    </a>
			                    <a target="_blank" href="https://www.youtube.com/channel/UC2Makv pLAtvrjHNgg-pBLg">
			                        <img src="https://www.piaic.org/static/media/youtubeicon.31253a80.svg" class="footer-list-contactus-icons"/>
			                    </a>
			                </div>
			            </div> 
			            <div class="col-md-4 col-sm-6">
			                <p class="footer-list-heads" style={{color: "rgb(31, 47, 57)"}}>Karachi Field Offices</p>
			                <div>
			                    <p class="footer-list-heads">Karachi Field Office</p>
			                    <ul class="footer-list-icon-ul">
			                        <li>
			                           <img scr="https://www.piaic.org/static/media/locationIcon.d6ae43ac.svg"/>
			                           <a href="https://goo.gl/maps/r9yNA488tN52" target="_blank">A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan</a>
			                        </li>
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           +92-311-1729526
			                        </li>
			                    </ul>
			                </div>
			                    <p class="footer-list-heads">Rawalpindi Field Office</p>
			                    <ul class="footer-list-icon-ul">
			                        <li>
			                           <img scr="https://www.piaic.org/static/media/locationIcon.d6ae43ac.svg"/>
			                           <a href="https://goo.gl/maps/r9yNA488tN52" target="_blank">4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300</a>
			                        </li>
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           051-4940669 / 0336-6660215
			                        </li>
			                    </ul>
			                <div>
			                   <p class="footer-list-heads">Islamabad Field Office</p>
			                    <ul class="footer-list-icon-ul">
			                        <li>
			                           <img scr="https://www.piaic.org/static/media/locationIcon.d6ae43ac.svg"/>
			                           <a href="https://goo.gl/maps/r9yNA488tN52" target="_blank">F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory</a>
			                        </li>
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           051-2223191 (WhatsApp as well)
			                        </li>
			                    </ul>
			                </div>
			                    <p class="footer-list-heads">Faisalabad Field Office</p>
			                    <ul class="footer-list-icon-ul">
			                        <li>
			                           <img scr="https://www.piaic.org/static/media/locationIcon.d6ae43ac.svg"/>
			                           <a href="https://goo.gl/maps/r9yNA488tN52" target="_blank">Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area, Faisalabad, Punjab</a>
			                        </li>
			                        <li>
			                           <img src="https://www.piaic.org/static/media/callIcon.ef3e710d.svg"/>
			                           (041) 2417281 / 0337 8659969 (WhatsApp as well)
			                        </li>
			                    </ul>
			                <div>
			                </div>
			                <div>
			                </div>
			            </div>
			        </div>
			    </div>
		    </div>
		</body>
		</Layout>		    
	)

}

export default IndexPage