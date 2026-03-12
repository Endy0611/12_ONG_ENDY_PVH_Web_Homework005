import React from 'react'


const menuItems = ["Overview", "Items", "Orders", "Customers", "Settings"];

export default function SidebarComponent() {
  return (
    <div className="p-4 bg-gray-950 min-h-[850px] w-[300px] rounded-xl m-5 shrink-0">
      <p className="text-sm mb-2 text-white">MENU</p>

      {menuItems.map((item) => (
        <button
          key={item}
          className={`text-md p-2 w-full border-2 border-gray-800/99 text-left rounded-lg mt-2`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
