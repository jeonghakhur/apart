"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className='ly-content'>
      <div>
        <h2 className='title-2'>광역 조감도</h2>
        <figure className='w-full'>
          <Image src='/img/2.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>위치도</h2>
        <figure className='w-full'>
          <Image src='/img/1.jpg' alt='' width={1200} height={700} />{" "}
        </figure>
      </div>
      <div>
        <h2 className='title-2'>사업 개요</h2>
        <figure className='w-full'>
          <Image src='/img/5.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>보도자료</h2>
        <figure className='w-full'>
          <Image src='/img/6.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <h2 className='title-2'>단지 배치도</h2>
          <Image src='/img/8.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>평형 안내</h2>
        <figure className='w-full'>
          <Image src='/img/9.jpg' alt='' width={1200} height={700} />
          <Image
            src='/img/3.jpg'
            alt=''
            width={1200}
            height={700}
            className='my-6'
          />
          <Image src='/img/4.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
