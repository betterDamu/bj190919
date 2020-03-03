import {SEARCHNAME} from "./mutation-types"
export default {
  [SEARCHNAME]:function({commit},val){
    commit(SEARCHNAME,val)
  }
}
