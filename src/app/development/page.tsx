import Image from "next/image";

export default function Devlopment() {
  return (
    <div className='ly-content'>
      <h1 className='title-1'>주변개발계획</h1>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0501.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0502.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0503.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0504.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0505.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
