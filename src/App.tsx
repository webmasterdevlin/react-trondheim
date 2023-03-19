import { BrowserRouter } from 'react-router-dom';

import Effect3 from './built-in-hooks/Effect3';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <Effect3 cost={10} discount={4} />
      </div>
    </BrowserRouter>
  );
};

export default App;
