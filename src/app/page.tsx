import Link from "next/link";
import Image from "next/image";
import Live from "../../public/S__23707650.jpg";
export default function Home() {
  return (
    <div>
      <div className='flex items-end bg-gradient-to-t'>
        <h1 className='text-5xl'>Openlive</h1>
        <h1 className='text-xl  ml-auto'>By colllege students</h1>
      </div>
      <Image src={Live} alt='Live picture' className='' />
      <Link
        className='text-blue-500 underline text-4xl hover:bg-sky-200'
        href='./todo'
      >
        todo
      </Link>
    </div>
  );
}
