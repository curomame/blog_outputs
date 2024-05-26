import { useEffect, useRef, useState } from "react";

export default function BottomSheetContents({
  setOpen,
  setLetter,
  letter
}: {
  setOpen: Function;
  setLetter:Function;
  letter:string;
}) {
  const [line, setLine] = useState(1);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    // Reset height to 'auto' to correctly calculate scrollHeight
    //@ts-ignore
    textarea.style.height = "auto";
    // Set a base line height to calculate number of lines
    const lineHeight = 24; // Example line height in pixels, adjust as needed
    // Get the number of lines
    //@ts-ignore
    const numberOfLines = Math.floor(textarea.scrollHeight / lineHeight);
    setLine(numberOfLines);

    // Set height based on the number of lines
    if (numberOfLines > 2) {
      //@ts-ignore
      textarea.style.height = "96px";
    } else {
      //@ts-ignore
      textarea.style.height = "auto";
      // textarea.style.linegeight = '50px'
    }
  }, [letter]); // Re-run effect when value changes

  //@ts-ignore
  const handleChange = (event) => {
    setLetter(event.target.value)
  };

  return (
    <>
    <div className="flex justify-between flex-col h-max">
      <div id="bottom_contents" className="400px">
        <div className="m-5">
          <div className="font-bold text-lg mb-4">가게 사장님께</div>

          <div className="relative">
            <textarea
              
              className="ring-1 ring-gray-300 w-full py-4 px-3 rounded mb-4"
              placeholder="예 ) 왜 이름이 제리인지 안궁금하시나용"
              ref={textareaRef}
              value={letter}
              onChange={handleChange}
              rows={1} // Set a minimum number of rows
              maxLength={60}
              style={{
                overflow: "hidden", // Hide scrollbars
                resize: "none", // Prevent manual resizing
              }}
            ></textarea>
            {line > 2 && (
              <div className="absolute bottom-8 text-sm text-gray-400 right-3">
                {letter.length}/60
              </div>
            )}
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-2 accent-teal-400" />
            <div className="text-sm">다음에도 사용</div>
          </div>

          <div className="flex items-center mt-8">
            <input type="checkbox" className="w-5 h-5 mr-2 accent-teal-400" />
            <div className="">일회용 수저, 포크 안 주셔도 돼요</div>
          </div>

          <div className="flex items-center mt-4">
            <input type="checkbox" className="w-5 h-5 mr-2 accent-teal-400" />
            <div className="">음식은 다회용기에 담아주세요</div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className="mx-5 bg-teal-400 text-center font-bold py-3 rounded text-white mb-10 fixed bottom-0 right-0 left-0"
      >
        완료
      </div>
      </div>
    </>
  );
}
