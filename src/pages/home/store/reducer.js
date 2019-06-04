import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  tipicList: [],
  articleList:[],
  recommedList:[],
  articlePage:1,
  showScroll:true
})

export default (state = defaultState , action) => {
  switch(action.type) {
    case  constants.CHANGE_HOME_DATA :
      return state.merge({
        tipicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommedList:fromJS(action.recommendList)
      })
    case  constants.ADD_ARTICLE_LIST :
      return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
      })
   case  constants.TOGGLE_SCROLL_TOP :
     console.log(action.flag)
     return state.set('showScroll',action.flag)
    default:
      return state
  }
}
