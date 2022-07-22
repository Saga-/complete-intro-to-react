import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import ThemeContext from './ThemeContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const theme = useState('green');

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
