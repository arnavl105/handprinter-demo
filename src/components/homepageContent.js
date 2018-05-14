import React, { Component } from 'react';
import {Grid, Row, Col, Button, Glyphicon, Modal} from 'react-bootstrap';
import placeholder from '../img/placeholder.png';
import student from '../img/student.jpg';
import man from '../img/man.jpg';
import young from '../img/young-professional.jpg';
import gardener from '../img/gardener.jpg';

class HomepageContent extends Component {

  constructor(props){
    super(props);
    this.state={
      show:false,
      showProfile1: false,
      showProfile2: false,
      showProfile3: false,
      showProfile4: false
    }
    this.toggleShow = this.setState.bind(this);
  }

  toggleShow(){
    console.log("got here");
    var display = this.state.show
    this.setState({show: !display})
    console.log(display, this.state.show);
  }


  render(){

    console.log(this.state);

	return(

	<Grid>

          <Row>
          <Col md={12}>
            <h2 className="subHeader">Our Footprint</h2>
            <p className="contentText"style={{float:"right"}}>Our footprint is the sum of all the (unintended) negative impacts that come from the activities which supply us the goods and services that we buy and use throughout the year</p>
          </Col>
        </Row>


		<Row>
          <Col md={8}>
            <p className="contentText">We using 50% more natural resources annually than the Earth can provide.</p> 
            <p className="contentText">At our current consumption levels, we need <b>1.5 Earths.</b> to sustain us</p>
            <p className="contentText">We as a society are consuming our Earth's resources at a rate we cannot sustain, by trying to take small steps towards improving our handprint, we can help keep the planet alive</p>
          </Col>

          <Col md={4}>
          	<object type="application/x-shockwave-flash" data="http://www.handprinter.org/wp-content/themes/handprinter/flash/handprinter_player.swf" id="myAlternativeContent"></object>
          </Col>
        </Row>
        


         <Row>
          <Col md={12}>
            <h2 className="subHeader">Our Handprint</h2>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2 className= "contentText">If our footprint is what we take, our handprint is what we give.</h2>
            <p className="contentText">If our footprint is the cost to the world of sustaining us this year,
            our handprint is composed of all the benefits and good that we bring to the world during this same year.</p>
            <Button onClick={() => {this.setState({show: !this.state.show})}}>More Info</Button>
          </Col>
            <Modal show={this.state.show}>
              <Modal.Body>
                <p>Your handprint consists of the actions you take plus the actions you influence others to take. More details coming soon</p>
              </Modal.Body>

              <Button onClick={() => {this.setState({show: !this.state.show})}}>Close</Button>

            </Modal>

        </Row>

        <Row>
          <Col md={12}>
            <h2 className="subHeader">Boost your handprint with these actions:</h2>
            <h3 className="subSubHeader">(and influence others to do the same)</h3>
            { this.props.cards }

          </Col>
        </Row>

        <Row>
            <Button onClick={() => {this.props.shuffleIdeas("backwards")}}><Glyphicon glyph="chevron-left"/></Button>
            <Button onClick={() => {this.props.shuffleIdeas("forwards")}}><Glyphicon glyph="chevron-right"/></Button>  
        </Row>


        <Row>
            <h2 className="subHeader">Meet some of our Handprinters</h2>
        </Row>

        <Row>
            <Col md={3}>
              <img onClick={() => {this.setState({showProfile1: !this.state.showProfile1})}} className="profiles" src={ student }/>
              <h3 className="profileTitle">Student</h3>


            <Modal show={this.state.showProfile1}>
              <Modal.Body>
                <p>Meet Julie.</p>
                <p>
                She's a student and an athlete, playing on two of her school's sports teams.
                She recently learned that if the average American properly inflated their car tires, this would reduce their total carbon footprint by 1%.  She doesn't have a car, but she lives in a town full of cars.  She's outgoing, has lots of friends, and is always glad to get exercise during the weeks that neither of his teams is practicing. All of this gave him an idea.
                </p>
                <p>
                She got 4 of her team mates to join her at the local grocery store parking lot one Saturday, with bike pumps, tire gauges and note pads.  Julie and her friends asked grocery shoppers if they wanted to have their tires checked and inflated to proper pressure.  They explained that the drivers would save gasoline, money, extend their tire life, and even improve driving handling and safety.  They recorded the before-and-after tire pressures, and they got a lot of exercise too!
                </p>
                <p>
                By the end of the day, Julie had pumped up the tires on 22 cars, and a total of 82 drivers had their tires adjusted to proper pressure. Julie had hoped they'd reach 100, because if they had, she would have become Net Positive for the year: 100 * 1% = 100%!  But then the next good thing happened.  Her boyfriend is part of a group that does car washing fund-raisers.  They decided to add tire inflation to their car wash, and inflated the tires on another 32 cars.  
                </p>
                <p className="profileEnd">
                Julie is Net Positive for 2018!
                </p>
              </Modal.Body>

              <Button onClick={() => {this.setState({showProfile1: !this.state.showProfile1})}}>Close</Button>

            </Modal>

            </Col>
            
            <Col md={3}>
              <img onClick={() => {this.setState({showProfile2: !this.state.showProfile2})}} className="profiles" src={ man }/>
              <h3 className="profileTitle">Working Dad</h3>

            <Modal show={this.state.showProfile2}>
              <Modal.Body>
                <p>
                Meet Mark
                </p>
                <p>
                He's a husband and father who works hard and loves NASCAR.  His footprint is larger than the average American's, and he feels constrained right now in what he can do about it at home or in his life.  He heard from friends at work that one of the biggest contributors to our footprints is air travel.  Just one coast-to-coast round-trip flight can add 10-20% to the average American's footprint. 
                </p>
                <p>
                A work team he was part of had been planning a meeting that would bring 10 people from their 3 different sites into town for a day and a half.  Suddenly Mark wondered: could they do this meeting via the web instead?  What if they planned the schedule so that the whole team came together (via web) to kick it off, and then break-out teams at each site worked on pieces of the agenda, and they got back together several times during the day-and-a half to share and discuss results?  The boss decided to give it a try, especially since she had been eyeing the travel budget recently.  The team felt that it turned out to be one of their more productive meetings.  The handprint of Mark's idea was larger than his entire footprint at home for the entire year!
                </p>
                <p>
                He was proud of this, and described it at the dinner table one night. To his surprise, his teenage daughter Ally was really supportive of him!  She suggested that maybe the family could think about trying a "stay-cation" this year, instead of their usual trip.  Maybe her friends could camp in their yard one night, and so-on.  It took a lot of brainstorming before Ally's mom was as enthusiastic as Mark and Ally, but eventually they all combined their ideas and ended up having one of their more memorable and enjoyable and low-stress vacations ever.
                </p>
              </Modal.Body>

              <Button onClick={() => {this.setState({showProfile2: !this.state.showProfile2})}}>Close</Button>

            </Modal>

            </Col>
            
            <Col md={3}>
              <img onClick={() => {this.setState({showProfile3: !this.state.showProfile3})}} className="profiles" src={ young }/>
              <h3 className="profileTitle">Young Professional</h3>

              <Modal show={this.state.showProfile3}>
              <Modal.Body>
                <p>
                  Meet Emily.
                </p>
                <p>
                  She's working in her first job out of school.  She's incredibly eco-conscious. She's a vegetarian, takes public transit or bikes or walks; she keeps the thermostat set low in the winter, line-dries her clothes, composts, and even grows some of her own vegetables in a community garden!  She used an online calculator to help her figure out her footprint, and it was just 45% of that of the average US citizen, which is amazing.  But she's wondering what to do next.  
                </p>
                <p>
                  Talking with Maria at the community garden, she learned that Maria's apartment was so small that there was really no good place to dry clothes, inside or out, so Maria used the driers in the laundromat.  Just the electricity to run an electric drier can cost the average American $75 per year. At $12 every laundry trip, drier use was costing Maria over $200 per year. They had an idea.  What about putting up some clothes lines along one side of the community garden?  It was an area that might benefit from some reduced wind, and wasn't being used for growing things.  Maybe other people's situation was like Marias?  
                </p>
                <p>
                  The community garden committee loved the idea. 4 months later, Maria was making new friends while hanging up her laundry.  And by the end of summer, Emily was Net Positive.
                </p>
              </Modal.Body>

              <Button onClick={() => {this.setState({showProfile3: !this.state.showProfile3})}}>Close</Button>

            </Modal>

            </Col>
            
            <Col md={3}>
              <img onClick={() => {this.setState({showProfile4: !this.state.showProfile4})}} className="profiles" src={ gardener }/>
              <h3 className="profileTitle">Active Community Member</h3>

              <Modal show={this.state.showProfile4}>
              <Modal.Body>
                <p>Meet Maria</p>
                <p>
                Actually, you already met Maria, in the community garden with Emily.  One of Maria's new friends Xavier is on the committee that oversees the community garden.  Maria learned from Xavier that there was a network of community gardens for their state.  She offered to write an article about their garden's successful experiment with adding clotheslines next to the garden, and submit it to the newsletter and website of the state network.  Xavier took some nice photos and helped Maria get the article published and online.  
                </p>
                <p>
                Xavier soon learned from his peers in the network that other gardens were interested, but had lots of questions and concerns, and some faced obstacles in implementing the clothesline idea.  He asked Maria if she was willing to spearhead a kind of informal "support group" that would share ideas about solutions to these challenges, and help as many gardens as possible in the network to achieve success at adding clotheslines of their own.  She was delighted to do it, and one year later, 12 gardens in the state are successfully implementing and sharing lessons learned from their own "clothesline adventures."  
                </p>
                <p className="profileEnd">
                And Maria is Net Positive!
                </p>
              </Modal.Body>

              <Button onClick={() => {this.setState({showProfile4: !this.state.showProfile4})}}>Close</Button>

            </Modal>

            </Col>
        </Row>


    </Grid>

	);
}

}

export default HomepageContent;