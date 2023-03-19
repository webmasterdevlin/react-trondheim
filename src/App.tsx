import { BrowserRouter } from 'react-router-dom';

import Memo from './built-in-hooks/Memo';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <Memo />
      </div>
    </BrowserRouter>
  );
};

export default App;
