import React , {PureComponent} from 'react'
import {HomeWrapper , HomeRight , HomeLeft} from './style'
import  Writer from './components/Writer'
import  Topic from './components/Topic'
import  List from './components/List'
import  Recommed from './components/Recommed'
import { actionCreators } from './store'
import {BackTop} from './style'

import {connect} from 'react-redux'

class Home extends PureComponent {

  handleScrollTop(){
    window.scrollTo(0,0)
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4617/8c9d800fc5f4b636dfccf4494159a3b8c22897c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommed/>
          <Writer/>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changScrollTopShow)
  }


}

const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changScrollTopShow(e){
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop >400){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home)
