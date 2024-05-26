'use client'

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Modal({
  leftFunc,
  rightFunc,
  contents,
  left,
  right,
  letter
}: {
  leftFunc: () => {};
  rightFunc:() => {};
  contents:string;
  left:string;
  right:string;
  letter:string;
}) {


  useEffect(() => { 

    localStorage.setItem('letter', letter);

  },[letter])


  return (

    <div
      id="modal"
      className="h-screen bg-black bg-opacity-50 fixed w-screen z-50 center flex justify-center"
    >
      <div className="ring-1 ring-gray-300 bg-white p-5 rounded my-auto w-screen mx-10">
        <div className="mb-5">{contents}</div>

        <div className="flex justify-end">
          <div 
          onClick={() => {
            leftFunc()
          }}
          className="rounded  px-5 py-4 mr-2">{left}</div>
          <div 
          onClick={rightFunc}
          className="rounded bg-teal-400 px-5 py-4 font-bold text-white">
            {right}
          </div>
        </div>
      </div>
    </div>
  );
}
