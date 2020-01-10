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
        }

	`)

	return (
		<Layout>
		  	<img class="women-background" src={image} alt="level up logo" class="women-background" />
			<div class="paragraph">
			{data.allContentfulWitTitle.edges.map((edge) => {
			    return (
		    <p>{edge.node.title}</p>
		        )
			})}
		    <p></p>
		    <p>The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.</p>
		    <p></p>
		    <p>The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.</p>
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



