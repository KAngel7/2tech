import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';

class MainPage extends React.Component<RouteComponentProps<{}>, {}> {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="home-page-body">
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-8">
                <h1 className="text-white">
                  Develop everything with 2tech team
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area pb-100" id="service">
          <div className="container">
            <div className="row mockup-container">
              <img className="mx-auto d-block img-fluid" src="img/laptop.png" alt="no-image" />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="menu-content pt-100 pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">Our Most Unique Features</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-feature">
                  <span className="lnr lnr-screen" />
                  <h4>
                    Stunning Visuals
                  </h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life without giving
                    them a second thought such as Coca Cola.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <span className="lnr lnr-code" />
                  <h4>
                    Clean Code
                  </h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life
                     without giving them a second thought such as Coca Cola.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <span className="lnr lnr-clock" />
                  <h4>
                    Punctuality
                  </h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life
                     without giving them a second thought such as Coca Cola.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">Powerful User interface Design</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 about-left">
                <h6>Brand new app to blow your mind</h6>
                <h1>
                  We’ve made a life
                  <br /> that will change you
                </h1>
                <p>
                  <span>
                    We are here to listen from you deliver exellence
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod temp or incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
                <a className="primary-btn" href="#">Get Started now</a>
              </div>
              <div className="col-lg-6 about-right">
                <div className="active-about-carusel">
                  <div className="single-carusel item">
                    <img className="img-fluid" src="img/about-img.png" alt="no-image" />
                  </div>
                  <div className="single-carusel item">
                    <img className="img-fluid" src="img/about-img.png" alt="no-image" />
                  </div>
                  <div className="single-carusel item">
                    <img className="img-fluid" src="img/about-img.png" alt="no-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-area section-gap" id="feature">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">Features That make us Unique</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 secvice-left">
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>01</h1>
                  </div>
                  <div className="desc">
                    <h4>User Research</h4>
                    <p>
                      inappropriate behavior is often laughed off as
                      “boys will be boys,” women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>03</h1>
                  </div>
                  <div className="desc">
                    <h4>Sketch & Wireframes</h4>
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,”
                       women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>05</h1>
                  </div>
                  <div className="desc">
                    <h4>User Research</h4>
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,”
                       women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 secvice-right">
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>02</h1>
                  </div>
                  <div className="desc">
                    <h4>User Interface</h4>
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,”
                       women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>04</h1>
                  </div>
                  <div className="desc">
                    <h4>User Experience</h4>
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,”
                       women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
                <div className="single-service d-flex flex-row pb-30">
                  <div className="icon">
                    <h1>06</h1>
                  </div>
                  <div className="desc">
                    <h4>User Interface</h4>
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,”
                       women face higher conduct standards especially in the
                      workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="callto-action-area relative section-gap">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content col-lg-9">
                <div className="title text-center">
                  <h1 className="mb-10 text-white">Got Impressed to our features</h1>
                  <a className="primary-btn" href="#">Request Free Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-video-area">
          <div className="container-fluid">
            <div className="row justify-content-end align-items-center">
              <div className="col-lg-4 no-padding video-right">
                <p className="top-title">Tutorial for beginner</p>
                <h1>Watch tutorial
                <br /> Video of SaaS to start</h1>
                <p>
                  <span>We are here to listen from you deliver exellence</span>
                </p>
              </div>
              <section className="video-area col-lg-6">
                <div className="overlay overlay-bg" />
                <div className="container">
                  <div className="video-content">
                    <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="play-btn">
                      <img src="img/play-btn.png" alt="no-image" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="home-aboutus-area">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 no-padding about-left relative">
                <div className="overlay overlay-bg" />
                <img className="img-fluid" src="img/f2.jpg" alt="no-image" />
              </div>
              <div className="col-lg-4 no-padding about-right">
                <p className="top-title">24/7 Support system</p>
                <h1>A Handy support
                  <br /> System for the Software</h1>
                <p>
                  <span>We are here to listen from you deliver exellence</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="price-area section-gap" id="price">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Choose the best pricing for you</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-price no-padding">
                  <div className="price-top">
                    <h4>Real basic</h4>
                  </div>
                  <ul className="lists">
                    <li>Freelance</li>
                    <li>1 Senior level developer</li>
                    <li>Unlimited Language</li>
                    <li>Customer Service</li>
                  </ul>
                  <div className="price-bottom">
                    <div className="price-wrap d-flex flex-row justify-content-center">
                      <span className="price">$</span>
                      <h1> 20 </h1>
                      <span className="time">Per <br /> Hour</span>
                    </div>
                    <a href="#" className="primary-btn header-btn">Get Started</a>
                  </div>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-price no-padding">
                  <div className="price-top">
                    <h4>Real Standred</h4>
                  </div>
                  <ul className="lists">
                    <li>Small team</li>
                    <li>1 Project manager, 4 senior devs</li>
                    <li>Unlimited Language</li>
                    <li>Customer Service</li>
                  </ul>
                  <div className="price-bottom">
                    <div className="price-wrap d-flex flex-row justify-content-center">
                      <span className="price">$</span>
                      <h1> 25 </h1>
                      <span className="time">Per<br /> Hour</span>
                    </div>
                    <a href="#" className="primary-btn header-btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-price no-padding">
                  <div className="price-top">
                    <h4>Real Ultimate</h4>
                  </div>
                  <ul className="lists">
                    <li>Big team</li>
                    <li>1 Project manager, 6 senior dev, 2 designer</li>
                    <li>Unlimited Styles</li>
                    <li>Customer Service</li>
                  </ul>
                  <div className="price-bottom">
                    <div className="price-wrap d-flex flex-row justify-content-center">
                      <span className="price">$</span>
                      <h1> 35 </h1>
                      <span className="time">Per<br /> Hour</span>
                    </div>
                    <a href="#" className="primary-btn header-btn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-area relative section-gap" id="testimonial">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Testimonial from our Clients</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-testimonial">
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t1.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer
                       accessory for your laptop, monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star"/>
                      <span className="fa fa-star"/>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t2.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer accessory
                       for your laptop, monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t1.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer accessory for your
                       laptop, monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star"/>
                      <span className="fa fa-star"/>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t2.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer accessory for your laptop,
                      monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t1.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer accessory for your laptop,
                       monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star"/>
                      <span className="fa fa-star"/>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/t2.png" alt="no-image" />
                  </div>
                  <div className="desc">
                    <p>
                      Accessories Here you can find the best computer accessory for your laptop,
                       monitor, printer, scanner, speaker, projector,
                      hardware.
                    </p>
                    <h4 mt-30={true}>Mark Alviro Wiens</h4>
                    <div className="star">
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                      <span className="fa fa-star checked"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-blog-area section-gap" id="blog">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Latest News from our Blog</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 single-blog">
                <img className="img-fluid" src="img/b1.png" alt="no-image" />
                <ul className="tags">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life style</a>
                  </li>
                </ul>
                <a href="#">
                  <h4>Portable latest Fashion for young women</h4>
                </a>
                <p className="post-date">31st January, 2018</p>
              </div>
              <div className="col-lg-6 single-blog">
                <img className="img-fluid" src="img/b2.png" alt="no-image" />
                <ul className="tags">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life style</a>
                  </li>
                </ul>
                <a href="#">
                  <h4>Portable latest Fashion for young women</h4>
                </a>
                <p className="post-date">31st January, 2018</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainPage;
