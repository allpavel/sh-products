import { ImageCards } from "../ImageCards/ImageCards";
import styles from "./ImageGallery.module.css";

interface GalleryProps {
  data: {
    id: number;
    attributes: {
      alternativeText: string;
      url: string;
    };
  }[];
}

export const ImageGallery = ({ data }: GalleryProps) => {
  return (
    <section>
      <h2 className={styles.title}>Галерея</h2>
      {data && <ImageCards images={data} galleryId="imageGallery" />}
    </section>
  );
};
