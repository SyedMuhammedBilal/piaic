import React from "react"
import Layout   from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/artifical.css"
import Art from "../images/art.png"
import "../styles/bootstrap.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "gatsby"

import "../styles/home.css"
import "../styles/grid.scss"
import "../styles/reboot.scss"
import "../styles/type.scss"
import Git from "../images/git.png"
import Python from "../images/python.png"
import Graph from "../images/graph.png"
import Ana from "../images/ana.png"
import DS from "../images/ds.png"
import K from "../images/keras.png"
import Linux from "../images/linux.png"
import Docker from "../images/docker.png"
import MS from "../images/ms.png"
import PMS from "../images/pms.png"

const art = () => {
	return (
		<body>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		
		<div>
		    <div class="Rectangle-67 d-flex justify-content-center align-items-center">
		        <div class="SliderData">
		            <h1 class="Artificial-Intelligence">
		            Artificial-Intelligence
		            <br/>
		            </h1>
		            <p class="">
		                "A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS."
		                <br/>
		                "GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI."
		            </p> 
		        </div>
		    </div>
		    <div class="line2">
		        <h1 class="program">Program Structure</h1>
		            "A four-quarter AI program in Data Science, Machine Learning, and Deep Learning."

		    </div>
		    <br/>
		    <br/>
		</div>

			<div class="container my-container Q-Con">
			    <div class="row">
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 d1">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    1
			                    </h4>
			                    <p class="para">AI Foundations</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 d2">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    2
			                    </h4>
			                    <p class="para">Introduction  to Data  Science & Deep  Learning</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 d3">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    3
			                    </h4>
			                    <p class="para">Deploying AI solutions</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 d4">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    4
			                    </h4>
			                    <p class="para">AI in practice</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			<div class="container my-container main-container">
			    <div class="box-mega-container">
			        <hr/>
			        <div class="row">
			            <div class="col-sm-12">
			                <div class="ai-circle-line circle-line-2"></div>
			                    <h1 class="sec-head">Detailed Program Structure</h1>
			                    <div class="ai-circle-line"></div> 
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle-transparent">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Version Control with Git</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Git}/>
			                                    "You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent">
			                                    <span>1A</span>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle-transparent">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B1 transparent">
			                                    <span>1B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Object  Oriented  and  Functional  Programming using  Python</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Python}/>
			                                    "In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle-transparent">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Introduction  to  Linear  Algebra  and  Statistics</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Graph}/>
			                                    "In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent">
			                                    <span>1C</span>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle A2 grey">
			                                    <span>2A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Advanced  Python  Libraries  with  Anaconda </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Ana}/>
			                                    "In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B,2 grey">
			                                    <span>2B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">   Data  Science  Essentials </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={DS}/>
			                                    "In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle C2 grey">
			                                    <span>2C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> The  Fundamentals  of  Deep  Learning  with  Keras with  TensorFlow  Backend </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={K}/>
			                                    "Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B,2 grey1">
			                                    <span>3A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">    Introduction  to  Linux  and  Bash </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Linux}/>
			                                    "Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B3 grey1">
			                                    <span>3B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">  Docker  Deep  Dive </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Docker}/>
			                                    "This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle C,3 grey1">
			                                    <span>3C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">    Python  Microservices  Development </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={MS}/>
			                                    "In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle D3 grey1">
			                                    <span>3D</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">  Build  AI  Microservices  for  ContainerDeployments</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={PMS}/>
			                                    "In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle 4 grey2">
			                                    <span>4</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Artificial  Intelligence  (AI)  in  Practice </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/ai.ebc8e285.png"/>
			                                    "This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			            </div>
			        </div>
			    </div>
            </div>
		</body>
	)
}

export default art