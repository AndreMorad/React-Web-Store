import React, { Component } from "react";

const cardsInfo = [
  {
    img: "https://picsum.photos/200/200?random=1",
    title: "TV",
    text: "This is a wider card with supporting text below as a natura to additional content. This content is a little bit",
  },
  {
    img: "https://picsum.photos/200/200?random=2",
    title: "Dator",
    text: "This is a wider card with supporting",
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
          <div className="row row-cols-1 row-cols-md-4">
            {cardsInfo.map((card) => (
              <div className="col mb-4">
                <div className="card m-2 ">
                  <div className="overflow ">
                    <img
                      src={card.img}
                      height="150"
                      class="card-img-top "
                      alt="card"
                    />
                  </div>
                  <div className="custom-body">
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                  <div className="card-body scroll">
                    <p className="card-text">{card.text}</p>
                  </div>
                  <div className="card-footer ">
                    <h8 className="text-muted">2 days ago</h8>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
