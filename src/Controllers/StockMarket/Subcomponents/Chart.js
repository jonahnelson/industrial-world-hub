import { useState } from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Button from '../../../Components/Button';
import LabeledInfo from '../../../Components/LabeledInfo';
import NumberInput from '../../../Components/NumberInput';
import {
  Dollarize,
  MultipleStyles,
  standardBrightGreen,
  standardBrightRed,
} from '../../../Utilities';

const Chart = ({ company, companies, setCompanies, money, setMoney }) => {
  console.log('company', company);
  const sharesSnapshots = company.sharesSnapshots;
  const data = sharesSnapshots.slice(-15).map((snapshot) => {
    const date = new Date(snapshot.time);
    return {
      label: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      'Stock Price': Dollarize(getStockPrice(snapshot), false),
    };
  });

  const [latestSharesSnapshot, setLatestSharesSnapshot] = useState(
    sharesSnapshots[sharesSnapshots.length - 1]
  );

  const [sharesToBuy, setSharesToBuy] = useState(0);
  const [sharesToSell, setSharesToSell] = useState(0);
  const [newSharesOwnedAfterBuy, setNewSharesOwnedAfterBuy] = useState(0);
  const [newSharesOwnedAfterSell, setNewSharesOwnedAfterSell] = useState(0);

  const isCompanyGreen =
    data[0]['Stock Price'] < data[data.length - 1]['Stock Price'];

  function onPressBuyShares() {
    if (validBuy()) {
      const editedCompanies = [...companies];
      const editedCompany = { ...company };
      const editedSharesSnapshots = [...company.sharesSnapshots];

      const transactionTotal =
        sharesToBuy * getStockPrice(latestSharesSnapshot);
      setMoney(money - transactionTotal);

      let newSharesIssued = Number(latestSharesSnapshot.sharesIssued);

      const newShareSnapshot = {
        time: new Date().getTime(),
        sharesOwned: newSharesOwnedAfterBuy,
        sharesIssued: newSharesIssued,
        companyValue: latestSharesSnapshot.companyValue + transactionTotal,
      };
      editedSharesSnapshots.push(newShareSnapshot);
      setLatestSharesSnapshot(newShareSnapshot);
      window.alert(`Bought ${sharesToBuy} shares of ${company.name}`);
      setSharesToBuy(0);
      editedCompany.sharesSnapshots = editedSharesSnapshots;
      editedCompanies[editedCompanies.indexOf(company)] = editedCompany;
      setCompanies(editedCompanies);

      console.log('new companies', editedCompanies);
    }
  }

  function onPressSellShares() {
    if (validSell()) {
      const editedCompanies = [...companies];
      const editedCompany = { ...company };
      const editedSharesSnapshots = [...company.sharesSnapshots];

      const transactionTotal =
        sharesToSell * getStockPrice(latestSharesSnapshot);
      setMoney(money + transactionTotal);

      const newShareSnapshot = {
        time: new Date().getTime(),
        sharesOwned: newSharesOwnedAfterSell,
        sharesIssued: latestSharesSnapshot.sharesIssued,
        companyValue: latestSharesSnapshot.companyValue - transactionTotal,
      };
      editedSharesSnapshots.push(newShareSnapshot);
      setLatestSharesSnapshot(newShareSnapshot);
      window.alert(`Sold ${sharesToSell} shares of ${company.name}`);
      setSharesToSell(0);
      editedCompany.sharesSnapshots = editedSharesSnapshots;
      editedCompanies[editedCompanies.indexOf(company)] = editedCompany;
      setCompanies(editedCompanies);
      console.log('new companies', editedCompanies);
    }
  }

  function onChangeBuy(newBuyAmount) {
    if (newBuyAmount >= 0) {
      setSharesToBuy(newBuyAmount);
      const newSharesOwned =
        Number(latestSharesSnapshot.sharesOwned) + Number(newBuyAmount);
      setNewSharesOwnedAfterBuy(newSharesOwned);
    }
  }

  function onChangeSell(newSellAmount) {
    if (newSellAmount >= 0) {
      setSharesToSell(newSellAmount);
      const newSharesOwned =
        Number(latestSharesSnapshot.sharesOwned) - Number(newSellAmount);
      setNewSharesOwnedAfterSell(newSharesOwned);
    }
  }

  function getStockPrice(shareSnapshot) {
    return shareSnapshot.companyValue / shareSnapshot.sharesIssued;
  }

  function validBuy() {
    return (
      sharesToBuy > 0 &&
      newSharesOwnedAfterBuy <= latestSharesSnapshot.sharesIssued &&
      money - sharesToBuy * getStockPrice(latestSharesSnapshot) >= 0
    );
  }

  function validSell() {
    return sharesToSell > 0 && newSharesOwnedAfterSell >= 0;
  }

  return (
    <div className='p-5 m-5 border border-gray-300 shadow bg-gray-600'>
      <p className='text-white text-2xl font-bold'>{company.name}</p>
      <p
        className={MultipleStyles([
          isCompanyGreen ? `text-bright-green` : `text-bright-red`,
          'font-semibold pt-2',
        ])}
      >
        STOCK PRICE
      </p>
      <p
        className={MultipleStyles([
          isCompanyGreen ? `text-bright-green` : `text-bright-red`,
          'font-semibold text-4xl pb-2',
        ])}
      >
        {Dollarize(getStockPrice(latestSharesSnapshot), true)}
      </p>
      <LabeledInfo
        label={'STOCKS OWNED'}
        info={`${latestSharesSnapshot.sharesOwned}/1000`}
      />
      <LabeledInfo
        label={'PERCENT OWNERSHIP'}
        info={`${Math.round(
          (latestSharesSnapshot.sharesOwned /
            latestSharesSnapshot.sharesIssued) *
            100
        )}%`}
      />
      <LabeledInfo
        label={'COMPANY VALUE'}
        info={Dollarize(latestSharesSnapshot.companyValue, true)}
      />
      <div className='flex flex-row gap-4 justify-center'>
        <div>
          <NumberInput value={sharesToBuy} onChange={onChangeBuy} />
          <Button
            onPress={onPressBuyShares}
            text={`Buy ${sharesToBuy} Shares (${Dollarize(
              sharesToBuy * getStockPrice(latestSharesSnapshot)
            )})`}
            className='py-2 flex justify-center'
            disabled={!validBuy()}
          />
        </div>
        <div>
          <NumberInput value={sharesToSell} onChange={onChangeSell} />
          <Button
            onPress={onPressSellShares}
            text={`Sell ${sharesToSell} Shares (${Dollarize(
              sharesToSell * getStockPrice(latestSharesSnapshot)
            )})`}
            className='py-2 flex justify-center'
            disabled={!validSell()}
          />
        </div>
      </div>
      <ResponsiveContainer width='100%' minHeight={300} className='bg-black'>
        <LineChart
          data={data}
          margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
        >
          <XAxis dataKey='label' stroke='white' />
          <YAxis stroke='white' />
          <Tooltip />
          <Line
            type='linear'
            dataKey='Stock Price'
            stroke={isCompanyGreen ? standardBrightGreen : standardBrightRed}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
