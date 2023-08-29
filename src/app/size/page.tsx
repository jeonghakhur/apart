import Image from "next/image";

export default function Size() {
  return (
    <div className='ly-content'>
      <h1 className='title-1'>평형안내</h1>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0301.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0302.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0303.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0304.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
