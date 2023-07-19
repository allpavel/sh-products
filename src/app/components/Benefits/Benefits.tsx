import styles from "./Benefits.module.css";
import { BsShieldCheck, BsWalletFill } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineBuild } from "react-icons/md";

export const Benefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <div>
              <BsShieldCheck className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>Гарантия</p>
              <p>На каждый наш объект мы даем гарантию на несущие конструкции</p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <BsWalletFill className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>Без скрытых платежей</p>
              <p>В отличие от конкурентов, мы гарантируем, что цена в договоре неизменна при любых обстоятельствах</p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <FaUserCheck className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>Опытные бригады</p>
              <p>Мы не набираем &quot;непонятные&quot; бригады из интернета. Наши люди более 5 лет работают с нами</p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <MdOutlineEngineering className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>Своя база и техника</p>
              <p>
                Мы обеспечиваем низкие цены за счёт того что у нас своя производственная база со всем необходимым
                оборудованием и спец.техникой
              </p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <BiCog className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>СРО</p>
              <p>Мы саморегулируемая организация и у нас есть соответствующий допуск. Гарантия надёжности</p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div>
              <MdOutlineBuild className={styles.icon} />
            </div>
            <div>
              <p className={styles.textTitle}>Под ключ</p>
              <p>
                Выполняем полный комплекс работ - от проектирования до сдачи в эксплуатацию, помогаем с
                благоустройством, оформляем документы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
