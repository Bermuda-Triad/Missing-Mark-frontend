import React from 'react'
import { useState } from 'react'
import AddMissingMark from '../../../components/missingMarkForm/MissingMarkPopUp'

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
    <>
    <AddMissingMark/>
   
    </>
   

  )
}

export default AddMark