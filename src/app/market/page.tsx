import Image from "next/image";

export default function Market() {
  return (
    <div className='ly-content'>
      <h1 className='title-1'>주택시장동향</h1>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_5.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_6.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_7.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_8.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
