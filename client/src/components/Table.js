import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const TableComponent = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/station');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const dataPerPage = 10;

  const offset = currentPage * dataPerPage;
  const pageCount = Math.ceil(data.length / dataPerPage);
  const slicedData = data.slice(offset, offset + dataPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='m-5 h-[80vh] w-[60vw]'>
      <div className='rounded-xl shadow-lg p-5'>
        <div className="overflow-hidden ">
          <table className="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"> Ngày</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Hydrogen</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Methane</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Acetylene</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Ethylene</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Ethane</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">CO2</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">CO</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Water</th>
              </tr>
            </thead>
            <tbody>
              {slicedData.map((item, index) => (

                <tr key={index}>
                  <td className="p-3 border border-gray-300">{formatDate(item.createdAt)}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Hydrogen}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Methane}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Acetylene}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Ethylene}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Ethane}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.CO2}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.CO}</td>
                  <td className="p-3 border border-gray-300 text-center">{item.Water}</td>

                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      
      <div>
        <ReactPaginate className="flex justify-center mt-4"
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'isolate inline-flex -space-x-px rounded-md shadow-sm'}
          activeClassName={'active'}
          pageClassName={'pagination-iterelative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}
          previousClassName={'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}
          nextClassName={'pagination-itemrelative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}
          disabledClassName={'pagination-item disabled'}
          previousLinkClassName={'pagination-link'}
          nextLinkClassName={'pagination-link'}
          pageLinkClassName={'pagination-link'}
          breakLinkClassName={'pagination-link'}
          disableInitialCallback={true}
          forcePage={currentPage}
        />
      </div>
      </div>
    </div>
  );
};

export default TableComponent;