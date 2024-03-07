import { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="nav-menu">
          <div>
            <img src={logo} alt="navbar-logo" />
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
            <div className="address">
              <p>8 (499) 348-82-16</p>
              <span>hello@softerio.ru</span>
            </div>
            <div className="socials">
              <div>
                <FaWhatsapp size={26} />
              </div>
              <div>
                <LiaTelegramPlane size={26} />
              </div>
            </div>
          </div>

          <div className="open-menu" onClick={() => setIsOpenMenu(true)}>
            <IoMenuOutline size={30} />
          </div>
        </nav>

        {isOpenMenu && (
          <div className="mobile-menu">
            <div className="mobile-logo">
              <img src={logo} alt="/" />
              <div onClick={() => setIsOpenMenu(false)}>
                <IoIosClose size={35} />
              </div>
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
              <div className="address">
                <div>
                  <FaPhoneAlt />
                  <p>8 (499) 348-82-16</p>
                </div>

                <div>
                  <MdOutlineEmail />
                  <span>hello@softerio.ru</span>
                </div>
              </div>
              <div className="socials">
                <div>
                  <FaWhatsapp size={26} />
                </div>
                <div>
                  <LiaTelegramPlane size={26} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
