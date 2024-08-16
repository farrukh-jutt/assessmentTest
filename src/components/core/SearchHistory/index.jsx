import React from "react";

const Button = ({ children, btnHandler, value }) => {
  return (
    <button
      className="rounded-full px-4 py-2 border border-green-300 text-green-300"
      onClick={() => btnHandler(value)}
    >
      {children}
    </button>
  );
};


export default function SearchHistory({
  searchedHistory,
  btnHandler,
}) {
  return (
    <>
      {searchedHistory ? (
        <div className="flex gap-4 bg-slate-100 py-2 rounded-full px-4 mt-4">
          {searchedHistory.map((value, index) => (
            <Button key={index} btnHandler={btnHandler} value={value?.city}>
              {value?.city}
            </Button>
          ))}
        </div>
      ) : null}
    </>
  );
}
