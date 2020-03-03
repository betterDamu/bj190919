import {SEARCHNAME,GETLIST,REQING,
  REQSUCCESSHASDATA,REQSUCCESSNODATA} from "./mutation-types"
export default {
  [SEARCHNAME](state,val){
    state.searchName = val
  },
  [GETLIST](state,list){
    state.list = list
  },
  [REQING](state){
    state.showTip = false;
    state.showLoading = true;
    state.showNoBody = false;
  },
  [REQSUCCESSHASDATA](state){
    state.showTip = false;
    state.showLoading = false;
    state.showNoBody = false;
  },
  [REQSUCCESSNODATA](state){
    state.showTip = false;
    state.showLoading = false;
    state.showNoBody = true;
  }
}
