import React from 'react';
import Home from './page/Home';
import {ThemeProvider} from './page/ThemeContext';

const App = () => {
    return (
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
};

export default App;