# inheritance 数据库文档

> 采用mongodb数据库



## ProjectContent doc

> 项目内容块，包含有项目介绍等

* schema

| 属性    | 值类型   | 备注                            |
| ------- | -------- | ------------------------------- |
| PId     | string   | 项目id,随机 16位,  属于哪个项目 |
| index   | number   | 排序顺序                        |
| time    | number   | 时间戳                          |
| title   | string   | 模块名                          |
| content | string[] | 具体内容                        |
| show    | boolean  | 是否展示                        |

* example

```
{
    title: "项目简介",
    PId: "128320832",
    index: 0,
    content: [
      "如题目所示，有一个数组 使用 v-for 循环遍历这个数组，进行渲染展示，当用户点击删除按钮的时候应对应的删除 相应的数组元素并且更新 dom",
      "的Joe我都是摸底哦欸哦莫i恶魔"
    ],
    show: true
},
   {
        title: "技术栈",
        pId: "128320832",
    index: 1,
        content: ["Vue", "Vue-router"],
        show: true
      }
```




## ProjectTeam doc

> 项目队伍

* schema

| 属性         | 值类型   | 备注                                |
| ------------ | -------- | ----------------------------------- |
| PId          | string   | 项目id,随机 16位,  属于哪个项目     |
| userId       | string   | 用户id                              |
| index        | number   | 排序顺序                            |
| ! headUrl    | string   | 不用存，头像路径， 从user 取headUrl |
| introduce    | string[] | 介绍内容                            |
| contribution | string[] | 贡献内容                            |
| show         | boolean  | 是否展示                            |



* example

	
	        {
	      	  PId: "128320832",
	          userId: "7354d9ca7a0b13cd",
	          index: 0,
	          introduce: [
	            "江小白",
	            "2017级",
	            "Web前端攻城狮",
	            "熟悉Vue全家桶",
	            "熟悉SCSS",
	            "Web前端攻城狮",
	            "熟悉Vue全家桶",
	            "熟悉SCSS",
	            "Web前端攻城狮",
	            "熟悉Vue全家桶",
	            "熟悉SCSS"
	          ],
	          contribution: [
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法"
	          ],
	          show: true
	        },
	        {
	          PId: "128320832",
	          userId: "05cd81ade1213f3f",
	          index: 1,
	          introduce: [
	            "江小白",
	            "2017级",
	            "Web前端攻城狮",
	            "熟悉Vue全家桶",
	            "熟悉SCSS"
	          ],
	          contribution: [
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
	            "打法的非法，阿飞，啊额，嗯阿发发的，大非法"
	          ],
	           show: true
	        },
	



## ProjectSteps doc

> 项目规划

* schema

| 属性      | 值类型   | 备注                            |
| --------- | -------- | ------------------------------- |
| PId       | string   | 项目id,随机 16位,  属于哪个项目 |
| index     | number   | 排序顺序                        |
| pleanId   | string   | 规划的id                        |
| planName  | string   | 规划名                          |
| master    | object   | 创建者信息userId                |
| stepsData | object[] | 具体规划步骤                    |
| activeNum | number   | 完成了步骤数                    |
| show      | boolean  | 是否展示                        |

* stepsData schema

| 属性        | 值类型 | 备注     |
| ----------- | ------ | -------- |
| deadline    | string | 截止时间 |
| description | string | 阶段描述 |
|             |        |          |



* example

```js
   {
       	PId: "128320832",
        planName: "前端",
        stepsData: [ {
      deadline: "2-21-2020",
      description:
        "这是一段很长很长很长的描述性文字。这是一段很长很长很长的描述性文字。"
    }],
        activeNum: 2,
        id: "3810238",
        master: {
            userId: '7354d9ca7a0b13cd'
        }
      }

```







## CompetProjects doc

> 竞赛导航数据
>
> 



* schema

| 属性     | 值类型   | 备注             |
| -------- | -------- | ---------------- |
| PId      | string   | 项目id,随机 16位 |
| PName    | string   | 项目名           |
| PSummary | string   | 项目介绍         |
| TName    | string   | 队名             |
| TMembers | object[] | 成员信息         |
| label_0  | number   | 分类1的key       |
| label_1  | number   | 分类2的key       |
| show     | boolean  | 是否展示         |

* example

