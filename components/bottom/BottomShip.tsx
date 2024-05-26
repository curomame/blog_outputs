'use client'

import { useRouter } from "next/navigation";

export default function BottomShip({ price }: { price: number }) {

  const router = useRouter()
  

  return (
    <>
      <div className="ring-1 ring-gray-300 shadow-2xl fixed bottom-0 right-0 left-0 text-center pt-3 pb-9 rounded-t-2xl bg-white">
        <div className="text-sm font-bold text-teal-400 mb-3">배달팁 무료</div>

        <div 
        onClick={() => router.push('/1-baemin/order')}
        className="font-bold py-4 mx-2 bg-teal-400 text-white rounded">
          <p>14,000원 · 알뜰배달 주문하기</p>
        </div>
      </div>
    </>
  );
}
