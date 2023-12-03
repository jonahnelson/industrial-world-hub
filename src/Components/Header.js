import LargeText from "./LargeText";

const Header = () => {
    return(
        <div className='bg-gray-100 p-3 shadow-sm border-b border-gray-300 flex flex-row sticky top-0'>
            <LargeText text='Industrial World Hub'/>
            <div className='space-x-5 pl-5'>
                <HeaderButton text='Shops' location='/'/>
                <HeaderButton text='Stock Market' location='stock-market'/>
            </div>
            
        </div>
    )
}

const HeaderButton = ({text, location}) => {
    return(
        <a href={location} className="text-blue-500 font-semibold">{text}</a>
    )
}

export default Header;