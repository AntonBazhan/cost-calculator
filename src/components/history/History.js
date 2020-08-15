import React from "react";
import HistoryItem from "./HistoryItem";
export default function History({ transations }) {
  return (
    <section className="history">
      <h3>История расходов</h3>
      <ul className="history__list">
        {transations.map((item) => (
          <HistoryItem 
            key={item.id} 
            transation={item} />
        ))}
      </ul>
    </section>
  );
}
