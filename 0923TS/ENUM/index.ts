enum Status {
    One,
    Two,
    Three,
}

let q: Status.One;
q = Status['One'];


enum Stringenum {
    'error message' = 400,
    'success' = 200,
}

console.log(Stringenum[400])
console.log(Stringenum[200])

const enum Status1 {
    success = 200
}

const newStatus = Status1.success
const newStatus1 = Status1['200']

console.log(newStatus1,'halo1')
console.log(newStatus, 'halo')

enum Q1 {
    "服务器成功返回请求的数据。"=200,
     "新建或修改数据成功。"=201,
     '一个请求已经进入后台排队（异步任务）。'=202,
    '删除数据成功。'=204,
    '发出的请求有错误，服务器没有进行新建或修改数据的操作。'=400,
    '用户没有权限（令牌、用户名、密码错误）。'=401,
    '用户得到授权，但是访问是被禁止的。'=403,
    '发出的请求针对的是不存在的记录，服务器没有进行操作。'=404,
    '请求方法不被允许。'=405,
      '请求的格式不可得。'=406,
      '请求的资源被永久删除，且不会再得到的。'=410,
     '当创建一个对象时，发生一个验证错误。'=422,
      '服务器发生错误，请检查服务器。'=500,
      '网关错误。'=502,
     '服务不可用，服务器暂时过载或维护。'=503,
      '网关超时。'=504,
  
}



