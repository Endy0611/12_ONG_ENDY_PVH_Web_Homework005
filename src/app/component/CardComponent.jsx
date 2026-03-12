"use client";
import React from "react";
import DetailButtonComponent from "./DetailButtonComponent";
import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function CardComponent({ items, onToggle }) {
  return (
    <div className="w-full bg-black p-6 flex flex-col gap-3">
      {items.map((item) => (
        <Item key={item.id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}

function Item({ item, onToggle }) {
  console.log(item);
  return (
    <div
      key={item?.id}
      className="flex items-center gap-4 bg-gray-900 rounded-xl px-4 py-3"
    >
      <img
        src={item?.image}
        alt={item?.item_name}
        className="w-16 h-16 rounded-lg object-cover bg-gray-700"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-semibold text-sm">
            {item?.item_name}
          </span>
          <span className="text-gray-300 text-sm">
            ${item?.item_price}
          </span>
          <button onClick={() => onToggle(item.id)}>
            <Bookmark
              size={18}
              fill={item.saved ? "#facc15" : "none"}
              color={item.saved ? "#facc15" : "#6b7280"}
            />
          </button>
        </div>
        <p className="text-gray-500 text-xs">{item?.item_description}</p>
      </div>
      <DetailButtonComponent item={item} />
    </div>
  );
}
