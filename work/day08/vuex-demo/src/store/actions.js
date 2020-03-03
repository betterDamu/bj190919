import {SEARCHNAME,GETLIST,REQING,
  REQSUCCESSHASDATA,REQSUCCESSNODATA} from "./mutation-types"
import axios from "axios";
export default {
  [SEARCHNAME]({commit},val){
    commit(SEARCHNAME,val)
  },
  async [GETLIST](store){
    //请求中
    store.commit(REQING)

    //怎么去获取list  发请求获取list
    const body = await axios({
      baseURL:"https://api.github.com",
      url:"/search/users",
      method:"get",
      params:{
        q:store.state.searchName
      }
    })
    let list = body.data.items.map(item =>({
      name:item.login,
      src:item.avatar_url,
      href:item.html_url
    }));

    if(list.length){
      //请求成功拥有数据
      store.commit(REQSUCCESSHASDATA)
    }else {
      //请求成功没有数据
      store.commit(REQSUCCESSNODATA)
    }

    //清空输入框
    store.commit(SEARCHNAME,"")
    store.commit(GETLIST,list)
  }
}
