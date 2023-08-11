"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button/Button";
import angar1 from "../../../public/images/prod1.jpg";
import angar2 from "../../../public/images/prod2.jpg";
import angar3 from "../../../public/images/prod3.jpg";
import angar4 from "../../../public/images/prod4.jpg";
import angar5 from "../../../public/images/prod5.jpg";
import styles from "../BuildSection/BuildSection.module.css";

export const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("boroni");

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.title} ${styles.upperCase}`}>Производим:</h2>
        <div className={styles.buttonGroup}>
          <Button
            text="Бороны"
            type="outlineGreen"
            size="medium"
            onClick={() => setActiveTab("boroni")}
            active={activeTab === "boroni"}
          />
          <Button
            text="Опрыскиватели"
            type="outlineGreen"
            size="medium"
            onClick={() => setActiveTab("sprayers")}
            active={activeTab === "sprayers"}
          />
          <Button
            text="Разбрасыватели удобрений"
            type="outlineGreen"
            size="medium"
            onClick={() => setActiveTab("scatters")}
            active={activeTab === "scatters"}
          />
          <Button
            text="Прочая сельхозтехника"
            type="outlineGreen"
            size="medium"
            onClick={() => setActiveTab("others")}
            active={activeTab === "others"}
          />
          <Button
            text="Запчасти и комплектующие"
            type="outlineGreen"
            size="medium"
            onClick={() => setActiveTab("accessories")}
            active={activeTab === "accessories"}
          />
        </div>
        <article
          className={`${styles.content} ${styles.productContent} ${activeTab === "boroni" ? "" : styles.dBlock}`}
        >
          <div className={styles.image}>
            <Image src={angar1} width={598} height={400} alt="Зеленые бороны на поле" className={styles.image} />
          </div>
          <div className={styles.desc}>
            <div>
              <h3 className={styles.title}>Бороны</h3>
            </div>
            <p className={styles.price}>Цена рассчитывается индивидуально по согласованному техническому заданию</p>
            <form className={styles.form}>
              <p className={styles.callToAction}>Получить расчёт:</p>
              <label htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
            <div>
              <p className={styles.listTitle}>Применение:</p>
              <ul className={styles.list}>
                <li>Обработки почвы до стадии появления всходов и после</li>
                <li>Работ по сохранению нормальной влажности почвы</li>
                <li>Для выравнивания верхнего почвенного слоя</li>
                <li>Для борьбы с сорняками на их ранней (ниточковой) фазе</li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`${styles.content} ${styles.productContent} ${activeTab === "sprayers" ? "" : styles.dBlock}`}
        >
          <div className={styles.image}>
            <Image
              src={angar2}
              width={600}
              height={400}
              alt="Грузовик с серой кабиной и опрыскивателем"
              className={styles.image}
            />
          </div>
          <div className={styles.desc}>
            <div>
              <h3 className={styles.title}>Опрыскиватели</h3>
            </div>
            <p className={styles.price}>Цена рассчитывается индивидуально по согласованному техническому заданию</p>
            <form className={styles.form}>
              <p className={styles.callToAction}>Получить расчёт:</p>
              <label htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
            <div>
              <p className={styles.listTitle}>Надежность и долговечность:</p>
              <ul className={styles.list}>
                <li>В основе машины – прочная и надежная сварная рамная конструкция</li>
                <li>На бункер и раму нанесено химически стойкое полимерное покрытие</li>
                <li>Все крепежные элементы, отбойный короб, рабочие тарелки и лопатки сделаны из нержавеющей стали</li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`${styles.content} ${styles.productContent} ${activeTab === "scatters" ? "" : styles.dBlock}`}
        >
          <div className={styles.image}>
            <Image src={angar3} width={600} height={400} alt="Разбрасыватель синего цвета" className={styles.image} />
          </div>
          <div className={styles.desc}>
            <div>
              <h3 className={styles.title}>Разбрасыватели удобрений</h3>
            </div>
            <p className={styles.price}>Цена рассчитывается индивидуально по согласованному техническому заданию</p>
            <form className={styles.form}>
              <p className={styles.callToAction}>Получить расчёт:</p>
              <label htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
            <div>
              <p className={styles.listTitle}>Функциональность и удобство эксплуатации:</p>
              <ul className={styles.list}>
                <li>Удобная подача разбрасываемого материала и низкая высота загрузки</li>
                <li>Доступная и простая система для регулирования расхода гранул</li>
                <li>
                  Ещё одной важной функцией МВУ является посев семян трав и зерновых. Для этого такое оборудование и
                  используется на мелкоконтурных полях
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`${styles.content} ${styles.productContent} ${activeTab === "others" ? "" : styles.dBlock}`}
        >
          <div className={styles.image}>
            <Image src={angar4} alt="Синий трактор на зелёном поле" width={600} height={400} className={styles.image} />
          </div>
          <div className={styles.desc}>
            <div>
              <h3 className={styles.title}>Прочая сельхозтехника</h3>
            </div>
            <p className={styles.price}>Цена рассчитывается индивидуально по согласованному техническому заданию</p>
            <form className={styles.form}>
              <p className={styles.callToAction}>Получить расчёт:</p>
              <label htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
            <div>
              <p className={styles.listTitle}>Продукция компании эргономична и современна:</p>
              <ul className={styles.list}>
                <li>Процесс подготовки её к работе занимает минимум времени и не требует специальных навыков</li>
                <li>
                  Вся продукция компании выверена отечественными ГОСТами, отвечает мировым стандартам качества и
                  действующим нормативам ГНУ ВИЗР
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`${styles.content} ${styles.productContent} ${activeTab === "accessories" ? "" : styles.dBlock}`}
        >
          <div className={styles.image}>
            <Image
              src={angar5}
              alt="Черная запчасть для сельхозтехники"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.desc}>
            <div>
              <h3 className={styles.title}>Запчасти и комплектующие</h3>
            </div>
            <p className={styles.price}>Цена рассчитывается индивидуально по согласованному техническому заданию</p>
            <form className={styles.form}>
              <p className={styles.callToAction}>Получить расчёт:</p>
              <label htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
            <div>
              <p className={styles.listTitle}>У нас Вы можете найти запчасти и комплектующие на сельхозтехнику:</p>
              <ul className={styles.list}>
                <li>Разбрасыватели удобрений</li>
                <li>Танговые (полевые) и вентиляторные (садовые) опрыскиватели</li>
                <li>Бороны кольчатые и пружинные и многое другое</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
