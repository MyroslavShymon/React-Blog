import { useState, useMemo } from "react";
import { getPagesArray, getPagesCount } from "../utils/pages";

export const usePagination = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);

  const callSetTotalPages = (totalCount) => {
    setTotalPages(getPagesCount(totalCount, limit));
  };

  const callSetPage = (page) => setPage((prev) => (prev = page));

  const callSetLimit = (limit) => setLimit((prev) => (prev = limit));

  return [
    limit,
    callSetLimit,
    page,
    callSetPage,
    totalPages,
    callSetTotalPages,
    pagesArray,
  ];
};
