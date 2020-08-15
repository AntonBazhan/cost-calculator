import React, { Component } from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
  state = {
    transations: [],
    description: "",
    amount: "",
  };

  addTransaction = (add) => {
    const transations = [...this.state.transations];

    transations.push({
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add,
    });

    this.setState({ transations, description: '', amount: '' });
  };

  addAmount = (e) => {
    this.setState({ amount: e.target.value });
  };

  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total />
            <History transations={this.state.transations} />
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
