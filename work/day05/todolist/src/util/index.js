export default {
  //从缓存中读取数据
  get(key,defVal){
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val): defVal;
  },
  //设置缓存中的数据
  set(key,val){
    localStorage.setItem(key,JSON.stringify(val))
  }
}
