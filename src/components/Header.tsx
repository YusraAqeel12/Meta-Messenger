
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "../ui/Button";
import meta from "../../public/meta.png"
import user from '../../public/user.jpeg'
function Header() {
  const session = false;
  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
       
        {/** IMAGE AND TEXT  */}
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src={user}
            height={10}
            width={50}
            alt="Logo"
          />

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Sonny Sangha</p>
          </div>
        </div>

        {/** BUTTON  */}
        <LogoutButton />
      
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center ">

        {/** TEXT AND META  */}
        <div className="flex space-x-2 items-center">
          <Image
            src={meta}
            height={10}
            width={50}
            alt="Logo"
          />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        {/** UTTON */}
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </Link>
     
      </div>
    </header>
  );
}
export default Header;
//agar session true ho toh yeh uper waala return karo warna neechay waala