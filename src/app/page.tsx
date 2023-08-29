"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className='ly-content'>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_1.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>조감도</h2>
        <figure className='w-full'>
          <Image src='/img/main_2.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <h2 className='title-2'>광역 조감도</h2>
          <Image src='/img/main_3.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>위치도</h2>
        <figure className='w-full'>
          <Image src='/img/main_4.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>프리미엄</h2>
        <figure className='w-full'>
          <Image src='/img/img_etc_03.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/img_etc_01.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/img_etc_02.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>

      <p className='msg-type-1'>
        ※상기 이미지는 예정사항이며, 인허가 과정에서 변경될 수 있습니다.
      </p>
    </div>
  );
}
