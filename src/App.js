import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from "./components/CurrencyConverter"


const App = () => {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
      <p>Please Note: If the currency converter and/or the news feed displays nothing, the months max API requests have been reached.</p>
    </div>

    
  )
}

export default App
