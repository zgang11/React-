import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  foucusd:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
})

export default (state = defaultState , action) => {
  switch(action.type) {
    case constants.SEARCH_FOUCUS :
      return state.set('foucusd',true)
    case constants.HIDE_FOUCUS :
      return state.set('foucusd',false)
    case constants.CHANGE_LIST :
      return state.set('list',action.data).set('totalPage',action.totalPage)
    case constants.MOUSE_ENTER :
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE :
      return state.set('mouseIn',false)
    case constants.CHANGE_PAGE :
      return state.set('page',action.page)
    default:
      return state
  }
}
