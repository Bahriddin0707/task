import mobileOne from "../assets/images/mobile-d-1-new.jpg";
import mobileTwo from "../assets/images/mobile-d-2-new.jpg";
import mobileThree from "../assets/images/mobile-d-3-new.jpg";
import blueSphere from "../assets/images/blue-sphere.svg";
import whiteSphere from "../assets/images//white-sphere.png";

function Mobile() {
  return (
    <div className="mobile-development">
      <div className="mobile-content container">
        <div className="mobile-title">
          <div className="blue-sphere">
            <img src={blueSphere} alt="/" />
          </div>

          <div>
            <h2>Стоимость разработки мобильных приложений</h2>
            <p>
              Мы собрали стандартные элементы приложений в пакеты, для
              примерного понимания стоимости разработки. Чтобы заказать
              мобильное приложение свяжитесь с нами, мы вас проконсультируем,
              проведем аудит ценовых предложений других студий. Ниже цены на
              типовые приложения.
            </p>
          </div>
        </div>

        <div className="mobile-boxes">
          <div>
            <img src={mobileOne} alt="/" />
          </div>
          <div>
            <img src={mobileTwo} alt="/" />
          </div>
          <div>
            <img src={mobileThree} alt="/" />
          </div>
        </div>

        <div className="white-sphere">
          <img src={whiteSphere} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
