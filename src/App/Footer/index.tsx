import * as React from 'react';
import './style.css';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>39 13 administrative center Dĩ An, Bình Dương 820000</p>
                <p className="footer-text">
                  Copyright &copy;
                  2018 All rights reserved | This template is made with
                  <i className="fa fa-heart-o" aria-hidden="true" /> by
                  <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    action=""
                    method="get"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email"
                      required={true}
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    </button>
                    <div style={{ position: 'absolute', left: -5000 }}>
                      <input name="b_36c4fd991d266f23781ded980_aefe40901a" value="" type="text" />
                    </div>

                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
