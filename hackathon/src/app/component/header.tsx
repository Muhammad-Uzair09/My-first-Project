import Image from "next/image";
import home1 from "/images/home1.jpg";
import { PiX } from "react-icons/pi";

export default function Header() {
    return (
<div className="bg-cover bg-center h-screen w-full  ">
{/* style={{ backgroundImage: `url('/images/home1.jpg')` }} // Set the background image */}
    <header className="text-white bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-white" >Food</span>
      <span className="ml-3 text-xl text-yellow-300" >tuck</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Menu</a>
      <a className="mr-5 hover:text-gray-900">Block</a>
      <a className="mr-5 hover:text-gray-900">Pages</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
   
  </div>
</header>
<div className="w-full h-auto bg-[url()]">
<Image className="h-screen" src={home1} alt="menu" />

</div>
  


</div>     
    );
  }
  
