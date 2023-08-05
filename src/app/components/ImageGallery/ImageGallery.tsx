"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

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
      slug: string;
      imageGallery: {
        data: {
          id: number;
          attributes: {
            alternativeText: string;
            url: string;
          };
        }[];
      };
    };
  };
}

interface GalleryProps {
  id: number;
  attributes: {
    alternativeText: string;
    url: string;
  };
}

export const Gallery = () => {
  const [images, setImages] = useState<GalleryProps[]>();
  const params = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars/${params.slug}`);
      const data: Card = await response.json();
      setImages(data.data.attributes.imageGallery.data);
    };
    loadData();
  }, [params.slug]);

  return (
    <section>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.images}>
        {images &&
          images.map((image) => (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
              alt={image.attributes.alternativeText}
              width={300}
              height={300}
              key={image.id}
              className={`${styles.image}`}
            />
          ))}
      </div>
    </section>
  );
};
