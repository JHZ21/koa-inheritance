# 1.inheritance 数据库文档

> 采用mongodb数据库



## 1.1 doc:  learnContent

> 关于 LearnContent Page 

| 属性       | 值类型 | 备注                     |
| ---------- | ------ | ------------------------ |
| id         | string | 为文章url的md5加密字符串 |
| articleUrl | string | id对应的文章url          |
| comments   | Array  | 评论区对象               |





```
{
    id: "1111",
    articleUrl: "https://www.baidu.com/",
    comments: []
}
```



### text

```js
https://blog.csdn.net/m0_37747665/article/details/83213276

2018秋招心路历程（8月-10月）—— 忙着开花儿



https://juejin.im/post/5e5c65fc6fb9a07cd00d8838

4W字长文带你深度解锁Webpack系列(上)



https://blog.qiufengh.com/blog/

秋风的博客


```





# 2.inheritance 前台 API 文档

## 2.2. LearnContent page

### 2.2.1. LearnGetContent api

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



### 2.2.2 learnUpdateContent api

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



