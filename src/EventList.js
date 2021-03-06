import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col } from "react-bootstrap";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        <Row className="d-flex justify-content-center eventlist">
          {events.map((event) => (
            <Col sm={12} md={6} lg={4} key={event.id}>
              <Event event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default EventList;