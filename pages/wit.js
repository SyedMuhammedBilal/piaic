import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import ImageGallery from 'react-image-gallery';

import Layout from '../components/layout'
import "../styles/wit.css"
import image from "../images/image.jpg"



const Wit = () => {

	const data = useStaticQuery(graphql`
		query MyQuery {
			allContentfulWit {
				edges {
					node {
						img {
							file {
								url
							}
                        }
                    }
                }
            }
            allContentfulWitTitle {
            	edges {
            		node {
            			title
            		}
            	}
			}
			allContentfulWitText {
				edges {
					node {
						text2 {
							text2
						}
					}
				}
			}
        }

	`)

	return (
		<Layout>
		  	<img class="women-background" src={image} alt="level up logo" class="women-background" />
			  <br/>
			  <br/>
			<div class="paragraph">
			{data.allContentfulWitTitle.edges.map((edge) => {
			    return (
		    <p>{edge.node.title}</p>
		        )
			})}
		    
			<p></p>
			
			{data.allContentfulWitText.edges.map((edge) => {
			    return (
		    <p>{edge.node.text2.text2}</p>
			   )
			})}
		    </div>
		    
			<br/>
		    <br/>
		    
			<div>
		    <p class="gallery-heading"><u>WOMEN INCLUSION IN TECHNOLOGY</u></p>
		    </div>
		    <br/>
		    <center><p class="c">PIAIC WOMEN'S GALLERY</p></center>
		    <main>
		    <br/>
		    
			{data.allContentfulWit.edges.map((edge) => {
			    return (
		    <div class="gallery"><img src={edge.node.img.file.url} width="350" height="200" /></div>
			    )
			})}
		    
			</main>
		</Layout>
	)
}

export default Wit 



