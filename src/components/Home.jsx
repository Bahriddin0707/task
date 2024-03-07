import home from "../assets/images/app.svg";
import homeIconTop from "../assets/images/home-icon-1.png";
import homeIconBottom from "../assets/images/home-icon-2.png";
import homeSphere from "../assets/images/blue-sphere.svg";
import whiteSphere from "../assets/images/white-sphere.png";

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="content container">
          <div className="home__text">
            <h2>Разработка мобильных приложений и сервисов</h2>
            <div>
              <img src={homeIconTop} alt="" />
              <p>Знаем, как решить вашу задачу оптимальным способом</p>
            </div>

            <div>
              <img src={homeIconBottom} alt="" />
              <p>Знаем, как решить вашу задачу оптимальным способом</p>
            </div>

            <div className="home-btns">
              <button className="order-btn">Заказать приложение</button>
              <button className="consultation-btn">Онлайн-консультация</button>
            </div>
          </div>

          <div className="home__img">
            <img src={home} alt="" />
            <div className="sphere-1">
              <img src={homeSphere} alt="homeSphere" />
            </div>
            <div className="sphere-2">
              <img src={homeSphere} alt="homeSphere" />
            </div>
          </div>

          <div className="white__sphere">
            <img src={whiteSphere} alt="homeSphere" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
