import React from "react";

import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue="Sort by:"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", text: "By title" },
          { value: "body", text: "By body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
