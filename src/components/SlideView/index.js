import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
    width: 100%;
`;

const Page = styled.div`
    width = 100%;
`;

export default class SlideView extends React.Components {
	render(){
		return(
			<Wrapper>
			    <Slider
			       speed={500}
			       slidesToShow={1}
			       slidesToScroll={1}
			       infinite={false}
			    >
			    <Page>Page one</Page>
			    <Page>Page two</Page>
			    <Page>Page three</Page>
			    </Slider>
			</Wrapper>
		);
	}
}