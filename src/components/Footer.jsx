import logo from "../assets/images/logo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav>
          <div>
            <img src={logo} alt="/" />
          </div>

          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">О нас</a>
            </li>
            <li>
              <a href="/">Наши услуги</a>
            </li>
            <li>
              <a href="/">Этапы работы</a>
            </li>
            <li>
              <a href="/">Стоимость</a>
            </li>
            <li>
              <a href="/">Ещё</a>
            </li>
          </ul>

          <div className="contacts">
            <div className="socials">
              <div>
                <FaWhatsapp size={26} />
              </div>
              <div>
                <LiaTelegramPlane size={26} />
              </div>
            </div>
            <div className="address">
              <p>8 (499) 348-82-16</p>
              <span>hello@softerio.ru</span>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
