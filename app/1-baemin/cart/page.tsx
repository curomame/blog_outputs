"use client";

import Top from "@/components/top/Top";
import { TrashIcon,PlusIcon,ClockIcon } from '@heroicons/react/24/outline'
import BottomShip from "@/components/bottom/BottomShip";
import Image from "next/image";

interface OrderItem {
  name: string;
  price: number;
  options: string[];
  additionalPrice: number;
}

export default function Page() {

  return (
    <>
      <Top left={false} leftFunc={undefined} right={false} text="장바구니"/>
      <div className="mx-4">
        <div id="cart" className="flex justify-between my-5 mx-1 items-center">
          <div className="flex">
            <div className="w-6 h-6 mr-2 bg-gray-300 rounded-lg relative">
              <Image 
              className="rounded-lg"
              src={"https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" fill/>
            </div>
            <h2 className="font-bold">제리의 젤리가게</h2>
          </div>
          <div className="flex">
            <div className="w-4 h-4 mr-0.5 my-auto">
              <ClockIcon className="size-4 "/>
            </div>
            <p className="text-sm">10~20분 후 도착</p>
          </div>
        </div>

        <div
          id="item_box"
          className="p-5 ring-1 ring-gray-300 rounded-2xl relative"
        >
          <div id="item_text">
            <h3 className="text-lg font-bold">1인 세트</h3>
            <p className="mt-2 text-sm">추가 : 크림 젤리(3,000원)</p>
            <p className="mt-2 text-sm">가격 : 12,000원</p>
            <p className="mt-4 text-sm">15,000원</p>
          </div>
          <div id="item_button" className="flex justify-end mt-4 text-sm">
            <div className="px-3 py-2 ring-1 ring-gray-300 rounded mr-2">옵션 변경</div>
            
            <div className="px-2 py-2 ring-1 ring-gray-300 rounded flex">
              <div className="my-auto">
                <TrashIcon className="size-4 text-gray-500"/>
              </div>
              <div className="mx-5">1</div>
              <div className="my-auto">
                <PlusIcon className="size-4 text-gray-500 "/>
              </div>
            </div>
          </div>
          <div
            id="item_img"
            className="w-16 h-16 absolute ring-1 ring-gray-300 right-5 top-5 rounded-lg"
          >
            <Image 
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1617627191898-1408bf607b4d?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt=""/>
          </div>
          
          <hr className="my-4"/>

          <div className="text-sm text-center">옵션변경</div>
        </div>
      </div>
      <BottomShip price={16000}/>
    </>
  );
}
