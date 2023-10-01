import React from 'react'
import agencyImg from '../assets/images/agency-img.jpg'

import favicon from '../assets/images/favicon.png'
import free from '../assets/images/free.svg'
import gifts from '../assets/images/gifts.png'
import highquality from '../assets/images/high-quality.svg'
import line from '../assets/images/line.png'
import logo from '../assets/images/logo.png'
import p1 from '../assets/images/p1.png'
import  p2 from '../assets/images/p2.png'
import  p3 from '../assets/images/p3.png'
import  p4 from '../assets/images/p4.png'
import  p5 from '../assets/images/p5.png'
import  p6 from '../assets/images/p6.png'
import  p7 from '../assets/images/p7.png'
import  p8 from '../assets/images/p8.png'
import  purse from '../assets/images/purse.png'
import  savingImg from '../assets/images/saving-img.png'
import  sliderImg from '../assets/images/slider-img.png'
// import  trucks from '../assets/images/trucks.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Shop(){
    return(
        <>
        <Helmet>
          <title>Shop - Giftoos shop</title>
          <meta name='description' content='get our latest products at best price'/>
          <link rel='canonical' href='/shop'/>
        </Helmet>
            
  {/* <!-- end hero area --> */}

  {/* <!-- shop section --> */}


  <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className='navbar-brand' to='/'>
          <span>
            Giftos
          </span>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/shop'>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whyUs">
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/testimonials'>
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <div className="user_option">
            <a href="">
              <i className="fa fa-user" aria-hidden="true"/>
              <span>
                Login
              </span>
            </a>
            <a href="">
              <i className="fa fa-shopping-bag" aria-hidden="true"/>
            </a>
            <form className="form-inline ">
              <button className="btn nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"/>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>




  <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p1} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Ring
                </h6>
                <h6>
                  Price
                  <span>
                    $200
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p2} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Watch
                </h6>
                <h6>
                  Price
                  <span>
                    $300
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p3} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Teddy Bear
                </h6>
                <h6>
                  Price
                  <span>
                    $110
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p4} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Flower Bouquet
                </h6>
                <h6>
                  Price
                  <span>
                    $45
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p5} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Teddy Bear
                </h6>
                <h6>
                  Price
                  <span>
                    $95
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p6} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Flower Bouquet
                </h6>
                <h6>
                  Price
                  <span>
                    $70
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p7} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Watch
                </h6>
                <h6>
                  Price
                  <span>
                    $400
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src={p8} alt="website product"/>
              </div>
              <div className="detail-box">
                <h6>
                  Ring
                </h6>
                <h6>
                  Price
                  <span>
                    $450
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View All Products
        </a>
      </div>
    </div>
  </section>

  {/* <!-- end shop section --> */}

  {/* <!-- info section --> */}

  <section className="info_section  layout_padding2-top">
    <div className="social_container">
      <div className="social_box">
        <a href="">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_form ">
              <h5>
                Newsletter
              </h5>
              <form action="#">
                <input type="email" placeholder="Enter your email"/>
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              CONTACT US
            </h6>
            <div className="info_link-box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span> Gb road 123 london Uk </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>+01 12345678901</span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span> demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- footer section --> */}
    <footer className=" footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </footer>
    {/* <!-- footer section --> */}

  </section>

  {/* <!-- end info section --> */}
        </>
    )
}