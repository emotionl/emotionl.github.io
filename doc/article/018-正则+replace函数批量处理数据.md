# 正则+replace函数批量处理数据

## 需求

提取字符串中数据处理成数组嵌套对象的格式

处理前

```javascript
let str = `1.辅导
如何发挥每位员工都有独特的潜力？辅导是催化剂，学会辅导便能催化潜力。
Need a unique potential? Mastering coaching skill can catalyze people’s potential.


2.培养员工
员工是组织的最大资产，培养员工，就可以成就团队，繁荣组织。
Develop your employees to make your team and organization successful.



3.沟通难题
冲突是了解对方、了解自己的途径。通过无伤害式回应保护自己的同时保护对手。
Conflict is to understand. Communication is to protect.


4.多元化
多元化是一段追寻价值与尊重的旅程，管理者需换位思考去建立多元化联系。
Alter your mindset and build diversified connection to show your value and respect.



5.反馈要领
最有效的反馈是提出新挑战，鼓励员工学习和成长，如导师般持续沟通与激励。
Effective feedback is the key to greater results and higher engagement.


6.全球合作 APP里面叫全球协作
你目前或许不需要全球化协作，但不能不具备全球化视野去思考与解决问题。
Global collaboration might not be on your plate now, but the vision is a must.

7.招聘
你做的任何事都取决于你招聘的员工。学习如何招聘会让你的职业生涯会更成功。
You are who you hire. Recruiting the right talent is vital to thriving in your field.


8.   领导员工
领导员工可以表达自己的价值观，构建组织，让员工充实生活，并实现组织目标。
Lead it right, you’ll create a culture in which peoples’ work make their hearts sing.

 
9.   利用您的人际网络
人际网络的价值不单是解决问题，更有你与其他人之间的无形却强大的人际关系。
Networking not only solves problems, it also opens up your vision and opportunities.

 
10. 管理您的上司
你与上司的关系对你的成败至关重要，对上司越了解，越有利于把事情做到最好。
You and your boss are on the same boat. To succeed, you as well be on the same page.

 
11. 会议管理
会议越高效，结果就越好。这是你作为领导者脱颖而出的好机会。
Short and efficient meetings help you go a longer way and achieve greater success.

 
12. 绩效评估
绩效评估让员工了解公司的期望和对他们工作表现的反馈，并鼓励员工积极改进。
Performance review should be a motivation that elicits the staffs’ improvements. 

 
13. 说服他人
你的每个梦想都与他人相关，需通过他人实现。说服他人的能力是你成功的标志。
You always need a hand. How you persuade others determines how likely you’ll succeed.

 
14. 留住关键员工
以你希望的领导者对待你的方式对待你的员工，这才能把你的最佳员工留在身边。
Treating your employees the way you want to be treated keeps the best talent around. 

 
15. 团队组建
寻找性格适合的人确实重要，但你更应寻找的是愿意和渴望学习并分享知识的人。
Look not only for good spirit, but also for those who are eager to learn and share.

 
16. 团队管理
培养信任与团队认同感，简化政策，鼓励开放交流，促进协作，公允的绩效奖励。
Foster trust and set down clear regulations to create strong bonds between members.


17. 预算编制
预算编制会给你挑战，但也给你一个实现目标的机会。通过编制预算来掌控未来。
Budgeting is how you measure the resources you have in hand to control the future.

 
18. 撰写立项报告
立项报告涉及确定战略机会，以及确定各方可享有的好处与财务收益的挂钩。
A strong business case sets a clear view of your strategic opportunities and returns. 

 
19. 编写商业计划书
商业计划书是制定满足未满足的需求的战略，并证明团队的制胜能力与策应能力。
Use your business plan to pinpoint unmet customer needs and how you’ll fulfill them.

 
20. 变革管理
周围的变化是永恒且不可避免的，但可通过变革以使自己保持竞争力并正确前进。
Change is eternal. Knowing how to manage it keeps you on the top of your game.

