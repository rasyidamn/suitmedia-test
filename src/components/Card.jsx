import React from "react";

function Card({ title, date, id }) {
  const imgSource =
    id % 2 ? "src/assets/bgCard1.jpeg" : "src/assets/bgCard2.jpeg";
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg ">
      <div className="overflow-hidden rounded-t-lg">
        <img src={imgSource} alt="" className="w-full h-40 object-cover " />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-slate-400">
          {date.slice(0, 10)}
        </p>
        <a href="#">
          <h5 className="mb-2 text-lg  font-bold  text-slate-700 leading-tight">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Card;
