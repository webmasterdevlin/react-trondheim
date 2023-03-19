import { BrowserRouter } from 'react-router-dom';
import State from './built-in-hooks/State';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <State />
      </div>
    </BrowserRouter>
  );
};

export default App;