```
{
    "_id" : ObjectId("5e737b935a3aa7d47c4cf337"),
    "id" : 128320832,
    "PName" : "hhhhhh",
    "PSummary" : "拉丁字母（以英语字母为代表）表与西里尔字母（与俄语字母为代表）表中的第一个字母。这个字母在很多领域均有应用，代表的含义各不相同，比如在物理中表示电",
    "TName" : "ABC",
    "TMembers" : [ 
        {
            "name" : "336"
        }, 
        {
            "name" : "226"
        }
    ],
    "label_0" : 0,
    "label_1" : 0,
    "show" : true
}
```

* data

```js
{
	project_name: "大二房价将藕带",
	content_items: [
      {
        title: "项目简介",
        content: [
          "如题目所示，有一个数组 使用 v-for 循环遍历这个数组，进行渲染展示，当用户点击删除按钮的时候应对应的删除 相应的数组元素并且更新 dom",
          "的Joe我都是摸底哦欸哦莫i恶魔"
        ]
      },
      {
        title: "技术栈",
        content: ["Vue", "Vue-router"]
      }
    ],
    team: {
      team_name: "的Jodi哦",
      members: [
        {
          id: "a0",
          portrait: require("@/assets/images/header_avator.gif"),
          introduce: [
            "江小白",
            "2017级",
            "Web前端攻城狮",
            "熟悉Vue全家桶",
            "熟悉SCSS",
            "Web前端攻城狮",
            "熟悉Vue全家桶",
            "熟悉SCSS",
            "Web前端攻城狮",
            "熟悉Vue全家桶",
            "熟悉SCSS"
          ],
          contribution: [
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法"
          ]
        },
        {
          id: "a1",
          portrait: require("@/assets/images/header_avator.gif"),
          introduce: [
            "江小白",
            "2017级",
            "Web前端攻城狮",
            "熟悉Vue全家桶",
            "熟悉SCSS"
          ],
          contribution: [
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法"
          ]
        },
        {
          id: "a2",
          portrait: require("@/assets/images/header_avator.gif"),
          introduce: [
            "江小白",
            "2017级",
            "Web前端攻城狮",
            "熟悉Vue全家桶",
            "熟悉SCSS"
          ],
          contribution: [
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法",
            "打法的非法，阿飞，啊额，嗯阿发发的，大非法"
          ]
        }
      ]
    },
   steps_objs:[
      {
        plan_name: "前端",
        power: false,
        steps_data: [ {
      deadline: "2-21-2020",
      description:
        "这是一段很长很长很长的描述性文字。这是一段很长很长很长的描述性文字。"
    }],
        activeNum: 2,
        id: "3810238",
        master: "a0"
      },
      {
        plan_name: "后端",
        power: false,
        steps_data: [ {
      deadline: "2-21-2020",
      description:
        "这是一段很长很长很长的描述性文字。这是一段很长很长很长的描述性文字。"
    }],
        activeNum: 3,
        id: "329dje3",
        master: "a1"
      }
    ] 
}
```







## CompetNavData doc

> 竞赛导航数据

* schema

| 属性  | 值类型                    | 备注         |
| ----- | ------------------------- | ------------ |
| index | number                    | 分类顺序     |
| label | string                    | 分类名       |
| aData | string[] \| string[]array | 分类下的选项 |

* example

```
{
    "_id" : ObjectId("5e5db47f9f02667a2b1087de"),
    "index" : 0,
    "label" : "方向:",
    "aData" : [ 
        "前端", 
        "后端", 
        "数据库", 
        "计算机原理", 
        "移动端", 
        "大数据"
    ]
}
```

* data

```js
const nav_data = [
  {
    label: "比赛:",
    aData: [
      "浙江省大学生多媒体作品设计竞赛",
      "中国大学生计算机设计大赛",
      `中国"互联网+"大学生创新创业大赛`,
      "国创",
      "新苗",
      "春萌"
    ]
  },
  {
    label: "时间:",
    aData: [
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ],
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ],
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ],
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ],
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ],
      [
        "2020上",
        "2019下",
        "2019上",
        "2018下",
        "2018上",
        "2017下",
        "2017上",
        "2016下",
        "2016上"
      ]
    ]
  }
]
```









## learnCardList doc

> 文章卡片数据

* schema

| 属性           | 值类型  | 备注                                   |
| -------------- | ------- | -------------------------------------- |
| id             | String  | 文章标致符，有articleUrl hash而来 16位 |
| articleUrl     | String  | 文章链接                               |
| title          | string  | 文章标题，介绍                         |
| uploader       | object  | 上传者信息,  object: 可扩展性好        |
| imgUrl         | string  | 头像链接，无协议和host                 |
| timeStamp      | number  | 创建时间戳                             |
| readVolume     | number  | 文章阅读量                             |
| isAllowedFrame | boolean | 网页frame是否允许跨域                  |
| label_0        | number  | 分类1的key                             |
| label_1        | number  | 分类2的key                             |
| label_2        | number  | 分类3的key                             |
| show           | boolean | 是否展示，false: 被删除,不展示         |

