import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Carousel, } from 'react-bootstrap';
import StoreIOS from "../../assets/appstore.png";
import storeGoogle from "../../assets/googleplay.png";
import DownloadImage from "../../assets/e-shop.png";
import brand1 from "../../assets/brand-11.png";
import brand2 from "../../assets/brand-12.png";
import brand3 from "../../assets/brand-13.png";
import brand4 from "../../assets/brand-14.png";
import brand5 from "../../assets/brand-15.png";
import brand6 from "../../assets/brand-16.png";
import brand7 from "../../assets/brand-17.png";
import brand8 from "../../assets/brand-18.png";

function Sections5() {
  return (
    <>
    <section className="shop_section">
        <Container>
            <Row className="align-item-center" >
                <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>Download mobile App and</h4>
                    <h2>save up to 20%</h2>
                    <p>
                    Aliquam a augue suscipit, luctus neque purus ipsum and neque
                    dolor primis libero tempus, blandit varius
                    </p>
                    <Link to="/">
                        <img src={StoreIOS} alt="IOS" className="img-fluid store me-3"></img>
                    </Link>
                    <Link to="/">
                        <img src={storeGoogle} alt="Android" className="img-fluid store me-3"></img>
                    </Link>
                </Col>
                <Col lg={6}>
                <img src={DownloadImage} alt="e-shop" className="img-fluid"></img>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="brand_section">
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-item-center justify-contact-between">
                                <div className="brand_img">
                                    <img src={brand1} className="img-fluid" alt="brand-1"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand2} className="img-fluid" alt="brand-2"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand3} className="img-fluid" alt="brand-3"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand4} className="img-fluid" alt="brand-4"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand5} className="img-fluid" alt="brand-5"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand6} className="img-fluid" alt="brand-6"></img>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-item-center justify-contact-between">
                                <div className="brand_img">
                                    <img src={brand3} className="img-fluid" alt="brand-3"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand4} className="img-fluid" alt="brand-4"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand5} className="img-fluid" alt="brand-5"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand6} className="img-fluid" alt="brand-6"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand7} className="img-fluid" alt="brand-7"></img>
                                </div>
                                <div className="brand_img">
                                    <img src={brand8} className="img-fluid" alt="brand-8"></img>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Sections5