import { BrowserRouter } from 'react-router-dom';
import Effect1 from './built-in-hooks/Effect1';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <Effect1 />
      </div>
    </BrowserRouter>
  );
};

export default App;
