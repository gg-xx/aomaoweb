import axios from "axios";
//后台地址和端口
let baseUrl = "http://localhost:8888";
//可以配置缺省的后台地址和端口
axios.defaults.baseURL="http://localhost:8888";

//获取商品类别列表ajax请求
export function getCategoryList(params) {
  return axios({
    url: `${baseUrl}/category/search`,
    method: "GET",
    params: params
  });
}

//添加商品类别信息
export function addCategory(params) {
  return axios({
    url: `${baseUrl}/category/add`,
    method: "POST",
    params: params
  });
}

//修改类别信息
export function editCategory(params) {
  return axios({
    url: `${baseUrl}/category/update`,
    method: "POST",
    params: params
  });
}

//删除类别信息
export function removeCategory(params) {
  return axios({
    url: `${baseUrl}/category/delete/${params}`,
    method: "DELETE"
  });
}

//登录信息
export function login(params) {
  return axios({
    url: `${baseUrl}/admin/exists`,
    method: "POST",
    params: params
  });
}





// -------------------------------------------------------------------------------------------------------------
//商品管理
//获取商品列表ajax请求
export function getProductList(params) {
  return axios({
    url: `${baseUrl}/product/search`,
    method: "GET",
    params: params
  });
}

//添加商品信息
export function addProduct(params) {
  return axios({
    url: `${baseUrl}/product/add`,
    method: "POST",
    params: params
  });
}

//修改信息
export function editProduct(params) {
  return axios({
    url: `${baseUrl}/product/update`,
    method: "POST",
    params: params
  });
}

//删除信息
export function removeProduct(params) {
  return axios({
    url: `${baseUrl}/product/delete/${params}`,
    method: "DELETE"
  });
}



// -------------------------------------------------------------------------------------------------------------
//订单管理
//获取列表ajax请求
export function getOrderList(params) {
  return axios({
    url: `${baseUrl}/order/search`,
    method: "GET",
    params: params
  });
}

//添加信息
export function addOrder(params) {
  return axios({
    url: `${baseUrl}/order/add`,
    method: "POST",
    params: params
  });
}

//修改信息
export function editOrder(params) {
  return axios({
    url: `${baseUrl}/order/update`,
    method: "POST",
    params: params
  });
}

//删除信息
export function removeOrder(params) {
  return axios({
    url: `${baseUrl}/order/delete/${params}`,
    method: "DELETE"
  });
}



// -------------------------------------------------------------------------------------------------------------
//用户管理
//获取列表ajax请求
export function getAdminList(params) {
  return axios({
    url: `${baseUrl}/admin/search`,
    method: "GET",
    params: params
  });
}

//添加信息
export function addAdmin(params) {
  return axios({
    url: `${baseUrl}/admin/add`,
    method: "POST",
    params: params
  });
}

//修改信息
export function editAdmin(params) {
  return axios({
    url: `${baseUrl}/admin/update`,
    method: "POST",
    params: params
  });
}

//删除信息
export function removeAdmin(params) {
  return axios({
    url: `${baseUrl}/admin/delete/${params}`,
    method: "DELETE"
  });
}