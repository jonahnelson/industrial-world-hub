const StockMarket = () => {
    const companies = [
        {name: "Joner's Pumpkins"},
        {name: "Mining Stuff"},
        {name: "Construction Obstruction"}
    ]
    return (
        <div className="bg-black min-h-screen">
            <p>Stock Market</p>
            {companies.map(company => <Chart company={company}/>
            )}
        </div>
    )
}

const Chart = ({company}) => {
    console.log('company', company)
    return <div className='p-5 m-5 border border-gray-300 shadow bg-gray-600'>
        <p className="text-white">{company.name}</p>

    </div>
}

export default StockMarket;