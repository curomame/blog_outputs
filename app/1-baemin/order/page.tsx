"use client";

import BottomSheetContents from "@/components/bottom/BottomSheetContents";
import Modal from "@/components/modal/Modal";
import Top from "@/components/top/Top";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";

export default function page() {
  const [open, setOpen] = useState(false);
  const [letter, setLetter] = useState("");

  const [cancelModal, setCancelModal] = useState(false);
  const [writeModal, setWriteModal] = useState(false)

  useEffect(() => {
    // 컴포넌트 마운트 시 로컬 스토리지에서 letter 값을 읽어옴
    const savedLetter = localStorage.getItem('letter');

    

    if (savedLetter) {
      setLetter(savedLetter);
      setWriteModal(true)
    }

  }, []);

  const router = useRouter()

  return (
    <>


      {writeModal && (        <Modal
          
          contents="요청사항을 이어서 작성하시겠어요?"
          left="새로 쓰기"
          //@ts-ignore
          leftFunc={() => {
            setLetter("")
            setWriteModal(false)
            localStorage.removeItem('letter')
          }}
          right="이어 쓰기"
          //@ts-ignore
          rightFunc={() => {setWriteModal(false)}}
          letter={letter}
        />)}

      {cancelModal && (
        <Modal
          //@ts-ignore
          leftFunc={() => setCancelModal(false)}
          contents="다음에 다시 주문하시겠어요?"
          left="계속 주문"
          right="주문 취소"
          //@ts-ignore
          rightFunc={() => router.back()}
          letter={letter}
        />
      )}
      <Top
        left={false}
        leftFunc={setCancelModal}
        right={false}
        text="주문하기"
      />

      <div
        id="ship"
        className="flex justify-between mt-3 mb-5 mx-5 items-center"
      >
        <div className="flex">
          <h2 className="font-bold">제리배달로 받을게요</h2>
        </div>
        <div className="flex">
          <div className="w-4 h-4 mr-0.5 my-auto">
            <ClockIcon className="size-4 " />
          </div>
          <p className="text-sm">10~20분 후 도착</p>
        </div>
      </div>

      <div id="address">
        <div className="ring-1 ring-gray-300 mx-4 my-3 rounded-xl">
          <div className="p-5 flex justify-between">
            <div>
              <div className="mb-1 font-bold">제리배달로 받을게요</div>
              <div className="text-sm">
                우리집{" "}
                <span className="text-xs text-gray-300">
                  우리집 강아지는 복슬 강아지
                </span>
              </div>
            </div>
            <div className="my-auto">
              <ChevronRightIcon className="size-4" />
            </div>
          </div>

          <hr />

          <div className="p-5 flex justify-between">
            <div>
              <div className="mb-1 font-bold">라이더님께</div>
              <div className="text-sm">직접 받을게요</div>
            </div>
            <div className="my-auto">
              <ChevronRightIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>

      <div id="phone">
        <div className="ring-1 ring-gray-300 mx-4 my-3 rounded-xl">
          <div className="p-5 flex justify-between">
            <div>
              <div className="mb-1 font-bold">내 연락처</div>
              <div className="text-sm">010-0000-0000</div>
            </div>
            <div className="my-auto">
              <ChevronRightIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="master
      "
        onClick={() => setOpen(true)}
      >
        <div className="ring-1 ring-gray-300 mx-4 my-3 rounded-xl">
          <div className="p-5 flex justify-between w-full">
            <div>
              <div className="mb-1 font-bold">가게 사장님께</div>
              <div className="text-sm mb-1">{letter ? letter : "요청사항 없음"}</div>
              <div className="text-sm">일회용품X, 다회용기 X</div>
            </div>
            <div className="my-auto flex items-center text-sm">
              {letter=="" ? "요청 입력":""}<ChevronRightIcon className="size-4 h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>

      <BottomSheet
        className=""
        defaultSnap={({ maxHeight }) => maxHeight}
        snapPoints={({ maxHeight }) => [
          maxHeight - 48,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
        header={false}
        open={open}
      >
        <BottomSheetContents
          setOpen={setOpen}
          letter={letter}
          setLetter={setLetter}
        />
      </BottomSheet>

      <div id="card">
        <div className="ring-1 ring-gray-300 mx-4 my-3 rounded-xl">
          <div className="p-5">
            <div>
              <div className="mb-1 font-bold">가게 사장님께</div>
            </div>
            <div className="mt-5 flex ">
              <input
                className="w-6 h-6
                mr-2
                "
                checked
                readOnly
                type="radio"
              />
              <div>신용/체크카드</div>
            </div>
          </div>
        </div>
      </div>

      <div id="price">
        <div className="ring-1 ring-gray-300 mx-4 my-3 rounded-xl">
          <div className="p-5 flex justify-between items-center">
            <div className="font-bold">결제금액</div>
            <div className="font-bold text-xl">25,900원</div>
          </div>

          <hr className="px-5" />

          <div className="p-5">
            <div className="flex justify-between text-sm mb-2">
              <div>주문금액</div>
              <div>14,000원</div>
            </div>

            <div className="flex justify-between text-sm">
              <div>배달팁</div>
              <div>
                <span className="text-gray-300">1,000원</span> 무료
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="caution" className="mx-4 mt-5">
        <div>
          <div className="flex justify-between mb-3">
            <div className="text-xs ml-1">배달 상품 주의 사항</div>
            <ChevronRightIcon className="size-4 mr-1 " />
          </div>
          <hr className="bg-gray-100" />
        </div>

        <div>
          <div className="flex justify-between mb-3 mt-3">
            <div className="text-xs ml-1">
              위 내용을 확인하였으며 결제에 동의합니다
            </div>
            <ChevronRightIcon className="size-4 mr-1 " />
          </div>
          <hr className="bg-gray-100" />
        </div>

        <div className="text-center text-xs mt-4 mb-20">
          위 내용을 확인하였으며 결제에 동의합니다
        </div>
      </div>

      <div id="pay_button" className="bg-white bottom-0 left-0 right-0 fixed">
        <div className="bg-teal-400 mx-2 my-2 rounded ">
          <div className="py-3 text-lg text-white font-bold text-center">
            12,000원 결제하기
          </div>
        </div>
      </div>
    </>
  );
}
