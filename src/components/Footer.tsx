import Image from "next/image";

export default function Footer() {
  return (
    <footer className='ly-footer'>
      <div className='container'>
        <Image src='/img/name_card.jpg' alt='' width={1200} height={700} />
      </div>
    </footer>
  );
}
