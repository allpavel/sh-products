import Image from "next/image";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdOutlineConstruction } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { Button } from "@/components/Button/Button";
import { Gallery } from "@/components/ImageGallery/ImageGallery";
import { getData } from "@/utils/getData";
import styles from "./TechCard.module.css";

interface Card {
  data: {
    attributes: {
      id: number;
      shortDescription: string;
      description: string;
      cover: {
        data: {
          attributes: {
            alternativeText: string;
            url: string;
          };
        };
      };
      price: string;
      title: string;
      category: string;
      subCategory: string;
      slug: string;
      imageGallery: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        }[];
      };
    };
  };
}

export default async function TechCardPage({ params }: { params: { slug: string } }) {
  const { data }: Card = await getData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technics/${params.slug}`);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.breadcrumbs}>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
          <span className={styles.divider}>/</span>
          <Link href="/technics" className={styles.link}>
            {data.attributes.category}
          </Link>
          <span className={styles.divider}>/</span>
          <span className={styles.currentPage}>{data.attributes.title}</span>
        </nav>
        <h1 className={styles.title}>{data.attributes.title}</h1>
        <article className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.cover.data.attributes.url}`}
              alt={data.attributes.cover.data.attributes.alternativeText}
              width={600}
              height={400}
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.desc}>
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
            <p className={styles.price}>{data.attributes.price}</p>
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
          </div>
        </article>
        <article className={styles.md}>
          <ReactMarkdown>{data.attributes.description}</ReactMarkdown>
        </article>
        <Gallery />
      </div>
    </section>
  );
}
