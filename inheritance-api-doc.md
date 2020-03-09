# inheritance 数据库文档

> 采用mongodb数据库



## doc: users

> 存储用户信息

### schema

| 属性    | 值类型   | 备注                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| userId  | string   | 用户id:  标志符 (注册时间戳字符穿+4位随机数)压缩为16位       |
| name    | string   | 用户名                                                       |
| pw      | string   | （compress）加密后的密码 16位                                |
| headUrl | string   | 头像链接                                                     |
| account | number   | 账号(暂定手机号，QQ申请中)                                   |
| roles   | string[] | 角色、职能， admin: 管理员， tourist：游客, user: 已经注册的用户 |

### example

```
{
    id: "1111",
    articleUrl: "https://www.baidu.com/",
    comments: []
}
```

### data

```js
// 管理员
// 密码：'abc'
{
    useId: "a20bcabdec498400",
    name: "abc",
    pw: "3cd24fb0d6963f7d",
    headUrl: "http://localhost:3000/images/21c1c757d6e124f4.gif",
    account: 17858884444,
    roles: ["admin"]
}

17858881111
pw: 1111

```





## doc:  learnContent

> 关于 LearnContent Page 

### schema

| 属性       | 值类型 | 备注                     |
| ---------- | ------ | ------------------------ |
| id         | string | 为文章url的md5加密字符串 |
| articleUrl | string | id对应的文章url          |
| comments   | Array  | 评论区对象               |

### example

```
{
    id: "1111",
    articleUrl: "https://www.baidu.com/",
    comments: []
}
```

### data

```js
https://blog.csdn.net/m0_37747665/article/details/83213276

2018秋招心路历程（8月-10月）—— 忙着开花儿



https://juejin.im/post/5e5c65fc6fb9a07cd00d8838

4W字长文带你深度解锁Webpack系列(上)



https://blog.qiufengh.com/blog/

秋风的博客


```





# inheritance 前台 API 文档



## User



### UserSignOut api

> httponly userId 前端自己无法修改，让后端来注销

- 请求路径：/user/signOut
- 请求方法：get
- 请求参数

| 属性 | 值类型 | 备注 |
| ---- | ------ | ---- |
|      |        |      |

- 响应参数

| 属性 | 值类型 | 备注 |
| ---- | ------ | ---- |
| code |        |      |

- 响应数据

```json
{
  "code": 200
}
```







### GETUSERINFO api

- 请求路径：/user/getUserInfo
- 请求方法：post
- 请求参数

| 属性   | 值类型 | 备注   |
| ------ | ------ | ------ |
| userId | string | 用户id |

- 响应参数

| 参数     | 参数类型 | 参数备注              |
| -------- | -------- | --------------------- |
| code     | number   | 状态 200:成功 -1:成功 |
| userInfo | object   | 用户信息              |

- 响应数据

```json
{
  "code": 200,
  "userInfo": 
    {
      "roles": [],
      "name": "用户1111",
      "headUrl": "http://localhost:3000/images/21c1c757d6e124f4.gif"
    }
  
}
{
  "code": -1
}
```







### UserLogin api

- 请求路径：/user/login
- 请求方法：post
- 请求参数

| 属性    | 值类型 | 备注       |
| ------- | ------ | ---------- |
| account | string | 暂为手机号 |
| pw      | string | 密码       |

- 响应参数

| 参数     | 参数类型 | 参数备注              |
| -------- | -------- | --------------------- |
| code     | number   | 状态 200:成功 -1:成功 |
| msg      | string   | 信息                  |
| userInfo | object   |                       |

- 响应数据

```json
{
  "code": 200,
  "msg": "登陆成功",
  "userInfo": 
    {
      "roles": [],
      "name": "用户1111",
      "headUrl": "http://localhost:3000/images/21c1c757d6e124f4.gif"
    }
  
}
{
  "code": -1,
  "msg"： "登录失败"
}
```





### UserRegister api

- 请求路径：/user/register
- 请求方法：post
- 请求参数

| 属性    | 值类型 | 备注       |
| ------- | ------ | ---------- |
| account | string | 暂为手机号 |
| pw      | string | 密码       |

- 响应参数

| 参数 | 参数类型 | 参数备注              |
| ---- | -------- | --------------------- |
| code | number   | 状态 200:成功 -1:成功 |
| msg  | string   | 信息                  |

- 响应数据

```json
{
  "code": 200,
  "msg"： "注册成功"
}
{
  "code": -1,
  "msg"： "account 已经存在"
}
```







## Learn Page



### LearnAddReadVolume api

- 请求路径：/learn/addReadVolume
- 请求方法：get
- 请求参数

| 属性   | 值类型 | 备注                     |
| ------ | ------ | ------------------------ |
| id     | string | 为文章url的md5加密字符串 |
| userId | string | 用户标志                 |

- 响应参数

| 参数       | 参数类型 | 参数备注                 |
| ---------- | -------- | ------------------------ |
| id         | string   | 为文章url的md5加密字符串 |
| articleUrl | string   | id对应的文章url          |
| comments   | Array    | 评论区对象               |

- 响应数据

```json
{
  "code": 200,
  "content": {
    "id": "707bff0a2d780e5bec9f560b180ad680",
    "articleUrl": "https://blog.qiufengh.com/blog/",
    "comments": []
  }
}
```





##  LearnContent page



###  LearnGetContent api

- 请求路径：/learn/getContent
- 请求方法：post
- 请求参数

| 属性       | 值类型 | 备注                     |
| ---------- | ------ | ------------------------ |
| id         | string | 为文章url的md5加密字符串 |
| articleUrl | string | id对应的文章url          |
| comments   | Array  | 评论区对象 可选          |

- 响应参数

| 参数       | 参数类型 | 参数备注                 |
| ---------- | -------- | ------------------------ |
| id         | string   | 为文章url的md5加密字符串 |
| articleUrl | string   | id对应的文章url          |
| comments   | Array    | 评论区对象               |

- 响应数据

```json
{
  "code": 200,
  "content": {
    "id": "707bff0a2d780e5bec9f560b180ad680",
    "articleUrl": "https://blog.qiufengh.com/blog/",
    "comments": []
  }
}
```



###  learnUpdateContent api

- 请求路径：/learn/updateContent
- 请求方法：post
- 请求参数

| 属性       | 值类型 | 备注                     |
| ---------- | ------ | ------------------------ |
| id         | string | 为文章url的md5加密字符串 |
| articleUrl | string | id对应的文章url          |
| comments   | Array  | 评论区对象, 可选         |

- 响应参数

| 参数       | 参数类型 | 参数备注                 |
| ---------- | -------- | ------------------------ |
| id         | string   | 为文章url的md5加密字符串 |
| articleUrl | string   | id对应的文章url          |
| comments   | Array    | 评论区对象               |

- 响应数据

```json
{
  "code": 200,
  "content": {
    "id": "707bff0a2d780e5bec9f560b180ad680",
    "articleUrl": "https://blog.qiufengh.com/blog/",
    "comments": []
  }
}
```



