import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function Contact(){
    return(
        <>
        <Helmet>
          <title>Contact - Giftoos shop</title>
          <meta name='description' content='Contact us at giftoos'/>
          <link rel='canonical' href='/contact'/>
        </Helmet>
          <div className="hero_area">
    {/* <!-- header section strats --> */}

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
    </div>

  {/* <!-- contact section --> */}

  <section className="contact_section layout_padding">
    <div className="container px-0">
      <div className="heading_container ">
        <h2 className="">
          Contact Us
        </h2>
      </div>
    </div>
    <div className="container container-bg">
      <div className="row">
        <div className="col-lg-7 col-md-6 px-0">
          <div className="map_container">
            <div className="map-responsive">
              {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style="border:0; width: 100%; height:100%" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 px-0">
          <form action="#">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end contact section --> */}

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

  {/* <!-- end info section -->   */}
        </>
    )
}