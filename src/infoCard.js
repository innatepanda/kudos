import React from 'react';

import { Card, CardBody,
  CardTitle, CardText } from 'reactstrap';

const InfoCard = (props) => {
  console.log()
  return (
    <div>
      <Card>
      <img src={props.data.links.mission_patch} width="25%" alt={props.data.links.mission_patch}></img>
      {props.data.links.mission_patch}
      
        <CardBody>
          <CardTitle tag="h5">Flight number {props.data.flight_number}</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
            
          </CardText>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default InfoCard;