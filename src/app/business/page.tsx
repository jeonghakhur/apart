import Image from "next/image";

export default function Business() {
  return (
    <div className='ly-content'>
      <h1 className='title-1'>사업개요</h1>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0101.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0102.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0103.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0104.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0105.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0106.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <Image src='/img/img_0107.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
    </div>
  );
}
