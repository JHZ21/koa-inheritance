
// 记录monodb数据库demo, 使得项目有初始数据，便于预览使用功能

/* eslint-disable no-unused-vars */

// learnNavData
const data1 = {
	index: 0,
	label: '方向:',
	aData: [
		{ id: 'fontEnd', text: '前端' },
		{ id: 'backEnd', text: '后端' },
		{ id: 'dataBase', text: '数据库' },
		{ id: 'principlesOfComputer', text: '计算机原理' },
	],
}
const data2 = {
	index: 1,
	label: '分类: ',
	aData: {
		fontEnd: [
			{ id: 'HTML/CSS', text: 'HTML/CSS' },
			{ id: 'JavaScript', text: 'JavaScript' },
			{ id: 'Vue.js', text: 'Vue.js' },
			{ id: 'Sass/Less', text: 'Sass/Less' },
		],
		backEnd: [{ id: 'a', text: 'a' }],
		dataBase: [{ id: 'a', text: 'a' }],
		principlesOfComputer: [{ id: 'a', text: 'a' }],
	},
}
const data3 = {
	index: 2,
	label: '级别:',
	aData: [
		{ id: 'junior', text: '初级' },
		{ id: 'intermediate', text: '中级' },
		{ id: 'senior', text: '高级' },
	],
}
// competNavData
const competNavData1 = {
	label: '比赛:',
	aData: [
		{
			id: 'dmtds.zjnu.edu.cn',
			text: '浙江省大学生多媒体作品设计竞赛',
		},
		{
			id: 'jsjds.ruc.edu.cn',
			text: '中国大学生计算机设计大赛',
		},
		{
			id: 'cy.ncss.cn',
			text: '中国\'互联网+\'大学生创新创业大赛',
		},
		{
			id: 'gjcxcy.bjtu.edu.cn',
			text: '国创',
		},
		{
			id: 'hsqn.zust.edu.cn',
			text: '新苗',
		},
		{
			id: 'chunmeng',
			text: '春萌',
		},
	],
}
const competNavData2 = {
	label: '时间:',
	aData: {
		'dmtds.zjnu.edu.cn': [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
		'jsjds.ruc.edu.cn': [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
		'cy.ncss.cn': [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
		'gjcxcy.bjtu.edu.cn': [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
		'hsqn.zust.edu.cn': [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
		chunmeng: [
			{
				id: '2021.1',
				text: '2021上',
			},
			{
				id: '2020.7',
				text: '2020下',
			},
			{
				id: '2020.1',
				text: '2020上',
			},
			{
				id: '2019.7',
				text: '2019下',
			},
			{
				id: '2019.1',
				text: '2019上',
			},
			{
				id: '2018.7',
				text: '2018下',
			},
			{
				id: '2018.1',
				text: '2018上',
			},
			{
				id: '2017.7',
				text: '2017下',
			},
			{
				id: '2017.1',
				text: '2017上',
			},
		],
	},
}