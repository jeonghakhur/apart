import Image from "next/image";

export default function Location() {
  return (
    <div className='ly-content'>
      <h1 className='title-1'>입지안내</h1>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0201.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0202.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0203.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0204.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
