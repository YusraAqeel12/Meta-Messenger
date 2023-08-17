"use client";
import React, { FormEvent, useState } from "react";
import { NextResponse } from "next/server";
const url = ""
function ChatInput() {
  const [input, setInput] = useState("");
//we are preventing the default behaviour pehlay refresh hota thaa from ab nahi hota when i press send 
//e.prevent.default cancels an event
// jaisay he send karnay kai baad input clear karnai kai liyae agar input na ho toh const return setinput which is empty
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const messageToSend = input;

    setInput("");
    const  message = {
      message: messageToSend,
      created_at: new Date(),
      username: "Yusra Aqeel",
      profilePic: "https://github.com/marcusvinicius0.png",
      email: "yusraaqeel12@gmail.com",
    };

    const POST = async(req: Request) =>{
      //   const body=await req.json()//body mill jaigee jo bhee json data send hoga from postman 
            const res=await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(message) //body ko json string mai convert karo
      
            })
           const response = await res.json() //reuqest karo in post and you will get response
           return NextResponse.json({response}) };
  };
  return (
    <form
      onSubmit={addMessage}
      className=" fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter message here.."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <button
        disabled={!input}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;



//chatinput is msgs send karnay waala box
//disable ya band honay per opacity 50 hogai and cursor none ho
//focus karnay per outline none ho aur border becomes blue in input
//value is assigned to a piece of state which is input 
//e.target.value apnay aap update hogi jab aap input box mai kuch likho gay
//what is input get pushed in setInput