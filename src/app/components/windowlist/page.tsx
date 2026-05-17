"use client";

import { useEffect, useState } from "react";
import { List } from "react-window";

function Row({ index, style, data }) {
  const item = data[index];
  if (!item) return null;

  return (
    <div style={style}>
      {item.id}. {item.title}
    </div>
  );
}

export default function WindowList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <List
      height={192}
      width="100%"
      rowCount={data.length}
      rowHeight={35}
      rowComponent={Row}
      rowProps={{ data }}
    />
  );
}
