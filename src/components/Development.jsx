import developmentOne from "../assets/images/development-1.jpg";
import developmentTwo from "../assets/images/development-2.jpg";
import developmentThree from "../assets/images/development-3.jpg";
import developmentFour from "../assets/images/development-4.jpg";
import developmentFive from "../assets/images/development-5.jpg";
import developmentSix from "../assets/images/development-6.jpg";
import developmentSeven from "../assets/images/development-7.jpg";

function Development() {
  return (
    <div className="development">
      <div className="wrapper">
        <h2 className="development__title">Этапы разработки</h2>

        <div className="development__content container">
          <div className="development-box">
            <img src={developmentOne} alt="/" />

            <div className="development__box-content">
              <div>
                <span>1</span>
                <h3>Сбор требований</h3>
              </div>

              <p>
                Детальное изучение требований, ресурсов и исходной информации по
                проекту и формирование технического задания на разработку ПО.
              </p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentTwo} alt="/" />
            <div className="development__box-content">
              <div>
                <span>2</span>
                <h3>UI/UX Дизайн</h3>
              </div>

              <p>
                Разработка современного функционального и удобного дизайна с
                применением новейших инструментов.
              </p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentThree} alt="/" />
            <div className="development__box-content">
              <div>
                <span>3</span>
                <h3>Прототип (MVP)</h3>
              </div>

              <p>
                В результате проектирования формируется прототип и отправляется
                для разработки продукта
              </p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentFour} alt="/" />
            <div className="development__box-content">
              <div>
                <span>4</span>
                <h3>Разработка</h3>
              </div>

              <p>
                Процесс разработки системы интеллектуального учета, мобильного
                приложения или веб-сайта в режиме максимальной прозрачности.
              </p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentFive} alt="/" />
            <div className="development__box-content">
              <div>
                <span>5</span>
                <h3>Тестирование</h3>
              </div>

              <p>
                В ходе тестовых запусков обеспечиваем полную отказоустойчивость
                продукта.
              </p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentSix} alt="/" />
            <div className="development__box-content">
              <div>
                <span>6</span>
                <h3>Развертывание</h3>
              </div>

              <p>Запуск готового продукта в работу (ИСУ, сайта, приложения).</p>
            </div>
          </div>

          <div className="development-box">
            <img src={developmentSeven} alt="/" />
            <div className="development__box-content">
              <div>
                <span>6</span>
                <h3>Поддержка и обслуживание</h3>
              </div>

              <p>
                Обеспечиваем полную техническую поддержку и сопровождение по
                всем вопросам, возникающим после развертывания.
              </p>
            </div>
          </div>

          <div className="application-submission">
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
