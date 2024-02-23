import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Navbar() {
  
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return <div>
    <div className="navbar w-[265px] bg-black text-white p-2 text-sm">
      
      <ul>
        <li>
          <Link to="/" onClick={() => handleItemClick('dashboard')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'dashboard' ? 'active' : ''}`}>
              Dashboard
            </div>
          </Link>
        </li>
        <li>
          <Link to="/tong-quan" onClick={() => handleItemClick('tong-quan')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'tong-quan' ? 'active' : ''}`}>
              Tổng quan
            </div>
          </Link>
        </li>
        <li>
          <Link to="/truc-quan" onClick={() => handleItemClick('truc-quan')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'truc-quan' ? 'active' : ''}`}>
              Trực quan
            </div>
          </Link>
        </li>
        <li>
          <Link to="/thong-tin-tram" onClick={() => handleItemClick('thong-tin-tram')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'thong-tin-tram' ? 'active' : ''}`}>
              Thông tin trạm
            </div>
          </Link>
        </li>
        <li>
          <Link to="/xuat-bao-cao" onClick={() => handleItemClick('xuat-bao-cao')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'xuat-bao-cao' ? 'active' : ''}`}>
              Xuất báo cáo
            </div>
          </Link>
        </li>
        <li>
          <Link to="/quan-ly-nguoi-dung" onClick={() => handleItemClick('quan-ly-nguoi-dung')}>
            <div className={`flex items-center justify-center rounded-md hover:bg-[#223e5f] cursor-pointer p-3 m-1 ${activeItem === 'quan-ly-nguoi-dung' ? 'active' : ''}`}>
              Quản lý người dùng
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>;
}

export default Navbar;