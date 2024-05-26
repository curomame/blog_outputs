import {ArrowLeftIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';

export default function Top({
  left,
  leftFunc,
  right,
  text,
}: {
  left: any;
  leftFunc:any;
  right: any;
  text: string;
}) {


  return (

    <>
    <div className="h-12 flex justify-between px-4 items-center fixed top-0 right-0 left-0 bg-white">
      
      
      <div 
      onClick={() => leftFunc && leftFunc(true)}
      className="w-5 h-5 ">
      <ArrowLeftIcon className="size-5"/>
      </div>
      <div className="font-bold text-lg">{text}</div>
      <div className="w-5 h-5 ">
      {right ?? ""}
      </div>
    </div>
    <div className="h-12"></div>
    </>
  );
}
