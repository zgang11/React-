import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  margin: 0 auto;
  overflow:hidden;
`
export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`

export const HomeRight = styled.div`
  float:right;
`

//////////////////////////////////  TopicWrapper    /////////////////////////
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
`

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  background:#f7f7f7;
  font-size:14px;
  border:1px solid #dcdcdc;
  padding-right:10px;
  border-radius:4px;
  margin-left:18px;
  margin-bottom:18px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`


//////////////////////////////////  ListItem    /////////////////////////
export const ListItem = styled.div`
  position:relative;
  padding:15px 2px 20px;
  margin:0 0 15px;
  width:100%;
  border-bottom:1px solid #f0f0f0;
  .pic{
    position:absolute;
    width:150px;
    height:100px;
    top:50%;
    right:0;
    margin-top:-60px;
    border-radius:4px;
  }
`

export const ListInfo = styled.div`
  padding-right:165px;
  .title{
    margin:-7px 0 4px;
    display:inherit;
    font-size:18px;
    font-weight:700;
    line-height:1.5;
  }
  .desc{
    margin:0 0 8px;
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`


export const LoadMore = styled.div`
  width:100%;
  height:40px;
  margin:30px auto 60px;
  text-align:center;
  font-size:15px;
  color:#fff;
  background:#a5a5a5;
  border-radius:20px;
  line-height:40px;
  cursor:pointer;
`

//////////////////////////////////  Recommed.js    /////////////////////////
export const RecommedWrapper = styled.div`
  margin:30px 0;
  width:280px;
`

export const RecommedItem = styled.div`
  width:280px;
  height:50px;
  margin-bottom:6px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
`


//////////////////////////////////  BackTop   /////////////////////////
export const BackTop = styled.div`
  cursor:pointer;
  position:fixed;
  text-align:center;
  font-size:10px;
  line-height: 50px;
  width:50px;
  height:50px;
  right:100px;
  bottom:100px;
  border: 1px solid #cfc6c6;
`
