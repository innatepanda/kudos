import React from 'react';
import classes from './infoCard.module.css'
import { Card, CardBody,
  CardTitle, CardText,  CardFooter } from 'reactstrap';

const InfoCard = (props) => {
  console.log()
  return (
    
      
        <Card className={classes.Card}>
      <img src={props.data.links.mission_patch} width="90%" alt={props.data.links.mission_patch}></img>
      
      
        <CardBody>
          <CardTitle tag="h5">{props.data.mission_name}</CardTitle>
          <CardText className={classes.cardtext}>{props.data.details}</CardText>
        </CardBody>
        <CardFooter>
            <small className="text-muted">Flight number {props.data.flight_number}</small>
            
          </CardFooter>
      </Card>

      
      
      
    
  );
};

export default InfoCard;