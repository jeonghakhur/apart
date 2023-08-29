import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  return (
    <>
      <header className='ly-header'>
        <h1>
          <a href='/'>
            <img src='/img/logo.png' alt='' />
          </a>
        </h1>
        <button type='button' className='btn-nav-open'>
          <MdMenu />
        </button>
      </header>
      <nav className='ly-nav'>
        <button type='button' className='btn-nav-close'>
          <MdClose />
        </button>
        <ul>
          <li className='active'>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='./business'>사업개요</a>
          </li>
          <li>
            <a href='./location'>입지안내</a>
          </li>
          <li>
            <a href='./size'>평형안내</a>
          </li>
          <li>
            <a href='./press'>보도자료</a>
          </li>
          <li>
            <a href='./development'>주변개발계획</a>
          </li>
          <li>
            <a href='./market'>주택시장동향</a>
          </li>
          <li>
            <a href='./customer'>관심고객등록</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
