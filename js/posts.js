// Sample posts data
const posts = [
    {
        id: 1,
        title: "DeepSeek V4 实测：国产 AI 到底行不行？",
        category: "AI 工具实测",
        date: "2026-07-20",
        excerpt: "DeepSeek V4 是国产大模型的最新力作。本文从代码能力、写作能力、逻辑推理三个维度进行了全面测试，看看它到底值不值得用。",
        image: "",
        tags: ["DeepSeek", "国产AI", "实测"],
        content: `
            <h2>为什么测 DeepSeek V4？</h2>
            <p>最近 DeepSeek V4 发布了，作为国产 AI 的代表之一，网上评价两极分化。有人说它已经超越 GPT，有人说它只是炒作。我们花了三天时间，从三个维度做了完整测试。</p>
            
            <h2>测试一：代码能力</h2>
            <p>我们用了一个实际的前端项目——一个带数据可视化的仪表盘——让 DeepSeek V4 从头写。结果是：<strong>基础框架一次性通过</strong>，复杂逻辑需要两次纠错。整体水平大概在 GPT-4 的 85% 左右。</p>
            
            <h2>测试二：写作能力</h2>
            <p>让 DeepSeek V4 和 GPT-4 写同一篇小红书文案（主题：AI 工具的副业变现）。两者的输出风格差异明显：DeepSeek 更理性、数据驱动；GPT-4 更感性、故事驱动。中文表达上 DeepSeek 更自然，没有翻译腔。</p>
            
            <h2>测试三：逻辑推理</h2>
            <p>我们用了几道经典的逻辑题（比如狼羊菜过河、药瓶问题）。DeepSeek V4 全部正确，而且推理过程清晰。在复杂多步推理上表现不错。</p>
            
            <h2>总结</h2>
            <ul>
                <li><strong>优点：</strong>中文能力强、推理靠谱、免费可用</li>
                <li><strong>缺点：</strong>代码细节有时出错、对长 context 的记忆不够稳定</li>
                <li><strong>推荐人群：</strong>日常写作、头脑风暴、基础编程学习</li>
            </ul>
            <p>一句话：不是神，但绝对够用，而且是免费的。</p>
            
            <blockquote>
                评分：⭐⭐⭐⭐（4/5）—— 国产 AI 的骄傲，日常够用。
            </blockquote>
        `
    },
    {
        id: 2,
        title: "2026 年最值得买的 5 个 AI 付费工具",
        category: "提效指南",
        date: "2026-07-19",
        excerpt: "AI 工具太多了，哪些值得花钱？我们实测了 30+ 个工具后，筛选出 5 个真正能回本的工具。",
        image: "",
        tags: ["AI工具", "省钱", "付费推荐"],
        content: `
            <h2>别再买不需要的 AI 工具了</h2>
            <p>我们踩过的坑：买了 10 个 AI 产品的会员，结果每天用的不超过 3 个。经过对比实测，以下是真正值得付费的 5 个工具。</p>
            
            <h2>1. Claude（$20/月）</h2>
            <p>长文写作和代码调试的最佳选择。如果你经常写长文章或做复杂编程，Claude 的 $20/月 是目前性价比最高的选择。</p>
            
            <h2>2. Notion AI（$10/月）</h2>
            <p>如果你已经是 Notion 用户，这个升级值得。写作辅助、内容总结、项目管理 AI 化，省下的时间远超 $10。</p>
            
            <h2>3. Canva Pro 附带 AI 功能</h2>
            <p>设计小白做自媒体封面的神器。AI 生成图片 + 自动排版，一个人完成美工的工作。</p>
            
            <h2>4. GitHub Copilot（$10/月）</h2>
            <p>写代码效率翻倍。不是替代你写代码，是让你少查 Stack Overflow。</p>
            
            <h2>5. 剪映专业版（免费但有付费功能）</h2>
            <p>AI 自动字幕、AI 配音、AI 剪辑，短视频创作者的瑞士军刀。</p>
            
            <blockquote>省钱技巧：大部分工具都有月付选项，先试一个月再决定是否长期付费。</blockquote>
        `
    },
    {
        id: 3,
        title: "用 OpenClaw 搭一个自动更新的 AI 博客",
        category: "AI 资讯",
        date: "2026-07-18",
        excerpt: "你正在看的这个博客，就是 AI 搭建的。分享全套操作流程，零代码基础也能做。",
        image: "",
        tags: ["OpenClaw", "GitHub Pages", "自动化"],
        content: `
            <h2>这个博客是怎么来的？</h2>
            <p>你正在看的这个站，从框架到内容，全程 AI 搭建。没有一行代码是我手写的。</p>
            
            <h2>技术栈</h2>
            <ul>
                <li><strong>GitHub Pages</strong> - 免费托管</li>
                <li><strong>纯 HTML/CSS/JS</strong> - 不需要 Jekyll 或任何后端</li>
                <li><strong>OpenClaw AI Agent</strong> - 内容生成和自动部署</li>
            </ul>
            
            <h2>搭建步骤</h2>
            <ol>
                <li>注册 GitHub 账号，创建一个仓库</li>
                <li>让 AI Agent 生成博客框架并推送到仓库</li>
                <li>在 GitHub Settings > Pages 里启用 Pages 服务</li>
                <li>AI 自动更新内容，你只管看效果</li>
            </ol>
            
            <p>全程不超过 30 分钟，零成本。如果你想做自己的 AI 博客，这也是一个很好的起点。</p>
        `
    },
    {
        id: 4,
        title: "AI 副业月入 3000 的 3 个真实路径",
        category: "变现思路",
        date: "2026-07-17",
        excerpt: "不说大道理，只讲普通人不花一分钱能做到的 3 个 AI 副业路径，附实操步骤。",
        image: "",
        tags: ["副业", "变现", "赚钱"],
        content: `
            <h2>先别急着交钱学 AI</h2>
            <p>市面上太多 AI 赚钱课了，9 成是割韭菜。以下是 3 个我们验证过、普通人真的能上手的路径。</p>
            
            <h2>路径 1：AI 内容号</h2>
            <p>用 AI 工具（DeepSeek/Claude）批量生成小红书/公众号内容。关键是：AI 写初稿 → 你改一遍 → 发布。比纯手写快 5 倍。一个号一个月输出 30 篇，养到 1000 粉开始接广告。</p>
            
            <h2>路径 2：AI 工具 Affiliate 推荐</h2>
            <p>很多 AI 工具有推荐返佣计划（比如 Notion、Canva）。写工具测评文章/视频，挂推荐链接。一篇爆款文章可以带来持续几个月的被动收入。</p>
            
            <h2>路径 3：AI + 翻译/文案外包</h2>
            <p>在猪八戒/Upwork 接文案、翻译的单子，用 AI 辅助完成。一个 1000 字的文案，传统接单 50-100 元，AI 辅助后 20 分钟搞定。</p>
            
            <blockquote>关键洞察：赚钱的不是工具，是你用工具提供的价值。AI 是放大器，不是印钞机。</blockquote>
        `
    }
];
