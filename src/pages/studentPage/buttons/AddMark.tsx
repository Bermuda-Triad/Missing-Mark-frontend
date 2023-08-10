import React from 'react'
import { useState } from 'react'

type Props = {
    showForm:boolean;
    setShowForm:boolean
}
type MyType = {

}

function AddMark({showForm,setShowForm}: Props) {

    
    function addHandler(){
        setShowForm(true)       

    }
  return (
    <button className='bg-themeblue text-white py-[8px] px-[16px] text-[13.33px] drop-shadow-md' onClick={addHandler}>+ Add Missing Mark</button>
  )
}

export default AddMark