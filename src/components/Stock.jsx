export default function Stock({stock}) {
  const { stockName, currentPrice, prevClosingPrice, logo } = stock;
  const numericalChange = (currentPrice - prevClosingPrice).toFixed(2)
  const rateChange = (((currentPrice - prevClosingPrice) / prevClosingPrice) * 100).toFixed(2);

  let colorClass,arrow
  if(numericalChange>0){
    colorClass="green"
    arrow="⬆"
  } else if(numericalChange<0){
    colorClass="red"
    arrow="⬇"
  } else{
    colorClass="undefined"
    arrow="▬"
  }


  return (
    <div className="stock-container">
      <div className={colorClass}>
        <p>
          {arrow}
          {numericalChange}
        </p>
        <p>{rateChange}%</p>
      </div>
      <div>
        <img className="logo" src={logo} />
      </div>
      <div>
        <p>{stockName}</p>
      </div>
      <div>
        <p>${currentPrice}</p>
        <p>Güncel Fiyat</p>
      </div>
      <div>
        <p>Önceki Kapanış: ${prevClosingPrice}</p>
      </div>
    </div>
  );
}
