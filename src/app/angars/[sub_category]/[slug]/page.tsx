import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdOutlineConstruction } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { Button } from "@/components/Button/Button";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { getData } from "@/utils/getData";
import { CardPage } from "@/types/types";
import styles from "./AngarsCardPage.module.css";

export async function generateStaticParams() {
  const response: CardPage = await getData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*`);
  return response.data.map((item) => ({
    slug: item.attributes.slug,
    sub_category: item.attributes.sub_category.data.attributes.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const {
    data: [data],
  }: CardPage = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars/?filters[slug][$eq]=${params.slug}&populate=*`
  );

  return {
    title: data.attributes.title,
    description: data.attributes.metaDescription,
  };
}

export default async function AngarsCardPage({ params }: { params: { slug: string } }) {
  const {
    data: [data],
  }: CardPage = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars/?filters[slug][$eq]=${params.slug}&populate=*`
  );

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Breadcrumbs card={data} />
        <h1 className={styles.title}>{data.attributes.title}</h1>
        <article className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.cover.data.attributes.url}`}
              alt={data.attributes.cover.data.attributes.alternativeText}
              width={600}
              height={400}
              priority
              placeholder="blur"
              blurDataURL={data.attributes.base64}
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
        <ImageGallery data={data.attributes.imageGallery.data} />
      </div>
    </section>
  );
}
