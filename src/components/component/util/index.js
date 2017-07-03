export default{
  install(Vue,options)
  {
    Vue.prototype.getData = function () {
	  console.log("我的公共的方法组件")	
    }
  }
}