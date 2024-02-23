import logo from './img/Logo-EVN-H-1.webp'


function Header() {
    return (<div>
        <div className="header h-[74px] flex shadow-sm">
            <div className="bg-black w-[265px] text-white flex justify-center items-center">
                <img src={logo} alt="logo" className="w-[100px] p-2"/>
            </div>
            <div className="w-[265px] text-black font-bold flex justify-start items-center m-5">
                Hệ thống giám sát dầu
            </div>
            <div className='flex space-x-10 justify-center items-center'>
                
            </div>
        </div>
    </div>);
}

export default Header;