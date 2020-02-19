import React from "react";
import { Button, Icon, List, Header } from "semantic-ui-react";

import moment from 'moment';

export default ({
  task: { title, body, _id, isCompleted, dueDate },
  onDelete,
  onComplete
}) => {
  return (
    <div>
        
      <List.Content floated="right">

        <Button
          animated="vertical"
          negative
          type="button"
          onClick={() => onDelete(_id)}
        >
          <Button.Content hidden>Remove</Button.Content>
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
        </Button>
        <Button
          animated="vertical"
          positive
          type="button"
          onClick={() => onComplete(_id)}
        >
          <Button.Content hidden>Done</Button.Content>
          <Button.Content visible>
            <Icon name='clipboard check' />
          </Button.Content>
        </Button>
      </List.Content>
      <List.Content>
        <Header style={isCompleted ? { textDecoration: "line-through" } : {}}>
          {title ? title : null} 
        </Header>
        <span style={{color:"lightgrey", fontSize : '10px', float:'right'}}> Due By : {dueDate?moment(dueDate).format('ll'):null}</span> 
        <p>{body ? body : null} </p> 
      </List.Content>
    </div>
  );
};
