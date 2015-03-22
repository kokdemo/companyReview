/**
 * Created by JiaHao on 2015/3/19 0019.
 */
var question = [
    {
        score: 5,
        questionText: '公司的创业项目有不错的前景',
        tag: 'mental'
    },
    {
        score: 5,
        questionText: '自己也认可公司的发展前景和项目',
        tag: 'mental'
    },
    {
        score: 5,
        questionText: '觉得公司与自己的发展一致',
        tag: 'mental'
    },
    {
        score: 5,
        questionText: '自己有足够的实力和意愿来公司工作',
        tag: 'mental'
    },
    {
        score: 5,
        questionText: '公司拿到融资风投等，或者自身是盈利的',
        tag: 'mental'
    },
    {
        score: 5,
        questionText: '公司有达到行业基本水平的工资',
        tag: 'substance'
    },
    {
        score: 5,
        questionText: '公司有达到行业平均水平的工资',
        tag: 'substance'
    },
    {
        score: 5,
        questionText: '公司有达到行业顶级水平的工资',
        tag: 'substance'
    },
    {
        score: 10,
        questionText: '有2~5个左右的Co-Founder，或者是一个人格魅力和有做事魄力的Boss',
        tag: 'founder'
    },
    {
        score: 10,
        questionText: 'Boss有做企业家的梦想和觉悟',
        tag: 'founder'
    },
    {
        score: 5,
        questionText: "Boss做技术出身，乐于使用新技术和框架",
        tag: 'founder'
    },
    {
        score: 5,
        questionText: "Boss在一些知名企业有过较长且骨干的工作经验，受到业内人事的认可 ",
        tag: 'founder'
    },
    {
        score: 5,
        questionText: "Boss的学历要在博士至本科之间，海外学历不限",
        tag: 'founder'
    },
    {
        score: 5,
        questionText: "有过2~3次创业经验的最佳",
        tag: 'founder'
    },


    {
        score: 10,
        questionText: '上级能经常与自己的员工进行交流，保证成员的政治正确与精神健康',
        tag: 'manage'
    },
    {
        score: 10,
        questionText: '项目管理有计划性，这周做什么，下周做什么，这个月做什么，项目的截止是什么',
        tag: 'manage'
    },
    {
        score: 10,
        questionText: '每半年之内能看到公司的成长',
        tag: 'manage'
    },
    {
        score: 10,
        questionText: '有可执行的激励机制，而不是想当然或者不执行',
        tag: 'manage'
    },
    {
        score: 5,
        questionText: '如果不是技术研讨会，或者大的工作结点总结，时间应该控制得尽量短',
        tag: 'manage'
    },
    {
        score: 5,
        questionText: '加班要有正当的加班理由，并且应该找出加班原因，以及要有避免方法',
        tag: 'manage'
    },
    {
        score: 5,
        questionText: '与其它一些创业公司有良性互动，学习的',
        tag: 'manage'
    },

    {
        score: 10,
        questionText: '有经验丰富的同事，最好是些资深专家，另一个角度证明我们做的事是有专家认可的',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '团队成员之间经常有交流,且交流的话题不限不工作和技术',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '团队成员结构简单',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '大部分团队成员都是技术兵',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '同事当中有Geek(社区的大牛/行业顶尖)',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '同事当中有些比较有品味的人',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '有几个妹子',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '同事同龄人为主，年轻人为主',
        tag: 'teammate'
    },
    {
        score: 5,
        questionText: '主流大学毕业的人为主',
        tag: 'teammate'
    },
    {
        score: 10,
        questionText: '提供开发工具（笔记本，电脑等）',
        tag: 'job'
    },
    {
        score: 10,
        questionText: '不做机械重复的事情',
        tag: 'job'
    },
    {
        score: 10,
        questionText: '可以放弃进度进行和代码重构，及项目的Codereview，保证工程质量',
        tag: 'job'
    },
    {
        score: 10,
        questionText: '鼓励使用Google，Stackoverflow，Github和开源社区',
        tag: 'job'
    },
    {
        score: 5,
        questionText: '使用Git 不使用SVN',
        tag: 'job'
    },
    {
        score: 5,
        questionText: '使用新的框架，而不使用没有人维护的老旧框架',
        tag: 'job'
    },
    {
        score: 5,
        questionText: '在工作中的作品可以在经过允许的情况下开源',
        tag: 'job'
    },
    {
        score: 8,
        questionText: '稳定的网速与带宽',
        tag: 'facility'
    },
    {
        score: 2,
        questionText: '提供VPN上外网',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '上班没有人盯着，有计划按计划来就好',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '除非有重要安排，有弹性工作时间和在家的远程办公',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '一周上五天班，周六上班应该有周六的工资',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '提供多显示器',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '提供外设，键盘，非廉价的办公椅',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '提供测试设备',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '提供基本零食',
        tag: 'facility'
    },
    {
        score: 4,
        questionText: '提供午餐',
        tag: 'facility'
    },
    {
        score: 1,
        questionText: '提供早餐',
        tag: 'facility'
    },
    {
        score: 4,
        questionText: '报销学习书籍',
        tag: 'facility'
    },
    {
        score: 1,
        questionText: '一些必要合理的正版开发软件',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '提供的开发工具最终奖励给员工个人',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '有定期和不定期的团建活动',
        tag: 'facility'
    },
    {
        score: 5,
        questionText: '在正规的办公场所，而不是某个民宅里',
        tag: 'facility'
    },
    {
        score: 10,
        questionText: '项目源于创新，或情怀，或理想，而不是山寨，抄袭',
        tag: 'project'
    },
    {
        score: 10,
        questionText: '项目本身能够盈利',
        tag: 'project'
    },
    {
        score: 10,
        questionText: 'UI设计强（移动开发，技术上的不足可以用UI来弥补）',
        tag: 'project'
    },
    {
        score: 5,
        questionText: '项目的创新要基于当前实力',
        tag: 'project'
    },
    {
        score: 5,
        questionText: '目标用户群体是百万级别，或者当前已经有数十万稳定用户',
        tag: 'project'
    }
];

var answer = [
    {
        score: 100,
        answer: '此处多待无益，尽早闪人'
    },
    {
        score: 160,
        answer: '最好也不要呆一年以上，团队难有技术上的进步，人员配置不会太稳定的，老板估计也不大方。没有太多的长远发展'
    },
    {
        score: 220,
        answer: '一般公司差不多都在这里，看看Boss的决心和对未来的规划，特别是自己能不能和老板合得来，多学习和借鉴一下别的公司，应该可以向上走一层'
    },
    {
        score: 260,
        answer: '这个公司有相当不错的工作体验和公司前景'
    },
    {
        score: 320,
        answer: '安安心心一起做事吧，能不能成事不敢说，但肯定可以结交到几个可靠的朋友（同事）和成长'
    },
    {
        score: 351,
        answer: '你已经在一艘宇宙飞船上了，抓紧坐好 :)'
    }
];