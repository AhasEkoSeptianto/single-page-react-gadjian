// lazy load react
import React, { lazy, Suspense } from 'react';

import Load from './Components/Load';

const MainPages = lazy(() => import('./Pages/MainPages'));
const Navbar = lazy(() => import('./Components/Navbar'));
const Header = lazy(() => import('./Components/Header'));

class App extends React.Component {

  render(){
    return (
      <Suspense fallback={<Load />}>
        <Header />

        <div className="grid grid-cols-5 gap-2">
          <div className='hidden lg:block'>
            <Navbar/>
          </div>
          <div className='col-span-full lg:col-span-4 p-5 bg-gray'>
            <MainPages />
          </div>

        </div>

      </Suspense>
    );
  }
}

export default App;
