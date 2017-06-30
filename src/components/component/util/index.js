export default{
  install(Vue,options)
  {
    Vue.prototype.getData = function () {
	  console.log(Vue)		
//    $router.back(-1)
    }
  }
}