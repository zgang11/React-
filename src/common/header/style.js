import style from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = style.div `
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = style.div `
  position:absolute;
  top:0
  left:0
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = style.div`
  width:945px;
  height:100%;
  margin:0 auto;
`



export const NavItem = style.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px
  color:#333
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`

export const SearchWrapper = style.div`
  position:relative;
  float:left;
  .slide-enter {
    transition:all 0.2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit {
    transition:all 0.2s ease-out;
  }
  .slide-exit-active{
    width:160px;
  }
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.foucusd{
      color:#fff;
      background:#777;
    }
  }
`

export const SearchInfo = style.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:20px 20px 10px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = style.div`
  margin-bottom:15px;
  font-size:14px;
  color:#969696;
  line-height:20px;
`

export const SearchInfoSwitch = style.div`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin {
    display:block;
    float:left;
    font-size:12px;
    margin-right:3px;
    transition:all .4s ease-in;
    transform-origin:center center;
  }
`

export const SearchInfoItem = style.a`
  display:block;
  cursor:pointer;
  float:left;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#969696;
  border-radius:2px;
  margin-right:10px;
  margin-bottom:10px;
`

export const SearchInfoList = style.div`
  overflow:hidden;
`

export const NavSearch = style.input.attrs({
  placeholder:'搜索'
})`
  overflow:hidden;
  width:160px;
  height:38px;
  padding:0 35px 0 20px;
  margin-top:9px;
  box-sizing:border-box;
  margin-left:20px;
  border:none;
  outline:none;
  color:#666;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.foucusd{
    width:240px
  }
`

export const Addition = style.div`
  position:absolute;
  right:0;
  top:0;
  height:56px
  padding-right:60px;
`

export const Button = style.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  font-size:14px;
  &.reg {
    color:#ec6149;
  }
  &.writting {
    color:#fff;
    background:#ec6149;
  }
`
