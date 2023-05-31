// Dependencies
import { createRoot } from 'react-dom/client';

// Components
import { Pet } from './components/Pet';
import { SearchParams } from './components/SearchParams';

const App = () => {
  const Pets = [
    { id: 1, name: "Max", animal: "Perro", breed: "Croquetas" },
    { id: 2, name: "Terry02", animal: "Cotorro", breed: "Alpiste" },
  ];
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);