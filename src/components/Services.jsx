import servicesOne from "../assets/images/service-1.svg";
import servicesTwo from "../assets/images/service-2.svg";
import servicesThree from "../assets/images/service-3.svg";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="services__content">
          <div className="services__title">
            <h2>Наши услуги</h2>
            <p>
              Разработка мобильных приложений и веб-проектов для бизнеса и
              стартапов
            </p>
          </div>

          <div className="services__boxes">
            <div className="box box-1">
              <img src={servicesOne} alt="" />
              <h2>Разработка мобильных приложений</h2>
              <div className="services__buttons">
                <button>iOS</button>
                <button>Android</button>
              </div>
            </div>

            <div className="box box-2">
              <div>
                <img src={servicesTwo} alt="" />
                <h2>Web разработка</h2>
              </div>

              <p>
                Разрабатываем сайты персонально под ваш бизнес. Анализируем
                рынок и целевую аудиторию в соответствии с задачами, которые вы
                хотите решить с помощью веб-сайта. Создаём web-сервисы для
                любого направления бизнеса: продажи, коммуникации, управление,
                серверную часть и API, гибкие административные инструменты для
                управления приложениями и сбора статистики. Вы получаете
                продукт, привлекательный для пользователей и функциональный для
                вас.
              </p>
              <div className="services__buttons">
                <button>Frontend</button>
                <button>Backend</button>
              </div>
            </div>

            <div className="box box-3">
              <img src={servicesThree} alt="" />
              <h2>Проектирование мобильного приложения</h2>
              <div className="services__buttons">
                <button>Дизайн</button>
                <button>ТЗ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
