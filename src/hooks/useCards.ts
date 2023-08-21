import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getData } from "@/utils/getData";

export const useCards = (page: string) => {
  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["cards"],
    ({ pageParam = 2 }) =>
      getData(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${page}?populate=*&pagination[page]=${pageParam}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
      ),
    {
      getNextPageParam: (lastPage) => {
        const pageCount = lastPage.meta.pagination.pageCount;
        const nextPage = lastPage.meta.pagination.page;
        return nextPage < pageCount ? nextPage + 1 : undefined;
      },
      enabled: false,
    }
  );

  const cards = useMemo(() => data?.pages.flatMap((item) => item.data), [data]);

  return { isFetching, fetchNextPage, hasNextPage, cards };
};
