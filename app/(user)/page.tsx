'use client'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { fetchUserProfile } from '@/redux/feature/userProfile/userProfileSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const isFetch = true;
  if(!isFetch){
    throw new Error("Got error")
  }

  useEffect(()=> {
    dispatch(fetchUserProfile())
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="border-green-400 border rounded-md p-4"
        onClick={()=> router.push("/enroll")}>
        Enroll Now
      </button>
      <div className="scan">
        
      </div>
    </main>
  );
}
