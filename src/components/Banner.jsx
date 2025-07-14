import React from "react";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center h-svh bg-slate-400 bg-blend-multiply bg-[url(/static/images/mountain.jpg)] bg-cover bg-fixed text-slate-200">
      <h2 className="relative top-5 text-5xl">Ideas</h2>
      <p className="relative top-5">Where all our great things begin</p>
    </div>
  );
}

export default Banner;
