import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const DetailButtonComponent = ({item}) => {
const [open, setOpen] = useState(false);

  return (
    <div>
      <ButtonComponent open onClick={() => setOpen(!open)}>
        View
      </ButtonComponent>
      {open && (
        <dialog
          open
          className="w-full min-h-screen flex justify-center items-center absolute inset-0 bg-gray-900/50 p-5 rounded-md"
        >
          <div className="w-125 h-fit bg-gray-900  text-white rounded-3xl p-5 ">
            <div className="flex justify-between align-center">
              <div className="font-bold">Item Details</div>
            <button
              onClick={() => setOpen(!open)}
              className="float-end py-2 px-4 bg-gray-900 border-2 border-blue-900 rounded-lg"
            >
              close
            </button>
            </div>
            
            <div className="clear-both"><span className="font-bold">ID: </span>{item.id}</div>
            <div className=""><span className="font-bold">Name: </span>{item.item_name}</div>
            
            <div className=""><span className="font-bold">Price: $ </span>{item.item_price}</div>
            <div className=""><span className="font-bold">Description: </span>{item.item_description}</div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DetailButtonComponent;
