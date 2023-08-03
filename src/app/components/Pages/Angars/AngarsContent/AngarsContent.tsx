import styles from "./AngarsContent.module.css";

export const AngarsContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p>
          ООО «АГРО-ТЕХ» имеет большой опыт строительства ангаров и других быстровозводимых металлических сооружений под
          ключ. Ежегодно компания строит и сдает в эксплуатацию десятки тысяч квадратных метров бескаркасных арочных
          конструкций.
        </p>
        <p className={styles.bold}>Преимущества строительства наших ангаров:</p>
        <ul className={styles.list}>
          <li>Низкая стоимость ангара</li>
          <li>Минимальные затраты на логистику</li>
          <li>Быстрые сроки строительства ангара до 40 дней</li>
          <li>Единый тип исходного материала – рулон тонколистовой оцинкованной стали 0,7-1,4 мм</li>
          <li>Универсальность эксплуатации данного вида сооружения</li>
          <li>Возможность быстрого и эффективного утепления</li>
          <li>Герметичность фальцевых соединений</li>
        </ul>
        <p>
          ООО “Агро-Тех” предлагает как каркасно-тентовые ангары, так и бескаркасные (арочного типа), в которых роль
          несущей конструкции выполняет сам купол, сооруженный из гофрированного металлического профиля.
        </p>
        <p>
          В данное время технология бескаркасного арочного строительства ангаров по праву считается наиболее эффективным
          способом быстрого возведения производственных и складских площадей и не теряет своей актуальности.
        </p>
        <p>
          В зависимости от целей заказчика сооружение может иметь как статус временного строения, так и капитального.
        </p>
        <p>
          Необходимо отметить и высокую сопротивляемость снеговым и ветровым нагрузкам. Металлические ангары обладают
          достаточно высокой степенью прочности. По данным специалистов они выдерживают ветровую нагрузку до 200 км/час
          и снеговую нагрузку до 240 кг/кв. м, имея полезный срок службы порядка 30 лет.
        </p>
        <p>
          Более того, при условии соблюдения элементарных правил эксплуатации крупногабаритных металлических конструкций
          этот срок превышает 50 лет. В случае необходимости специалисты ООО “Агро-Тех” предоставят подробную
          консультацию по данному вопросу. После выполнения всех работ компания выдает клиентам необходимую проектную,
          бухгалтерскую и строительную документацию по объекту.
        </p>
        <p className={styles.bold}>Этапы строительства ангаров</p>
        <ol className={styles.list}>
          <li>Заключение договора</li>
          <li>Выезд специалиста на площадку</li>
          <li>Устройство нулевого цикла</li>
          <li>Монтаж купола, торцевых стен, элементов конструкции</li>
          <li>Устройство поясов в опалубке, ростверка и заливка бетона</li>
          <li>Сдача объекта, подписание документов</li>
        </ol>
      </div>
    </section>
  );
};