```
uploader: {
	"name": "abc"
}
```

* example

```
{
    "_id" : ObjectId("5e5e0dae6f3b8d6e6827c8aa"),
    "imgUrl" : "images/05bd483854f98760.jpg",
    "label_0" : 8,
    "label_1" : 20,
    "label_2" : 3,
    "title" : "九可参式前县造风压西市物间。",
    "id" : 2222,
    "uploader" : "常秀兰",
    "timeStamp" : 1555172878960.0,
    "readVolume" : 1,
    "show" : false
}
```





##  learnNavData doc

> 关于学习文章分类导航

* schema

| 属性  | 值类型                    | 备注         |
| ----- | ------------------------- | ------------ |
| index | number                    | 分类顺序     |
| label | string                    | 分类名       |
| aData | string[] \| string[]array | 分类下的选项 |

* example

```
{
    "_id" : ObjectId("5e5db47f9f02667a2b1087de"),
    "index" : 0,
    "label" : "方向:",
    "aData" : [ 
        "前端", 
        "后端", 
        "数据库", 
        "计算机原理", 
        "移动端", 
        "大数据"
    ]
}
```





## learnContent doc

> 关于 LearnContent Page 

* schema

| 属性       | 值类型 | 备注                     |
| ---------- | ------ | ------------------------ |
| id         | string | 为文章url的md5加密字符串 |
| articleUrl | string | id对应的文章url          |
| comments   | Array  | 评论区对象               |

* example

```
{
    id: "1111",
    articleUrl: "https://www.baidu.com/",
    comments: []
}
```

* data

```js
https://blog.csdn.net/m0_37747665/article/details/83213276

2018秋招心路历程（8月-10月）—— 忙着开花儿



https://juejin.im/post/5e5c65fc6fb9a07cd00d8838

4W字长文带你深度解锁Webpack系列(上)



https://blog.qiufengh.com/blog/

秋风的博客


```





## learnRotationUrl doc

> 关于  learn 页面的轮播图路径

* schema

| 属性 | 值类型 | 备注     |
| ---- | ------ | -------- |
| url  | string | 图片路径 |

* example

```
{
    "_id" : ObjectId("5e6b6db261fcb538f6b88c7b"),
    "url" : "images/55a74100a4762b71.jpg"
}
```





## users doc

> 存储用户信息

* schema

| 属性    | 值类型   | 备注                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| userId  | string   | 用户id:  标志符 (注册时间戳字符穿+4位随机数)压缩为16位       |
| name    | string   | 用户名                                                       |
| pw      | string   | （compress）加密后的密码 16位                                |
| headUrl | string   | 头像链接                                                     |
| account | number   | 账号(暂定手机号，QQ申请中)                                   |
| roles   | string[] | 角色、职能， admin: 管理员， tourist：游客, user: 已经注册的用户 |

* example

```
{
    id: "1111",
    articleUrl: "https://www.baidu.com/",
    comments: []
}
```

* data

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

17858884444
pw:abc
roles:["admin"]

17858881111
pw: 1111

```







# inheritance 前台 API 文档



## Compet





### deleteSteps api

- 请求路径：/compet/deleteSteps
- 请求方法：post
- 请求参数

| 属性    | 值类型 | 备注                            |
| ------- | ------ | ------------------------------- |
| PId     | string | 项目id,随机 16位,  属于哪个项目 |
| pleanId | string | 规划的id                        |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注 |
| ---- | -------- | -------- |
| code |          |          |
|      |          |          |

- 响应数据

```json

```



### updateSteps api

- 请求路径：/compet/updateSteps
- 请求方法：post
- 请求参数

| 属性      | 值类型   | 备注                            |
| --------- | -------- | ------------------------------- |
| PId       | string   | 项目id,随机 16位,  属于哪个项目 |
| index     | number   | 排序顺序                        |
| pleanId   | string   | 规划的id                        |
| planName  | string   | 规划名                          |
| master    | object   | 创建者信息userId                |
| stepsData | object[] | 具体规划步骤                    |
| activeNum | number   | 完成了步骤数                    |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注     |
| ---- | -------- | ------------ |
| code |          |              |
| team | object[] | 更新后的team |
|      |          |              |

- 响应数据

```json