21. 危机管理
危机管理是一个不断学习的过程，如遇危机请冷静并开放的发掘新机遇与新能力。
In the light of crisis, never stop learning and keep a clear mind for new breaks. 

 
22. 以客户为中心
你若认真倾听客户，他们便会反过来帮助你，二者是相互依存，协作双赢。
Pondering upon the true needs of your customers builds you a win-win relationship.

 
23. 决策
决策不是容易的事情，但若你了解决策的陷阱和复杂性，就可以提高成功的机会。
See through the complexity of decision making, you will make better decisions.

 
24. 授权
授权意味着放手，信任并赋予责任，提供支持与辅导，监督进度，但让员工主导。
Granting others trust and responsibilities are the key instruments of delegating.

 
25. 财务概要
我们不想生活在靠预感做决策的世界，在财务领域的一切都是可知的，可获得的。
Nowadays, finance is how we elaborate on what we can deliver and what we want.

 
26. 设定目标
确定目标与价值观，坚定愿景并用语言表达，确定短期与长期的行动目标与路径。
Think it through then put your goals down into words and transform them into actions.

 
27. 创新和创造力
你无法控制创新的灵光何时闪现。但创意的过程可以由你管理、培养和提升。
You can’t control when the bulb lights up, but the action afterwards is up to you. 


28. 实施创新
要不断尝试并持续收集反馈，在过程中不断改进计划，尝试并探索做事的新方法。
Stay hungry, stay innovative. There's no a bed of roses in business. 

 
29. 营销精要
向营销专家那样思考，你可以更好了解利益相关者要什么，以及你怎样帮助他们。
Think like an expert, what do the stakeholders want and how you can carry them out.

 
30. 谈判
我需要理解他们，他们也需要理解我，我们需要弄清楚我们之间能达成什么交易。
Keep in mind what our ultimate goals are, and how we can reach a deal on it. 


31. 绩效衡量
绩效衡量的核心目标是制定真正有用的标准，而不是展示你已衡量过这些绩效。
Performance measurement supports accountability and helps demonstrate success.

32. 流程优化
处理公司流程改进的最重要的方法是下定改进流程的决心。决心是第一步。
Set forth your commitment to improve your process and deliver greater value. 


33. 项目管理
运营良好的项目是企业发展和创新的动力，是学习复制推广经验的机会。
All project is an innovative journey and the impact may last longer than you think.


34. 战略思维
定义你的经营方式并能让你脱颖而出的理念是什么？这才是战略思维的核心问题。
What makes you stand out? Strategic thinking is your unique take on the future.


35. 战略规划与执行
执行就是让每个人按照既定的战略采取行动。战略在持续演变，组织要及时行动。
As a manager you have to lead your unit to connect their actions to the strategy. 


36. 职业生涯管理
成功，最大障碍是害怕失败和被拒绝，需靠信仰和勇气下的激情、行动与坚持。
Pursuing your dream is challenging. Thus, you should uphold your courage and grid.


37. 职业道德
忠诚代表一种价值观，有一些方法可以帮你系统、高效且公平地应对伦理挑战。
Ethical challenges can be handled fairly and efficiently via various ways.


38. 演讲技巧
演讲技能让人在任何场合或做的每件事中，都有感染性的自信和内驱力。
Building up presentation skill also strengthens your self-confidence wherever you go.


39. 压力管理
参与你热爱的活动，并不只是让你拥有好心情，这还是让你取得高绩效的好策略。
What builds great resiliency is the ability to engage in activities that bring us joy.


40. 时间管理
时间管理就是严于律己并保持专注和分清轻重缓急，能让你充实且快乐做好事情。
Discipline, focus and prioritizing are the three pillars of wise time management. 


41. 写作技巧
了解你的受众以创造吸引力。在明确目的下思考、组织、起草、修改及润饰文稿。
Understand your audience and craft your words carefully to fully convey your thought.`
```

处理后

```javascript
[{"id":"1","name":"辅导","docZh":"如何发挥每位员工都有独特的潜力？辅导是催化剂，学会辅导便能催化潜力。","docEn":"Need a unique potential? Mastering coaching skill can catalyze people’s potential."},{"id":"2","name":"培养员工","docZh":"员工是组织的最大资产，培养员工，就可以成就团队，繁荣组织。","docEn":"Develop your employees to make your team and organization successful."}]
```

## 解决

```javascript
// 确定正则
let regex = /(\d{1,2})\.\s*(.+)\n(.+)\n(.+)/g
// 创建空数组
let arr = []
// 处理
str.replace(regex, (match, p1, p2, p3, p4) => {
    let item = {
        id: p1,
        name: p2,
        docZh: p3,
        docEn: p4
    }
    arr.push(item)
})
// 打印结果
console.log(JSON.stringify(arr))
console.log(arr)
```

