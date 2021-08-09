import React from 'react';
import Menu from './tour/Menu'
import Cart from './Cart';
import Header from './project/food/header'
import Main from './project/food/Main '
// import Header from './tour/Header'
// import Footer from './tour/Footer'
// import Main from './tour/Main'

const App=()=>{
    return <>
        <Header />
        <Main />
        <Menu/>
        <Cart/>
    </>
}

export default App;