```





### updateTeam api

- 请求路径：/compet/updateTeam
- 请求方法：post
- 请求参数

| 属性           | 值类型   | 备注           |
| -------------- | -------- | -------------- |
| PId            | string   | 项目id         |
| me             | object   | 需要包含userId |
| addMembers     | object[] |                |
| deletedMembers | object[] |                |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注     |
| ---- | -------- | ------------ |
| code |          |              |
| team | object[] | 更新后的team |
|      |          |              |

- 响应数据

```json

```





### updatePName api

- 请求路径：/compet/updatePName 
- 请求方法：post
- 请求参数

| 属性  | 值类型 | 备注   |
| ----- | ------ | ------ |
| PId   | string | 项目id |
| PName | string | 项目名 |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注 |
| ---- | -------- | -------- |
| code |          |          |

- 响应数据

```json

```





### ！updatePjContents api

- 请求路径：/compet/updatePjContents
- 请求方法：post
- 请求参数？？

| 属性            | 值类型   | 备注     |
| --------------- | -------- | -------- |
| contents        | object[] | 内容数组 |
| deletedContents | object[] |          |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注 |
| ---- | -------- | -------- |
| code |          |          |

- 响应数据

```json

```





### getProject api

- 请求路径：/compet/getProject
- 请求方法：post
- 请求参数

| 属性 | 值类型 | 备注        |
| ---- | ------ | ----------- |
| pId  | number | 项目id,随机 |

> 初步，允许所有人访问，公开原则
>
> 功能升级时，
>
> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数    | 参数类型 | 参数备注 |
| ------- | -------- | -------- |
| code    | number   |          |
| project | object   |          |

* project 参数 schema

| 参数      | 参数类型 | 参数备注   |
| --------- | -------- | ---------- |
| PName     | string   | 项目名字   |
| TName     | string   | 团队名字   |
| contents  | object[] | 项目内容们 |
| team      | object[] | 队员信息   |
| stepsList | object[] | 规划表们   |



- 响应数据

```json

```







### uploadProject api

- 请求路径：/compet/uploadProject
- 请求方法：post
- 请求参数

| 属性      | 值类型   | 备注                 |
| --------- | -------- | -------------------- |
| pId       | number   | 项目id,随机          |
| PName     | string   | 项目名               |
| PSummary  | string   | 项目介绍             |
| TName     | string   | 队名                 |
| TMembers  | object[] | 成员信息 userId,name |
| aSelected | number[] | 分类信息             |
| img       | file     | 图片文件             |
| show      | boolean  | 是否展示             |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注 |
| ---- | -------- | -------- |
| code |          |          |

- 响应数据

```json

```









### getProjectCards api

- 请求路径：/compet/getProjectCards
- 请求方法：post
- 请求参数

| 属性      | 值类型   | 备注     |
| --------- | -------- | -------- |
| aSelected | number[] | 分类数组 |

- 响应参数

| 参数         | 参数类型 | 参数备注     |
| ------------ | -------- | ------------ |
| code         |          |              |
| projectCards | object[] | 项目卡片数组 |

- 响应数据

```json
{
  "code": 200,
  "cards": [
    {
    },
    ......
      ]   
 }
```





### getNavData api

- 请求路径：/compet/getNavData
- 请求方法：get
- 请求参数

| 属性 | 值类型 | 备注 |
| ---- | ------ | ---- |
|      |        |      |



- 响应参数

| 参数    | 参数类型 | 参数备注 |
| ------- | -------- | -------- |
| code    | number   |          |
| navData | object[] | 导航数据 |

- 响应数据

```json
{
    code: 200,
    navData: [
        {
            "_id" :  ObjectId("5e5db47f9f02667a2b1087de"),
            "index" : 0,
            "label" : "方向:",
            "aData" : [ 
                "前端", 
                "后端", 
                "数据库", 
                "计算机原理", 
                "移动端", 
                "大数据"
            ]
        },
      .......
    ]
}
```





## Learn 





### LearnGetCards api

- 请求路径：/learn/getCards
- 请求方法：post
- 请求参数

| 属性      | 值类型   | 备注     |
| --------- | -------- | -------- |
| aSelected | number[] | 分类数组 |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数  | 参数类型 | 参数备注 |
| ----- | -------- | -------- |
| code  |          |          |
| cards | object[] | 卡片数组 |

- 响应数据

```json
{
  "code": 200,
  "cards": [
    {
      "id": "bae22dbce66c9129",
      "__v": 0,
      "articleUrl":"https://juejin.im/post/5d3a6d9e51882570d50f5566",
      "imgUrl": "images/acd48d93a8a4b9d0.png",
      "isAllowedFrame": false,
      "label_0": 0,
      "label_1": 0,
      "label_2": 0,
      "readVolume": 1,
      "show": true,
      "timeStamp": 1584546169590,
      "title": "解密初、中、高级程序员的进化之路（前端）",
      "uploader": {
        "name": "用户1111"
      }
    },
    ......
      ]   
 }
