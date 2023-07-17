import Image from "next/image";
import Link from "next/link";
import { MdOutlineConstruction } from "react-icons/md";
import { FaTemperatureHigh, FaFaucet } from "react-icons/fa";
import { TbAirConditioning, TbWall } from "react-icons/tb";
import { Button } from "../Button/Button";
import angar1 from "../../../../public/images/build-angar1.jpg";
import angar2 from "../../../../public/images/build-angar2.jpg";
import styles from "./BuildSection.module.css";

export const BuildSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonGroup}>
          <Button text="Ангары бескаркасные" type="outlineGreen" size="medium" />
          <Button text="Каркасные ангары" type="outlineGreen" size="medium" />
          <Button text="Ангары тентовые" type="outlineGreen" size="medium" />
          <Button text="Ремонт и реконструкция ангаров" type="outlineGreen" size="medium" />
          <Button text="Изготовление металлоконструкций" type="outlineGreen" size="medium" />
        </div>
        <div>
          <article className={styles.content}>
            <div>
              <Image src={angar1} alt="Ангар для содержания свиней" />
            </div>
            <div>
              <div>
                <h2 className={styles.title}>Ангары бескаркасные</h2>
              </div>
              <div className={styles.links}>
                <div>
                  <Link href="#" className={styles.link}>
                    Бескаркасные ангары-свинарники
                  </Link>
                  <Link href="#" className={styles.link}>
                    Бескаркасные зернохранилища
                  </Link>
                  <Link href="#" className={styles.link}>
                    Бескаркасные склады, гаражи
                  </Link>
                  <Link href="#" className={styles.link}>
                    Производственные бескаркасные сооружения
                  </Link>
                </div>
                <div>
                  <Link href="#" className={styles.link}>
                    Бескаркасные навесы
                  </Link>
                  <Link href="#" className={styles.link}>
                    Бескаркасные овощехранилища
                  </Link>
                  <Link href="#" className={styles.link}>
                    Ангары для животноводства
                  </Link>
                  <Link href="#" className={styles.link}>
                    Авиационные ангары
                  </Link>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.iconWrapper}>
                  <MdOutlineConstruction className={styles.icon} />
                  От 12 метров до 28 метров
                </div>
                <div className={styles.iconWrapper}>
                  <FaTemperatureHigh className={styles.icon} />
                  Утепление пенополиуретаном
                </div>
                <div className={styles.iconWrapper}>
                  <TbAirConditioning className={styles.icon} />
                  Монтаж системы вентиляции
                </div>
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
                <p className={styles.listTitle}>Преимущества бескаркасных ангаров:</p>
                <ul className={styles.list}>
                  <li>Быстрая окупаемость проекта</li>
                  <li>Скорость строительства (20 дней)</li>
                  <li>Герметичность и прочность конструкции</li>
                </ul>
              </div>
            </div>
          </article>
          <article className={styles.content}>
            <div>
              <Image src={angar2} alt="Каркасный ангар" />
            </div>
            <div>
              <div>
                <h2 className={styles.title}>Каркасные ангары</h2>
              </div>
              <div className={styles.links}>
                <div>
                  <Link href="#" className={styles.link}>
                    Каркасные ангары
                  </Link>
                  <Link href="#" className={styles.link}>
                    Тока, каркасные навесы
                  </Link>
                  <Link href="#" className={styles.link}>
                    Прямостенные ангары
                  </Link>
                </div>
                <div>
                  <Link href="#" className={styles.link}>
                    Автомойки и автосервисы
                  </Link>
                  <Link href="#" className={styles.link}>
                    Магазины
                  </Link>
                  <Link href="#" className={styles.link}>
                    Магазины
                  </Link>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.iconWrapper}>
                  <MdOutlineConstruction className={styles.icon} />
                  От 12 метров до 28 метров
                </div>
                <div className={styles.iconWrapper}>
                  <FaFaucet className={styles.icon} />
                  Монтаж систем водоотлива (опционально)
                </div>
                <div className={styles.iconWrapper}>
                  <TbWall className={styles.icon} />
                  Зашивка боковых стен (опционально)
                </div>
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
                <p className={styles.listTitle}>Каркасные навесы:</p>
                <ul className={styles.list}>
                  <li>Скорость строительства (от 25 дней)</li>
                  <li>Заказчик может выбрать цвет зашивки стен</li>
                  <li>Возможность утепления закрытого</li>
                  <li>Удобство загрузки и выгрузки продукции за счёт широких проездов</li>
                  <li>Возможность выбора профиля зашивки кровли и боковых стен в зависимости от назначения</li>
                </ul>
              </div>
            </div>
          </article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </div>
    </section>
  );
};
