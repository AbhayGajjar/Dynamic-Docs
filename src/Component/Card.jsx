import React from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data ,  referance }) {
  return (
    <motion.div drag dragConstraints={ referance} whileDrag={{scale:1.05}} dragElastic={0.1} className=' relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden'>
      <LuFileSpreadsheet />
      <p className='text-[1vw] mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full py-3 left-0'>
        <div className='flex item-center justify-between px-8 py-4 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 flex items-center justify-center bg-sky-500 rounded-full'>
            {data.close ? <IoMdClose /> : <FiDownload size="0.8em" />}

          </span>
        </div>
        {
          data.tagdetails.isOpen && (
            <div className={`tag w-full py-3 ${data.tagdetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-700"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tagdetails.tagTaital}</h3>
            </div>
          ) 
        }


      </div>
    </motion.div>
  )
}

export default Card