import React from "react"
import {Link} from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import FooterPage from "../components/footer"
import HeaderPage from "../components/header"

import "../styles/about.css"
import "../styles/modal.css"
import "../styles/management.css"
import "../styles/flex.scss"
import "../styles/reboot.scss"
import "../styles/home.css"
import "../styles/AiStyles.css"
import "../styles/aos.css"



const AboutPage = () =>{
	
	const data = useStaticQuery(graphql`
		query {
			allContentfulAboutext {
				edges {
					node {
						text {
							text
						}
					}
				}
			}
		}
    `)
	

	return(


		<div>
		<HeaderPage/>
			
			<div class="aboutCont App">
				<div class="d-flex justify-content-center align-items-center">
					<div class="cardArea ">
						
						<div class="imgHead">
							<div class="greenCir"></div>
							<div class="whiteCir3"></div>
							<div class="imgDiv"></div>
						</div>
						
						<h1>Dr. Arif Alvi</h1>
						<p>President of the Islamic Republic of Pakistan</p>
						
						<div class="spans d-flex justify-content-center align-items-center">
							<div>
								<ul>
									<li>
										<a target="_blank" href="https://www.facebook.com/Dr.ArifAlvi/">
							            <img class="span" src="https://www.piaic.org/static/media/fb-logo.6163476d.png"/>
							            </a>
							        </li>
							        <li> 
										<a target="_blank" href="https://twitter.com/ArifAlvi">
							            <img class="span" src="data:image/png;base64,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"/>
							            </a>
							        </li>
							    </ul>
							</div>
						</div>
						</div>
						</div>
		
		<div class="modalPCont d-flex justify-content-center align-items-center">
			{data.allContentfulAboutext.edges.map((edge) => {
			    return (
			    	<p>{edge.node.text.text}</p>
				)
			})}
		</div>
		
		<br/>
		</div>
		<FooterPage/>
		</div>
		)
}
export default AboutPage