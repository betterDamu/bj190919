import {SEARCHNAME} from "./mutation-types"
export default {
  [SEARCHNAME](state,val){
    state.searchName = val
  }
}
