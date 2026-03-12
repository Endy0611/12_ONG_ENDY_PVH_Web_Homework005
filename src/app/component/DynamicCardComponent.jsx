"use client";

import React from "react";
import CardComponent from "./CardComponent";
import BookmarkRowComponent from "./BookmarkRowComponent";
import { useState, useEffect } from "react";

const DynamicCardComponent = ({ items }) => {
  const [data, setData] = useState(items);
  const [showSaved, setShowSaved] = useState(false);
  const toggleSave = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item,
      ),
    );
  };
  
  useEffect(() => {
  console.log("saved items:", data.filter(item => item.saved));
}, [data]);
  const displayItems = showSaved ? data.filter((item) => item.saved) : data;
  return (
    <div className="flex flex-col w-full">
      <BookmarkRowComponent
        items={data}
        setData={setData}
        showSaved={showSaved}
        onBookmarkClick={() => setShowSaved(!showSaved)}
      />
      <CardComponent items={displayItems} onToggle={toggleSave} />
    </div>
  );
};

export default DynamicCardComponent;
