import React from "react";
import classes from "./MyPagination.module.css";

const MyPagination = ({ page, setPage, pagesArray }) => {
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className={classes.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => {
            changePage(p);
          }}
          className={
            page === p
              ? `${classes.page} ${classes.page__current}`
              : classes.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default MyPagination;
