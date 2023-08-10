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
    sub_category: {
      data: {
        id: number;
        attributes: {
          title: string;
        };
      };
    };
    price?: string;
    slug: string;
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
