module.exports = {
    title: 'Jine',  //标题
    keywords: '前端开发',
    description: '前端开发 Jine 的个人博客',
    repo: 'https://github.com/',  //仓库地址
    base: '/docs/',  // 配合部署项目
    head: [
        ['link', { rel: 'png', href: '/img/熊猫.png' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        logo: '/img/博客专家.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            { text: '码趣', link: '/code/' },
            { text: '赞赏', link: '/money/' },
            { text: 'About me', link: '/me/' },
            { text: 'CSDN', link: 'https://blog.csdn.net/weixin_42760849' }
        ],
        sidebar: 'auto',
        displayAllHeaders: true, // 默认值：false
    }
}

/*
以下例举俩个参数的描述如下：

title
类型: string
默认值: undefined
网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

#description
类型: string
默认值: undefined
网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。

注意：我的图片路径是在本地的doc/.vuepress/public/img
你在引入图片直接 /img/xxxx.png ，因为它会默认把public目录当做图片资源的根路径
*/
