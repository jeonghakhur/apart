"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className='ly-content'>
      <div>
        <h2 className='title-2'>광역 조감도</h2>
        <figure className='w-full'>
          <Image src='/img/view.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/model_house.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      {/* <div>
        <h2 className='title-2'>위치도</h2>
        <figure className='w-full'>
          <Image src='/img/1.jpg' alt='' width={1200} height={700} />{" "}
        </figure>
      </div> */}
      <div>
        <h2 className='title-2'>사업 개요</h2>
        <figure className='w-full'>
          <Image src='/img/project_2.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/project_5.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/project_5_2.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/membership.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/price.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
