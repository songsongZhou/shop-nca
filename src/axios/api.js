import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js

export function shareSignature(url) {
    return fetch({
        url:api.Hallowmas+'/shareSignature',
        method:'POST',
        params:{
            url:url
        }
    })
}

export function register(username,password,nickname) {
    return fetch({
        url:api.Hallowmas+"/register",
        method:'POST',
        params:{
           userName:username,
           password:password,
           nickname:nickname
        }
    })
}

export function login(username,password) {
    return fetch({
        url:api.Hallowmas+"/login",
        method:'POST',
        params:{
            userName:username,
            password:password
        }
    })
}
export function getBanner() {
    return fetch({
        url:api.Hallowmas+'/getBanner',
        method:'get'
    })
}

export function getModuleGoods() {
    return fetch({
        url:api.Hallowmas+'/getModuleGoods',
        method:'get'
    })
}

// 获取分类
export function getCategorys() {
  return fetch({
    url:api.Hallowmas+'/getCategorys',
    method:'get'
  })
}

//根据分类获取商品分页

export function getGoodsByCId(categoryId,current) {
  return fetch({
    url:api.Hallowmas+'/getGoodsByCId',
    method:'POST',
    params:{
      cId:categoryId,
      current:current
    }
  })
}


export function getGoodsDetail(goodsId) {
  return fetch({
    url:api.Hallowmas+'/getGoodsDetail',
    method:'POST',
    params:{
      gId:goodsId
    }
  })
}

export function getCart(userId) {
  return fetch({
    url:api.Hallowmas+'/getCart',
    method:'POST',
    params:{
      userId:userId
    }
  })
}

