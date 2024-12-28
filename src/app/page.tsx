import Link from "next/link";
export default function Home() {
  return (
    <div className=''>
      <h1 className='text-4xl'>OpenLive</h1>
      <Link className='text-blue-500 underline text-2xl' href='./todo'>
        todo
      </Link>
    </div>
  );
}
