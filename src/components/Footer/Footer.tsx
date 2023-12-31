import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/app/fonts";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Button } from "../Button/Button";
import logo from "../../../public/images/logo2.png";
import angars from "../../../public/images/angars2.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.container} ${montserrat.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.contactsWrapper}>
          <Link href="/">
            <Image src={logo} alt="Логотип Агро-Тех" width={100} height={64} className={styles.icon} />
            <Image src={angars} alt="Ангары и сельхозтехника от производителя" width={136} height={54} />
          </Link>
          <div className={styles.phoneContainer}>
            <a href="tel:8-911-124-25-67" className={styles.phone}>
              8-911-124-25-67
            </a>
            <a href="tel:8-921-987-65-43" className={styles.phone}>
              8-921-987-65-43
            </a>
          </div>
          <div>
            <div className={styles.contacts}>
              <RiWhatsappFill className={`${styles.contactsIcon} ${styles.whatsAppIcon}`} />
              <p className={styles.mailLink}>WhatsApp</p>
            </div>
            <div className={styles.contacts}>
              <MdEmail className={`${styles.contactsIcon} ${styles.mailIcon}`} />
              <a href="mailto:mail@agro-teh.su" className={styles.mailLink}>
                mail@agro-teh.su
              </a>
            </div>
          </div>
          <p className={styles.address}>347939, Россия, Ростовская область, Таганрог, ул. Пархоменко, 19</p>
        </div>
        <nav className={styles.navLinks}>
          <Link href="angars" className={styles.link}>
            Ангары
          </Link>
          <Link href="technics" className={styles.link}>
            Сельхозтехника
          </Link>
          <Link href="spares" className={styles.link}>
            Запчасти
          </Link>
          <Link href="services" className={styles.link}>
            Услуги
          </Link>
          <Link href="about" className={styles.link}>
            О компании
          </Link>
          <Link href="contacts" className={styles.link}>
            Контакты
          </Link>
        </nav>
        <div className={styles.ourWorksContainer}>
          <p className={styles.ourWorksTitle}>Наши работы:</p>
          <ul className={styles.ourWorks}>
            <li>
              <Link href="/angars/angary-beskarkasnye" className={styles.link}>
                Ангары бескаркасные
              </Link>
            </li>
            <li>
              <Link href="/angars/tentovye-angary" className={styles.link}>
                Тентовые ангары
              </Link>
            </li>
            <li>
              <Link href="/angars/karkasnye-angary/toka-karkasanye-navesy" className={styles.link}>
                Навесы и тока
              </Link>
            </li>
            <li>
              <Link href="/angars/angary-beskarkasnye/aviaczionnye-angary" className={styles.link}>
                Авиационные ангары
              </Link>
            </li>
            <li>
              <Link href="/angars/karkasnye-angary" className={styles.link}>
                Каркасные ангары
              </Link>
            </li>
            <li>
              <Link href="/technics/borony" className={styles.link}>
                Бороны
              </Link>
            </li>
            <li>
              <Link href="/technics/razbrasyvateli-udobrenij" className={styles.link}>
                Разбрасыватели удобрений
              </Link>
            </li>
            <li>
              <Link href="/technics/opryskivateli" className={styles.link}>
                Опрыскиватели
              </Link>
            </li>
            <li>
              <Link href="/technics/prochaya-selhoztehnika" className={styles.link}>
                Прочая сельхозтехника
              </Link>
            </li>
            <li>
              <Link href="/spares" className={styles.link}>
                Запчасти и комплектующие
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.link}>
                Услуги
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.formTitle}>
            <p>Остались вопросы?</p>
            <p>Оставьте телефон-</p>
            <p>перезвоним:</p>
          </div>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="tel">
              Ваш телефон <span className={styles.asterisk}>*</span>
            </label>
            <input
              type="tel"
              id="tel"
              name="phone"
              placeholder="+7 ( ___ ) ___ - __ - __ "
              className={styles.phoneInput}
            />
            <div className={styles.buttonGroup}>
              <Button text="Отправить" type="red" icon="telegram" size="large" />
              <Button text="8-912-345-67-89" type="red" size="large" />
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
