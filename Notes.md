const POST = async(req:Request) =>{
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



     <form
      onSubmit={addMessage}
      className=" fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"  >
      {/** INPUT AND BUTTON */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter message here.."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"      />

      <button
    
        disabled={!input}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      //if no input button is disabled 
         >
        Send
      </button>
    
    </form>



    