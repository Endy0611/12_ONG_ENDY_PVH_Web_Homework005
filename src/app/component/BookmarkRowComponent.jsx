"use client";

import React from "react";
import ButtonComponent from "./ButtonComponent";

import { BookMarked, ArrowUpAZ, ArrowDownAZ } from "lucide-react";

const BookmarkRowComponent = ({
  items,
  setData,
  showSaved,
  onBookmarkClick,
}) => {
  const sort = (direction) => {
    setData(
      [...items].sort((a, b) =>
        direction === "az"
          ? a.item_name.localeCompare(b.item_name)
          : b.item_name.localeCompare(a.item_name),
      ),
    );
  };

  return (
    <div className="h-fit w-full bg-black p-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <div>
          <button className="px-2  border-2 rounded-xl bg-white text-black" onClick={onBookmarkClick}>Back</button>
        </div>
        <div className="flex justify-around gap-5">
          <div className="font-bold">Your Bookmark</div>
          <BookMarked onClick={onBookmarkClick} className="cursor-pointer hover:text-yellow-400"/>
          <ArrowUpAZ onClick={() => sort("az")} className="hover:text-yellow-400"/>
          <ArrowDownAZ onClick={() => sort("za")} className="hover:text-yellow-400"/>
        </div>
      </div>
    </div>
  );
};

export default BookmarkRowComponent;
