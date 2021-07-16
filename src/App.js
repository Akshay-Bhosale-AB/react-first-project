import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './component/header';
import Home from './component/home';
import Store from './component/store';
import Iphone from './component/iphone';
import Ipad from './component/ipad';
import MacBook from './component/macbook';
import Accesories from './component/accesories';
import Cart from "./component/cart";
import Footer from "./component/footer";

class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/store" component={Store}/>
                    <Route path="/iphone" component={Iphone}/>
                    <Route path="/ipad" component={Ipad}/>
                    <Route path="/macbook" component={MacBook}/>
                    <Route path="/accesories" component={Accesories}/>
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>
            
            </>

        )
    }
}

export default App;