```





### LearnRotationUrl api

- 请求路径：/learn/rotationUrl
- 请求方法：get
- 请求参数

| 属性 | 值类型 | 备注 |
| ---- | ------ | ---- |
|      |        |      |



- 响应参数

| 参数        | 参数类型 | 参数备注   |
| ----------- | -------- | ---------- |
| code        | number   |            |
| rotationUrl | string[] | 轮播图路径 |

- 响应数据

```json
{
    code: 200,
    rotationUrl: [
	    "url" : "images/55a74100a4762b71.jpg"，
     	 .......
    ]
}
```





### LearnNavData api

- 请求路径：/learn/getNavData
- 请求方法：get
- 请求参数

| 属性 | 值类型 | 备注 |
| ---- | ------ | ---- |
|      |        |      |

- 响应参数

| 参数    | 参数类型 | 参数备注 |
| ------- | -------- | -------- |
| code    | number   |          |
| navData | object[] | 导航数据 |

- 响应数据

```json
{
    code: 200,
    navData: [
        {
            "_id" :  ObjectId("5e5db47f9f02667a2b1087de"),
            "index" : 0,
            "label" : "方向:",
            "aData" : [ 
                "前端", 
                "后端", 
                "数据库", 
                "计算机原理", 
                "移动端", 
                "大数据"
            ]
        },
      .......
    ]
}
```





### LearnUploadCard api

- 请求路径：/learn/uploadCard
- 请求方法：post
- 请求参数

| 属性       | 值类型   | 备注       |
| ---------- | -------- | ---------- |
| title      | string   | 标题       |
| articleUrl | string   | 文章路径   |
| timeStamp  | number   | 创立时间戳 |
| aSelected  | number[] | 分类数组   |
| img        | file     | 图片       |

> uploader 的userId ，随cookie发送到后端，
>
> 而且有userIdSign, 发送者信息不易伪造，更安全



- 响应参数

| 参数 | 参数类型 | 参数备注 |
| ---- | -------- | -------- |
| code |          |          |

- 响应数据

```json

```







### LearnAddReadVolume api

- 请求路径：/learn/addReadVolume
- 请求方法：post
- 请求参数

| 属性                | 值类型 | 备注                                                         |
| ------------------- | ------ | ------------------------------------------------------------ |
| dailyRead           | array  | 每日已阅读过的文章id                                         |
| dailyRead.timeStamp | number | 每日第一次提交的时间戳(后端写入)，用于使得每人每天每篇文章阅读量只能加+1 |
| sign                | string | 信息签名(确保信息不被篡改)                                   |
| newRead             | array  | 新阅读文章id                                                 |

- 请求数据

```json
{
 dailyRead:{
 	oldRead: [
        'dsewd',"ewsdsde"
    ],
 	timeStamp: 1578452885584
 },
 sign: 'dsiwjeijsosdsw',
 newRead: ["dsdwed"]
}
```

- 响应参数

| 属性      | 值类型   | 备注                                                         |
| --------- | -------- | ------------------------------------------------------------ |
| code      | nubmer   |                                                              |
| dailyRead | string[] | 每日阅读过的文章id                                           |
| timeStamp | string   | 每日第一次提交的时间戳(后端写入)，用于使得每人每天每篇文章阅读量只能加+1 |
| sign      | string   | 新的信息签名                                                 |

- 响应数据

```json
{
  "code": 200,
  "dailyRead": {
    "oldRead": [
      "41760e06ccea3781"
    ],
    "timeStamp": 1584259772101
  },
  "sign": "d6ce865673d1d8664d02c8e6572504ac1b2a62008c8ee8e056c7b8a6e394a9f3",
  "resArr": [
    {
      "n": 1,
      "nModified": 1,
      "ok": 1
    }
  ]
}
```





##  LearnContent 



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

- 返回 cookies 

| 参数       | 参数类型 | 参数备注   |
| ---------- | -------- | ---------- |
| userId     | string   | 用户id     |
| userIdSign | stirng   | 用户id签名 |



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





