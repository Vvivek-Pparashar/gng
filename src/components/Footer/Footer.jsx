import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <h2>
          GnG<sup>™</sup>
        </h2>
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick links</h4>
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Blogs</a>
          </p>
          <p>
            <a href="#">Contact</a>
          </p>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <p>
            <a href="#">App development</a>
          </p>
          <p>
            <a href="#">Web development</a>
          </p>
          <p>
            <a href="#">DevOps</a>
          </p>
          <p>
            <a href="#">Web designing</a>
          </p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p>
            <a href="#">
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          <p>
            <a href="https://github.com/farazc60">
              <i className="fab fa-github"></i> Github
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
        </div>
        <div className="footer-details">
          <h4 className="footer-address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 className="mobile">Mobile</h4>
          <p>
            <a href="#">+91-95350320310</a>
          </p>
          <h4>Email</h4>
          <p>
            <a href="#">vivekparashartkd@gmail.com</a>
          </p>
        </div>
      </div>
      <footer>
        <hr style={{ background: "black", color: "black" }} />© 2022
        codewithvivek.
      </footer>
    </div>
  );
};

export default Footer;
