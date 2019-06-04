import React , {Component} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {Link} from 'react-router-dom'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'


class Header extends Component {

  getListArea(){
    const { foucusd , list , page , mouseIn , totalPage ,logout} = this.props
    const newList = list.toJS()
    const pageList = []


    if(newList.length){
        for(let i = (page -1) * 10 ; i < page * 10 ;i++){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
    }

    if(foucusd || mouseIn){
      return (
        <SearchInfo
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
        >
            <SearchInfoTitle>
              搜一搜
              <SearchInfoSwitch onClick={() => this.props.handleChangePage(page,totalPage,this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon} } className="iconfont spin">&#xe7e9;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }

  render(){
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            this.props.login ? <NavItem onClick={this.props.logout}  className="right">退出</NavItem> : <Link to="login"><NavItem className="right">登录</NavItem></Link>
          }

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.foucusd}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.foucusd ? 'foucusd' : ''}
                onFocus={() => this.props.handleInputFoucus(this.props.list)}
                onBlur={this.props.handleInputBlur}
                ></NavSearch>
            </CSSTransition>
              <i className={this.props.foucusd ? 'foucusd iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
              {this.getListArea(this.props.foucusd)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state)  => {
  return{
    foucusd:state.get('header').get('foucusd'),
    list:state.getIn(['header', 'list']),
    page:state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),
    login:state.getIn(['login','login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFoucus(list){
      console.log(list)
      if(list.size === 0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFoucus())
    },

    handleInputBlur(){
      dispatch(actionCreators.hideFoucus())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage( page , totalPage , spin){
      let originAngle =  spin.style.transform.replace(/[^0-9]/ig,'')
      console.log(originAngle)
      if(originAngle){
        originAngle = parseInt(originAngle,10)
      }else{
        originAngle = 0
      }
      spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
      if(page < totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps , mapDispathToProps)(Header);
