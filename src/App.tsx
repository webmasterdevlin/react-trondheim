import { BrowserRouter } from 'react-router-dom';

import Effect2 from './built-in-hooks/Effect2';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <Effect2 />
      </div>
    </BrowserRouter>
  );
};

export default App;
