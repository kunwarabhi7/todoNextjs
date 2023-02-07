import { db } from '@/utils/firebase'
import {  deleteDoc, doc ,updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'

const TodosList = ({todo,isCompleted,id}) => {


    const deleteTodoDoc = async() =>{
        const todoDoc = doc(db,"todo",id)
        await deleteDoc(todoDoc)
    }

    


    return (
    <div className="mt-8">
            <ul>
                    <li className="p-2 rounded-lg" >
                        <div className="flex align-middle flex-row justify-between">
                           
                            <div className="p-2">
                                <p className="text-lg  text-black ">{todo}</p>
                            </div>
                            <button onClick={()=>deleteTodoDoc(id)}
                                className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                <span >Removee</span>
                            </button>
                        </div>
                        <hr className="mt-2"/>
                    </li>
                   
            </ul>
        </div>
  )
}

export default TodosList
