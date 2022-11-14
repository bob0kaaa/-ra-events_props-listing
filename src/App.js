import './App.css';
import data from './data/etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <div>
      <Listing items={data} />
    </div>
  );
}

export default App;
