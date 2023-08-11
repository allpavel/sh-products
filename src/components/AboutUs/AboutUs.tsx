import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { PiHandshakeBold, PiCertificate } from "react-icons/pi";
import aboutUs1 from "../../../public/images/aboutus-1.avif";
import aboutUs2 from "../../../public/images/aboutus-2.avif";
import aboutUs3 from "../../../public/images/aboutus-3.avif";
import aboutUs4 from "../../../public/images/aboutus-4.avif";
import aboutUs5 from "../../../public/images/aboutus-5.avif";
import aboutUs6 from "../../../public/images/aboutus-6.avif";
import aboutUs7 from "../../../public/images/aboutus-7.avif";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>О нас</h2>
        <div className={styles.desc}>
          <div>
            <p className={styles.text}>
              ООО “АГРО-ТЕХ” было создано с целью удовлетворения потребностей отечественных сельхозпроизводителей в
              надежной и практичной технике. В настоящее время это успешно развивающаяся компания с внушительным опытом
              работы в производственной и строительной сфере.
            </p>
            <p className={styles.text}>
              ООО “АГРО-ТЕХ” уже на протяжении длительного времени является одной из наиболее заметных компаний
              изготовителей на рынке сельскохозяйственной техники. Основная сфера нашей деятельности это – ангары и
              сельхозтехника от производителя.
            </p>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefits}>
                <div className={styles.iconWrapper}>
                  <GiAchievement className={styles.icon} />
                </div>
                <div>
                  <p className={styles.benefitsTitle}>Качество и приемлемая цена</p>
                  <p>
                    Предприятие создает столь же качественные, недорогие и адаптированные к российским реалиям
                    отечественные аналоги сельскохозяйственной техники.
                  </p>
                </div>
              </div>
              <div className={styles.benefits}>
                <div className={styles.iconWrapper}>
                  <PiCertificate className={styles.icon} />
                </div>
                <div>
                  <p className={styles.benefitsTitle}>Сертификаты</p>
                  <p>
                    Все предлагаемые машины сертифицированы, во многих из них используются собственные запатентованные
                    разработки.
                  </p>
                </div>
              </div>
              <div className={styles.benefits}>
                <div className={styles.iconWrapper}>
                  <PiHandshakeBold className={styles.icon} />
                </div>
                <div>
                  <p className={styles.benefitsTitle}>Партнерство</p>
                  <p>
                    Компания имеет десятки фирм-партнеров как на территории России, так и в странах ближнего и дальнего
                    зарубежья.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={aboutUs1} alt="Директор компании" className={styles.image} />
            </div>
            <div className={styles.smallImages}>
              <Image src={aboutUs2} alt="Ангран на поле" width={247} height={250} />
              <Image src={aboutUs3} alt="Строящаяся крыша ангара" width={247} height={250} />
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <Image src={aboutUs4} alt="Жёлтые ангары" className={styles.image} />
          <Image src={aboutUs5} alt="Ангар с автомобилями внутри" className={styles.image} />
          <Image src={aboutUs6} alt="Ангар на фоне белого грузовика" className={styles.image} />
          <Image src={aboutUs7} alt="Коровник с коровами" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
