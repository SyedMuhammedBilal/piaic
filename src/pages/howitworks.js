import React from "react";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout   from '../components/layout'

import "../styles/bootstrap.min.css"
import Styles from "../styles/hiw.css"

const HIW = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulHowItWorks {
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
	

	return (
		
		<body>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		
            <div class="container-fluid hiw-cont">
                <div class="row hiw-box1 ">
                    <div class="col-sm-12 d-flex justify-content-center align-items-center">
                        <h1>How It Works</h1>
                    </div>
                    <div class="col-sm-2 d-flex justify-content-center align-items-center">
                        <div class="coutbutton d-flex justify-content-center align-items-center">1</div>
                    </div>
                    <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-center align-items-center">
                        <div>
                            <p class="para1">
                            "PIAIC will launch classes in the following locations, one city at a time, in the following order"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-sm-2 "></div>
		    <div class="row hiw-box1-1">
		    	<div class="col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center">
		    		<div>
		    			<img class="pakMap" src="https://www.piaic.org/static/media/pakMap.920e8f6a.png"/>
		    		</div>	
		    	</div>
		    </div>
		   




		    <div class="row hiw-box2">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">2</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		                <p class="para1">
		                "To participate in the program and become eligible for the most prestigious credentials for AI, Cloud, and Blockchain technologies in the world, students must complete the following process"
		                </p>
		            </div>
		        </div>    
		    </div>
		    <div class="hiw-box2-text2 d-flex">
		        <div class="left-text">
		            <hr/>
		            <p>
		            1- "Signup at PIAIC Portal. "
		            <a class="hiw-link" target="_blank" href="#">Click Here</a>
		            </p>
		            <p>2- "Submit the online application.</p>
		            <p>
		            3- "Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile."
		            </p>
		            <p>4- "Pass al PIAIC exam with an average score of at least 70%.</p>
		            <br/>
		        </div>
		    </div>
		    <div class="row hiw-box3 ">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">3</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		            {data.allContentfulHowItWorks.edges.map((edge) => {
			    	return (
		                <p class="para2">
                        {edge.node.text.text}
		                </p>
		                )
		            })}
		            </div>
		        </div>
		        <div class="col-sm-2 "></div>
		    </div>
		    <div class="row hiw-box4 ">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">4</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		                <p class="para3">
		                "Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students."
		                <br/>
		                <br/>
		                "The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter."
		                <br/>
		                <br/>
		                "The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter."
		                </p>
		            </div>
		        </div>
		    </div>
		    <div class="row hiw-box5 ">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">5</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		                <p class="para4">
		                "Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds."
		                </p>
		            </div>
		        </div>
		    </div>
		    <div class="row hiw-box6 ">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">6</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		                <p class="para3">
		                "Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications."
		                </p>
		            </div>
		        </div>
		    </div>
		    <div class="row hiw-box7 ">
		        <div class="col-sm-2 d-flex justify-content-center align-items-center">
		            <div class="coutbutton d-flex justify-content-center align-items-center">7</div>
		        </div>
		        <div class="col-sm-8 mt-4 mt-sm-0 d-flex justify-content-start align-items-center">
		            <div>
		                <p class="para2">
		                "For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM. Please note we are closed on Fridays. For technical questions related to coursework, you may contact us via email at education@piaic.org."
		                </p>
		            </div>
		        </div>
		    </div>
		</body>
		
	)
} 

export default HIW