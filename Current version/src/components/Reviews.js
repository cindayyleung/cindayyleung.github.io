import React, { Component } from "react";

export class Reviews extends Component {
  render() {
    const reviews = this.props.data;
    console.log(reviews)

    return (
      <section id="reviews">
        <div className="accordion">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
            {reviews.map((item, index) => (
                <div className={`carousel-item ${index == 0 ? "active" :""}`} key={index}>
                    <div className="contentContainer mx-auto">
                        <div className="whatPeopleSay">WHAT PEOPLE SAY</div>
                        <div className="review">
                            <div>"{item.content}"</div>
                            <div className="mt-3">- {item.from}</div>
                        </div>
                    </div>
                 </div>
            ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
