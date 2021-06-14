import React, { Component } from "react";
import { CardGroup, Card, Container, Row, Col } from "react-bootstrap";

const cardsInfo = [
  {
    img: "https://picsum.photos/200/200?random=1",
    title: "TV",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=2",
    title: "Dator",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=3",
    title: "Telefon",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=4",
    title: "Snus",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=5",
    title: "Snus",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=6",
    title: "Snus",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=7",
    title: "Snus",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=8",
    title: "Snus",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 m-5">
            {cardsInfo.map((card) => (
              <div className="col mb-4 ">
                <div className="card m-2">
                  <div className="overflow">
                    <img
                      src={card.img}
                      height="200"
                      class="card-img-top "
                      alt="card"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                  <div className="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*
        <Container className="m-auto">
          <CardGroup>
            {cardsInfo.map((card) => (
              <div className="row-cols-3">
                <Card className="m-2" style={{ border: "1px solid black" }}>
                  <Card.Img variant="top" src={card.img} height="200" />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardGroup>
        </Container>
            */}
        {/*
        <Container className="m-auto">
          <CardGroup>
            <Card className="m-2" style={{ border: "1px solid black" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/200?random=4"
                height="200"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2" style={{ border: "1px solid black" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/200?random=3"
                height="200"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2" style={{ border: "1px solid black" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/200?random=2"
                height="200"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2" style={{ border: "1px solid black" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/200?random=1"
                height="200"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2" style={{ border: "1px solid black" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/200?random=5"
                height="200"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
        */}
      </div>
    );
  }
}
