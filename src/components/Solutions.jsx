import mobilePhone from "../assets/images/iPhoneX.jpg";
import whiteSphere from "../assets/images/large-white-sphere.svg";

function Solutions() {
  return (
    <div className="solutions">
      <div className="solutions__wrapper">
        <div className="container">
          <h2>Какие задачи поможет решить запуск мобильного приложения</h2>
          <div className="solutions_content">
            <div className="solution-1">
              <div>
                <div className="solution-order">
                  <span>1</span>
                  <h3>Повысить лояльность</h3>
                </div>

                <p>
                  Мобильное приложение работает намного быстрее сайта и может
                  выполнять многие функции даже без интернета. Также здесь не
                  нужно каждый раз авторизовываться, чтобы оформить заказ или
                  отследить его статус. Все это создает положительный
                  пользовательский опыт.
                </p>
              </div>

              <div>
                <div className="solution-order">
                  <span>2</span>
                  <h3>Автоматизировать продажи</h3>
                </div>
                <p>
                  С приложением легче провести пользователя по каждому этапу
                  воронки продаж. С помощью автоматизации внутри интерфейса
                  можно показывать ценность продукта, рассказывать о новых
                  функциях, делать допродажи и напоминать о себе с помощью
                  пуш-уведомлений.
                </p>
              </div>
            </div>

            <div className="solution-2">
              <img src={mobilePhone} alt="/" />
            </div>

            <div className="solution-3">
              <div>
                <div className="solution-order">
                  <span>3</span>
                  <h3>Сократить издержки</h3>
                </div>

                <p>
                  Мобильный сервис помогает сэкономить на рекламном бюджете и
                  дополнительных сотрудниках. Например, многие маркетинговые
                  акции можно проводить в самом приложении и адаптировать
                  рекламу под целевых пользователей, а часть работы службы
                  поддержки делегировать автоматическим чат-ботам.
                </p>
              </div>

              <div>
                <div className="solution-order">
                  <span>4</span>
                  <h3>Увеличить прибыль</h3>
                </div>
                <p>
                  Повышение уровня клиентского сервиса, экономия на закупке
                  рекламы на других площадках и автоматизации процессов
                  положительно скажется и на итоговой выручке. Вложения в
                  разработку приложения быстро окупятся, если интерфейс хорошо
                  справляется со своими задачами.
                </p>
              </div>
            </div>

            <div className="solutions-sphere">
              <img src={whiteSphere} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
