import "./Footer.css";
import logo from "../../assets/images/chicks-logo-large.svg";
import { images, imagesSocial, navItems } from "./Footer.utils";
import useMediaCustom from "../../hooks/useMediaCustom";

const Footer = () => {
  const { isDesktop } = useMediaCustom();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="container-img">
            {images.map((image, index) => (
              <img
                key={index}
                className="image"
                src={image.src}
                alt={image.alt}
              />
            ))}
            <p className="more">and 50+ more</p>
          </div>
        </div>
        <div className="center">
          {isDesktop && (
            <div className="container_icons">
              <div>
                {imagesSocial.map((image, index) => (
                  <img
                    key={index}
                    className="image"
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <hr />
            </div>
          )}
        </div>
        <div className="container-footer">
          {!isDesktop && (
            <>
              <div className="container_icons">
                {imagesSocial.map((image, index) => (
                  <img
                    key={index}
                    className="image"
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <hr />
            </>
          )}
          <div className="footer-item footer-logo">
            <img src={logo} alt="Logo" />
            <p>support@chicksgold.com</p>
          </div>
          <div className="footer-item footer-map">
            <h4>Chicks Gold</h4>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-item footer-contact">
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>

          <div className="footer-item footer-contact">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Copyright Policy</p>
          </div>
        </div>

        <div className="footer-product">
          <p>© 2017 - 2020 Chicksgold.com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
