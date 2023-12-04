import LargeText from './LargeText';

const Header = () => {
  return (
    <div className='bg-gray-400 p-3 shadow-sm border-b border-gray-300 flex flex-row sticky top-0 z-50'>
      <LargeText text='Industrial World Hub' />
      <div className='space-x-5 pl-5'>
        <HeaderButton text='Shops' location='/' />
        <HeaderButton text='Stock Market' location='stock-market' />
      </div>
    </div>
  );
};

const HeaderButton = ({ text, location }) => {
  return (
    <a
      href={location}
      className='text-sky-400 bg-sky-900 shadow p-2 m-2 font-semibold'
    >
      {text}
    </a>
  );
};

export default Header;
