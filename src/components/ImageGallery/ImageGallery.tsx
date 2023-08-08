"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ImageCards } from "../ImageCards/ImageCards";
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
      {images && <ImageCards images={images} galleryId="test-gallery" />}
    </section>
  );
};
