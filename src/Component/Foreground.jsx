import React, { useRef, useState } from 'react'
import Card from './Card';


function Foreground() {
    const ref = useRef(null);

    const data = [
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.9mb", close:true,tagdetails:{isOpen : true , tagTaital :"Downalod Now",tagColor : "green"}},
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.7mb", close:true,tagdetails:{isOpen : true , tagTaital :"Downalod Now",tagColor : "blue"}},
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.4mb", close:false,tagdetails:{isOpen : true , tagTaital :"Downalod Now",tagColor : "blue"}},
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.9mb", close:false,tagdetails:{isOpen : true , tagTaital :"Uplode",tagColor : "green"}},
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.5mb", close:true,tagdetails:{isOpen : true , tagTaital :"Downalod Now",tagColor : "blue"}},
        {desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", filesize: "0.9mb", close:false,tagdetails:{isOpen : true , tagTaital :"Uplode",tagColor : "green"}},
    ]
    return (
        <div ref={ref} className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-4'>
           {
            data.map((item , index)=>(
                <Card data={item} referance = {ref}/>
            ))
           }
        </div>
    )
}

export default Foreground;