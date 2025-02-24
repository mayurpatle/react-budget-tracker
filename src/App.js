import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import TransactionList from "./components/TransactionList";  
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">Budget-Tracker</header>
        <main className="">{/* components will be  added here  */}
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
