import styles from "./Contacts.module.css";

export const ContactsHeader = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Контакты ООО &quot;Агро-Тех&quot;</h1>
        <p>Всегда рады видеть вас в нашем офисе в Таганроге:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>347939, Россия, Ростовская область, Таганрог, ул. Пархоменко, 19</li>
          <li className={styles.listItem}>+7 (967) 555-60-76</li>
          <li className={styles.listItem}>mail@agro-teh.su</li>
        </ul>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A22a0c951555e152cc3cedd90bd96088089c67bd237d44ce8cb85fff94a388312&amp;source=constructor"
          width="1256"
          height="543"
          frameBorder="0"
        ></iframe>{" "}
      </div>
    </section>
  );
};
