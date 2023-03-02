import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Basket = () => {
  const params = useParams();
  const { transactions } = useSelector(state => state.shopping);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const selectedTransaction = transactions.find(item => item.id === params.data);
    setBasket(selectedTransaction.item);
  }, [params.data, transactions]);

  return (
    <div className="mt-8 App h-screen bg-gray-100 ">
      <div className="p-8 bg-white border-0 lg:col-span-3 lg:rounded-lg md:rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs border-b text-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nama Item
              </th>
              <th scope="col" className="py-3 px-6">
                Jumlah
              </th>
              <th scope="col" className="py-3 px-6">
                Harga
              </th>
              <th scope="col" className="py-3 px-6">
                Total Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item, i) =>
              <tr className='border-b' key={i}>
                <td className='py-4 px-6'>{item.id}</td>
                <td className='py-4 px-6'>{item.img}</td>
                <td className='py-4 px-6'>{item.price}</td>
                <td className='py-4 px-6'>{item.title}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Basket;