import axios from 'axios'

var HttpUtil={
	get:function(url,params,resFun,errFun){
		axios.get(url,{
			params:params
		})
		.then(resFun)
		.catch(errFun);
	},
	post:function(url,params,resFun,errFun){
		axios.post(url,params)
		.then(resFun)
		.catch(errFun);
	}
};

export default HttpUtil;