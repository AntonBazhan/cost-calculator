import React from "react";

export default function HistoryItem({ transation  }) {
  return (
    
     
        <li 
        className={`history__item ${transation.add ? 'history__item-plus':
        'history__item-minus'}`}>
          {transation.description}
  <span className="history__money">{transation.amount}₽</span>
          <button className="history__delete">x</button>
        </li>

     
    
  );
}
