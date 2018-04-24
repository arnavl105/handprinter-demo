import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

const HomepageContent = () => {

	return(

	<Grid>

		<Row>
          <Col md={8}>
            <h2>We are using up 50% more natural resources than the Earth can provide.</h2> 
            <h2>At our current population, we need </h2> <h1><u>1.5 Earths.</u></h1>
            <p>We as a society are consuming our Earth's resources at a rate we cannot sustain, by trying to take small steps towards improving our handprint, we can help keep the planet alive</p>
          </Col>

          <Col md={4}>
          	<img src="placeholder.png" />
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <h2 className="subHeader">Our Footprint</h2>
            <p style={{float:"right"}}>is the sum of all the (unintended) negative impacts that come from the activities which supply us the goods and services that we buy and use throughout the year</p>
          </Col>
        </Row>

        <Row>
            <p className="text-center">If our footprint is the cost to the world of sustaining us this year,
            our handprint is composed of all the benefits and good that we bring to the world during this same year.</p>
            <h2 className= "text-center">If our footprint is what we take, our handprint is what we give.</h2>
        </Row>

         <Row>
          <Col md={12}>
            <h2 className="subHeader">Our Handprint</h2>
            <p style={{float:"right"}}>is the sum of all the (unintended) negative impacts that come from the activities which supply us the goods and services that we buy and use throughout the year</p>
          </Col>
        </Row>


    </Grid>

	);


}

export default HomepageContent;