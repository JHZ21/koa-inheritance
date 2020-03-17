# 团队传承-后端

[数据库与接口文档](./inheritance-api-doc.md)




## 技术栈

* koa2 
* mongoose



## 功能

* 用户登陆与验证
  * 验证方式（cookies : userId+ sign , http-only ) 

* 后端来操作用户退出
  * 方式：清除 登陆信息cookies ( http-only )

* 文章阅读量
  * 每人每天最多给每篇文章阅读量+1 
  * 后端验证  json: ( 阅读数据对象 + sign + 新增阅读文章)
* 根据小类别，返回相应card数据









