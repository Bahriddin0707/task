import { useState } from "react";

function Orders() {
  return (
    <div className="orders">
      <div className="container">
        <h2>Заказать приложение</h2>
        <div className="orders__content">
          <div className="order-prices">
            <h3>Бюджет проекта:</h3>
            <div className="order-btns">
              <button>20 000 — 50 000 руб.</button>
              <button>50 000 — 100 000 руб.</button>
              <button>100 000 — 500 000 руб.</button>
              <button className="active">500 000 — 1 000 000 руб.</button>
              <button>1 000 000 руб. — 2 000 000 руб.</button>
              <button>2 000 000 руб. — 3 000 000 руб.</button>
            </div>

            <form>
              <select>
                <option value="20 000 — 50 000 руб.">
                  20 000 — 50 000 руб.
                </option>
                <option value="20 000 — 50 000 руб.">
                  50 000 — 100 000 руб.
                </option>
                <option value="20 000 — 50 000 руб.">
                  100 000 — 500 000 руб.
                </option>
                <option value="20 000 — 50 000 руб.">
                  500 000 — 1000 000 руб.
                </option>
                <option value="20 000 — 50 000 руб.">
                  1000 000 — 2000 000 руб.
                </option>
                <option value="20 000 — 50 000 руб.">
                  2000 000 — 3000 000 руб.
                </option>
              </select>
            </form>
          </div>

          <div className="contact">
            <h3>Контакты:</h3>

            <form>
              <input type="text" placeholder="Александр" />
              <input type="number" placeholder="Телефон" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Комментарий"
              ></textarea>
            </form>

            <button className="order-btn">Заказать обратный звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
