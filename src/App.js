import React from 'react';
import { Header, Footer, Navbar } from './common';
import RouterPage from './common/RouterPage';

const App = () => {
  return (
    <div>
        <div class="main-content">
        <Header />
        <RouterPage />        
        </div>
        <Footer />
        
    </div>
  )
}

export default App