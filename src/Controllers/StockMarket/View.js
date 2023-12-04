import { useState } from 'react';
import { Dollarize, GenerateId } from '../../Utilities';
import Chart from './Subcomponents/Chart';

const StockMarket = () => {
  const [money, setMoney] = useState(1000);

  console.log(GenerateId());

  const [companies, setCompanies] = useState([
    {
      name: "Joner's Pumpkins",
      id: '1',
      sharesSnapshots: [
        {
          time: new Date().getTime(),
          sharesOwned: 10,
          sharesIssued: 1000,
          companyValue: 1000,
        },
        {
          time: new Date().getTime() + 1000,
          sharesOwned: 15,
          sharesIssued: 1000,
          companyValue: 1000,
        },
      ],
    },
    {
      name: 'Mining Stuff',
      id: '2',
      sharesSnapshots: [
        {
          time: new Date().getTime(),
          sharesOwned: 10,
          sharesIssued: 1000,
          companyValue: 1000,
        },
      ],
    },
    {
      name: 'Construction Obstruction',
      id: '3',
      sharesSnapshots: [
        {
          time: new Date().getTime(),
          sharesOwned: 10,
          sharesIssued: 1000,
          companyValue: 1000,
        },
      ],
    },
  ]);

  return (
    <div className='bg-black min-h-screen'>
      <p className='text-sky-500 text-center text-3xl font-bold py-4'>
        Stock Market
      </p>
      <p className='text-white text-center font-bold'>
        {Dollarize(money, true)} TO USE
      </p>
      {companies.map((company) => (
        <Chart
          company={company}
          companies={companies}
          setCompanies={setCompanies}
          money={money}
          setMoney={setMoney}
        />
      ))}
    </div>
  );
};

export default StockMarket;
