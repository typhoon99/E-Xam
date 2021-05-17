import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Card, Container, Figure, Jumbotron } from "react-bootstrap";
import CardImage from "../../../assets/img/cardImage.jpg";
import ProfileImage from "../../../assets/img/Classes/perfil.jpg";
function ClassCard({ id, name, teacher, role, url, profileImage, bgImage }) {
  return (
    <Fragment>
      <Col md={4}>
        <Card className="classCard">
          <Jumbotron
            className="classJumbotron px-0"
            style={{ backgroundImage: `url(${CardImage})` }}
          >
            <Container className="mt-2">
              <Row className="align-items-center ">
                <Col xs="10">
                  <h4 className="subName text-light">
                    <NavLink to={url}>{name}</NavLink>
                  </h4>
                </Col>

                <Col xs={2}>
                  <a href="/classes" className="text-right text-white ">
                    <i className="bx bx-dots-vertical-rounded float-right"></i>
                  </a>
                </Col>
              </Row>
              <Row className="align-items-center ">
                <Col>
                  <p className="text-light">{teacher}</p>
                </Col>
              </Row>
            </Container>
            <Figure className=" float-right pr-3">
              <Figure.Image
                src={ProfileImage}
                className=" rounded-circle classImg"
                alt=""
              />
            </Figure>
          </Jumbotron>
          <Card.Body>
            <Row>
              <Col>
                <h4>TO-DO</h4>
                <div className="toDoList">
                  <ul>
                    <li>
                      <a href="/assignment" className="card-text text-dark m-0">
                        Assignment 2
                      </a>
                    </li>
                    <li>
                      <a href="/quiz" className="card-text text-dark m-0">
                        Quiz 2
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
}

export default ClassCard;
