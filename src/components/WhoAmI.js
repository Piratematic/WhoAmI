import React from 'react';
import { Card, } from 'semantic-ui-react';
import { WhoAmIConsumer } from "../providers/WhoAmIProvider";
import { __values } from 'tslib';

const WhoAmI = () => (
  <WhoAmIConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.firstname }</Card.Header>
          <Card.Header>{ value.lastname }</Card.Header>
          <Card.Content>{ value.email }</Card.Content>
        </Card.Content>
      </Card>
    )}
  </WhoAmIConsumer>
)

export default WhoAmI;