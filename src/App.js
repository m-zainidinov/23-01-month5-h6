import Home from "./components/Home";
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <Home query={query} />        
    </div>
  );
}

export default App;
