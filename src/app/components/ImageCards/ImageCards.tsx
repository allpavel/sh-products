"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import styles from "./ImageCards.module.css";

interface GalleryProps {
  images: {
    id: number;
    attributes: {
      alternativeText: string;
      url: string;
    };
  }[];
  galleryId: string;
}

export const ImageCards = ({ images, galleryId }: GalleryProps) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryId,
      children: "a",
      zoom: false,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryId]);

  return (
    <div className={`${styles.images} pswp-gallery`} id={galleryId}>
      {images.map((image) => (
        <div className={styles.card} key={image.id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
            alt={image.attributes.alternativeText}
            width={300}
            height={300}
            className={`${styles.image}`}
            key={image.id}
          />
          <Link
            href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
            className={styles.link}
            data-pswp-width={0}
            data-pswp-height={0}
          />
        </div>
      ))}
    </div>
  );
};
