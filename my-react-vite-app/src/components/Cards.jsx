import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({image, rating, paragraph, title, price, renderRatingIcons}) {
  return (
      <Col sm={6} lg={4} xl={3} className="md-4">
          <Card className="overflow-hidden" >
              <img src={image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="d-flex align-item-center justify-content-between">
                  <div className="item-rating">{renderRatingIcons(rating)}</div>
                  <div className="whishlist">
                  <i class="bi bi-heart"></i>
                  </div>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{paragraph}</p>
                  <div className="d-flex align-item-center justify-content-between">
                    <div className="menu_price">
                      <h5 className="mb-0">${price}</h5>
                    </div>
                    <div className="add_to_card">
                      <Link to="/">
                      <i class="bi bi-bag me-2"></i>
                        Add to card
                      </Link>
                    </div>    
                  </div>
              </div>
          </Card>
      </Col>
    )
}

export default Cards;