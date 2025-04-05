import axios from 'axios';


const instance=axios.create({
    baseURL:'', //这里最好不要填值，否则会导致devserver.proxy代理失效
    timeout:5000,
    headers:{'X-Custom-Header':'vue-admin'}
});

instance.interceptors.request.use(config => {
    // 在请求发送前添加加载框或 token
    config.headers['Authorization'] = 'Bearer token';
    return config;
  }, error => {
    return Promise.reject(error);
  });
  
  instance.interceptors.response.use(response => {
    // 处理响应数据
    return response.data;
  }, error => {
    // 处理错误
    return Promise.reject(error);
  });
  
export default instance;
