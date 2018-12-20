import request from '@/utils/request'

export function getTaskpackageList(params) {
  return request({
    url: '/v3/taskpackages/',
    method: 'get',
    params
  })
}

export function uploadTaskpackage(params) {
  return request({
    url: '/taskpackageversion/',
    method: 'post',
    data: params
  })
}

export function getTPSubversionList(params) {
  let url = '/v3/taskpackagesons?taskpackage_name='+ params.name + '&page=' + params.page + '&limit=' + params.limit
  return request({
    url: url,
    method: 'get',
  })
}

export function atOperator(params) {
  return request({
    url: '/v3/taskpackageowners/',
    method: 'post',
    data: params
  })
}

export function atOperatorRecord(params) {
  let url = '/v3/taskpackageowners?taskpackage_name='+ params.name + '&page=' + params.page + '&limit=' + params.limit
  return request({
    url: url,
    method: 'get',
  })
}
