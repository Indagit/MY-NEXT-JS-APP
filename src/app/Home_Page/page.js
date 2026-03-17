import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className ="Test">
     <p></p> 
    </div>
    <div>
      <h1>Hello, world</h1>
    </div>
    <Link href="/About_Pages"> 
     <button style={{ color: 'red'}}> Click ME </button>
    </Link>
    </>
  );
}
