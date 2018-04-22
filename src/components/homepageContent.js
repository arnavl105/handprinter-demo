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
            <h2 className="text-center">Get Net Positive</h2>
            <p>By being net positive you are taking on actions which allow you to diminish your footprint below that of the average person. By taking action through Handprinter, as well as engaging our friends, we can all strive for net positivity.</p>
          </Col>
        </Row>

        <Row>
        	<Col md={12}>
            	<h2 className="text-center">Getting Started</h2>
        	</Col>
        </Row>

        <Row>

        	<Col md={2} mdOffset={4}><Button bsStyle="info">Calculate my Handprint &raquo;</Button></Col>
            <Col md={2}><Button bsStyle="info">Calculate my Footprint &raquo;</Button></Col>

        </Row>

        <Row>
          <Col md={12}>
            <h2 className="text-center">Meet some of our Handprinters</h2>
          </Col>
        </Row>
    </Grid>

	);


}

export default HomepageContent;