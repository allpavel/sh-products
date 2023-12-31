export interface Card {
  id: number;
  attributes: {
    title: string;
    cover: {
      data: {
        attributes: {
          alternativeText: string;
          formats: {
            thumbnail: {
              url: string;
            };
          };
          url: string;
        };
      };
    };
    category: string;
    sub_category: {
      data: {
        id: number;
        attributes: {
          title: string;
          slug: string;
          metaDescription: string;
          heroDescription: string;
        };
      };
    };
    categoryId: {
      data: {
        attributes: {
          title: string;
          metaDescription: string;
          heroDescription: string;
        };
      };
    };
    price?: string;
    slug: string;
    base64: string;
  };
}

export interface CardsSchema {
  data: Card[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface CardPage {
  data: {
    id: number;
    attributes: {
      title: string;
      shortDescription: string;
      description: string;
      metaDescription: string;
      base64: string;
      cover: {
        data: {
          attributes: {
            alternativeText: string;
            url: string;
          };
        };
      };
      price: string;
      category: string;
      slug: string;
      sub_category: {
        data: {
          id: number;
          attributes: {
            title: string;
            slug: string;
          };
        };
      };
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
  }[];
}

export interface ServiceCard {
  data: {
    attributes: {
      id: number;
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
      slug: string;
      metaDescription: string;
      sub_category: {
        data: {
          attributes: {
            title: string;
          };
        };
      };
    };
  };
}
