import React, { Component ,Fragment } from 'react'
import Header from './common/header/index.js'
import {BrowserRouter , Route} from 'react-router-dom'
import { Provider } from  'react-redux'
import { GlobalStyle } from './style'
import Home from './pages/home'
import Detail from './pages/detail'
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js'
import Login from './pages/login'
import store from './store'


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <GlobalStyleIcon/>
        <Provider store = {store}>
          <BrowserRouter>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Login' exact component={Login}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>

    )
  }
}

export default App;
