import React , {PureComponent} from 'react'
import { RecommedWrapper ,  RecommedItem } from '../style'
import { connect } from 'react-redux'

class Recommed extends PureComponent {
  render(){
    const { list } = this.props
    return (
      <RecommedWrapper>
      {
        list.map((item) => {
          return (
            <RecommedItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
          )
        })
      }
      </RecommedWrapper>
    )
  }
}

const mapState = (state) => ({
  list:state.getIn(['home','recommedList'])
})

export default connect(mapState,null)(Recommed)
