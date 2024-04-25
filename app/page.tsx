'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const isFetch = true;
  if(!isFetch){
    throw new Error("Got error")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="border-green-400 border rounded-md p-4"
        onClick={()=> router.push("/enroll")}>
        Enroll Now
      </button>
    </main>
  );
}
