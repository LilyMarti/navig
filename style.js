
    // ---------- 网站数据 ----------
    // 格式: 分类 | 标题 | 描述 | URL | 图标(emoji或字符)
    const sitesData = [
        { category: "📌 常用工具", title: "Gmail 邮箱", description: "Google 官方邮箱服务，收发邮件高效办公", url: "https://mail.google.com", icon: "📧" },
        { category: "📌 常用工具", title: "GitHub", description: "全球开发者社区，托管代码与开源项目", url: "https://github.com", icon: "🐙" },
        { category: "📌 常用工具", title: "DeepSeek", description: "深度求索 AI 助手，解答问题与创作", url: "https://chat.deepseek.com", icon: "🤖" },
        { category: "📌 常用工具", title: "Google 翻译", description: "快速翻译多国语言", url: "https://translate.google.com", icon: "🌐" },
        
        { category: "🎨 设计灵感", title: "Pinterest", description: "发现创意灵感、设计素材插画", url: "https://www.pinterest.com", icon: "📌" },
        { category: "🎨 设计灵感", title: "Dribbble", description: "顶尖设计师作品集与潮流设计", url: "https://dribbble.com", icon: "🏀" },
        { category: "🎨 设计灵感", title: "Figma 社区", description: "UI/UX 设计协作平台，海量资源", url: "https://www.figma.com/community", icon: "🎨" },
        { category: "🎨 设计灵感", title: "Awwwards", description: "获奖网页设计 showcase", url: "https://www.awwwards.com", icon: "🏆" },
        
        { category: "📰 资讯阅读", title: "知乎", description: "中文互联网高质量问答社区", url: "https://www.zhihu.com", icon: "❓" },
        { category: "📰 资讯阅读", title: "Medium", description: "深度优质文章与科技博客", url: "https://medium.com", icon: "📘" },
        { category: "📰 资讯阅读", title: "Hacker News", description: "科技与创业热点资讯", url: "https://news.ycombinator.com", icon: "💡" },
        { category: "📰 资讯阅读", title: "豆瓣电影", description: "电影评分与影评社区", url: "https://movie.douban.com", icon: "🎬" },
        
        { category: "💻 开发文档", title: "MDN Web Docs", description: "权威前端技术文档与示例", url: "https://developer.mozilla.org", icon: "📄" },
        { category: "💻 开发文档", title: "Stack Overflow", description: "编程问题解决社区", url: "https://stackoverflow.com", icon: "🧩" },
        { category: "💻 开发文档", title: "Python 官方", description: "Python 语言参考与教程", url: "https://www.python.org", icon: "🐍" },
        { category: "💻 开发文档", title: "Vue.js 中文", description: "渐进式框架中文文档", url: "https://cn.vuejs.org", icon: "⚡" },

        { category: "🎮 娱乐影音", title: "YouTube", description: "全球视频分享平台, 学习娱乐", url: "https://www.youtube.com", icon: "📺" },
        { category: "🎮 娱乐影音", title: "Spotify", description: "海量音乐与播客流媒体", url: "https://open.spotify.com", icon: "🎵" },
        { category: "🎮 娱乐影音", title: "Bilibili", description: "国内知名二次元弹幕视频站", url: "https://www.bilibili.com", icon: "📡" }
    ];

    // 预定义分类顺序 (可扩展)
    const categoryOrder = ["📌 常用工具", "🎨 设计灵感", "📰 资讯阅读", "💻 开发文档", "🎮 娱乐影音"];

    // 辅助函数: 重新组织分类数据
    function buildCategoryMap(data) {
        const map = new Map();
        for (const item of data) {
            const cat = item.category;
            if (!map.has(cat)) map.set(cat, []);
            map.get(cat).push(item);
        }
        // 按自定义顺序返回数组
        const sortedCategories = [];
        for (const key of categoryOrder) {
            if (map.has(key)) {
                sortedCategories.push({ name: key, items: map.get(key) });
                map.delete(key);
            }
        }
        // 剩余未在order中的分类追加到后面
        for (const [name, items] of map.entries()) {
            sortedCategories.push({ name, items });
        }
        return sortedCategories;
    }

    // 全局变量
    let currentSearchKeyword = '';
    let isListView = false;      // 列表/网格模式
    let isDarkMode = false;      // 暗色主题

    // DOM 元素
    const categoriesContainer = document.getElementById('categoriesContainer');
    const searchInput = document.getElementById('searchInput');
    const themeBtn = document.getElementById('themeToggleBtn');
    const layoutBtn = document.getElementById('layoutToggleBtn');
    const noResultDiv = document.querySelector('.no-results');

    // 存储原始完整数据用于搜索过滤
    let originalSites = [...sitesData];

    // 根据关键词过滤数据
    function filterSitesByKeyword(keyword) {
        if (!keyword.trim()) return [...originalSites];
        const kw = keyword.trim().toLowerCase();
        return originalSites.filter(site => 
            site.title.toLowerCase().includes(kw) ||
            site.description.toLowerCase().includes(kw) ||
            site.category.toLowerCase().includes(kw) ||
            site.url.toLowerCase().includes(kw)
        );
    }

    // 渲染：基于当前关键词，生成过滤后数据，构建分类展示
    function render() {
        const filtered = filterSitesByKeyword(currentSearchKeyword);
        
        if (filtered.length === 0) {
            categoriesContainer.innerHTML = '';
            noResultDiv.style.display = 'block';
            categoriesContainer.appendChild(noResultDiv);
            return;
        }
        noResultDiv.style.display = 'none';
        
        // 根据过滤后数据构建分类映射
        const categoryMap = new Map();
        for (const item of filtered) {
            const cat = item.category;
            if (!categoryMap.has(cat)) categoryMap.set(cat, []);
            categoryMap.get(cat).push(item);
        }
        
        // 按照固定顺序排序分类 (保留原有顺序但仅呈现存在的)
        const orderedCategories = [];
        for (const key of categoryOrder) {
            if (categoryMap.has(key)) {
                orderedCategories.push({ name: key, items: categoryMap.get(key) });
                categoryMap.delete(key);
            }
        }
        for (const [name, items] of categoryMap.entries()) {
            orderedCategories.push({ name, items });
        }
        
        // 开始生成HTML
        let html = '';
        for (const cat of orderedCategories) {
            const itemCount = cat.items.length;
            html += `
                <div class="category" data-category="${escapeHtml(cat.name)}">
                    <div class="category-header">
                        <div class="category-title">
                            ${escapeHtml(cat.name)} <span>${itemCount}</span>
                        </div>
                        <div class="count-badge">${itemCount}个站点</div>
                    </div>
                    <div class="card-grid" id="grid-${slugify(cat.name)}">
            `;
            for (const site of cat.items) {
                // 卡片内容
                html += `
                    <a href="${escapeHtml(site.url)}" target="_blank" rel="noopener noreferrer" class="nav-card">
                        <div class="card-icon">${escapeHtml(site.icon) || '🔗'}</div>
                        <div class="card-title">${escapeHtml(site.title)}</div>
                        <div class="card-desc">${escapeHtml(site.description)}</div>
                        <div class="card-url">${truncateUrl(site.url)}</div>
                    </a>
                `;
            }
            html += `</div></div>`;
        }
        categoriesContainer.innerHTML = html;
        
        // 如果当前是列表视图模式，追加类名到body
        // 我们不需要重复添加类，采用统一在渲染之后设置body类
        applyLayoutClass();
    }
    
    // 辅助转义HTML
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
            return c;
        });
    }
    
    // 简短URL显示
    function truncateUrl(url) {
        try {
            let host = new URL(url).hostname;
            if (host.length > 30) return host.substring(0, 27) + '...';
            return host;
        } catch(e) {
            return url.length > 35 ? url.substring(0, 32) + '...' : url;
        }
    }
    
    function slugify(str) {
        return str.replace(/\s+/g, '-').replace(/[^\w\u4e00-\u9fa5-]/g, '').slice(0, 30);
    }
    
    // 处理布局模式 (全局类名 list-view 控制)
    function applyLayoutClass() {
        if (isListView) {
            document.body.classList.add('list-view');
            layoutBtn.innerHTML = '🗂️ 网格视图';
        } else {
            document.body.classList.remove('list-view');
            layoutBtn.innerHTML = '📋 列表视图';
        }
    }
    
    // 主题切换
    function setTheme(dark) {
        if (dark) {
            document.body.classList.add('dark');
            themeBtn.innerHTML = '☀️ 明亮模式';
        } else {
            document.body.classList.remove('dark');
            themeBtn.innerHTML = '🌓 暗色模式';
        }
        localStorage.setItem('navThemeDark', dark ? 'true' : 'false');
        isDarkMode = dark;
    }
    
    function toggleTheme() {
        setTheme(!isDarkMode);
    }
    
    function toggleLayout() {
        isListView = !isListView;
        applyLayoutClass();
        // 因为卡片布局类只影响css样式，但网格还是flex改变，我们需要重新渲染确保list类正确挂载，但已有的类直接控制css，只需更新btn文本无需重绘。但以防某些浏览器突变，重新调用render可保留同样内容
        // 但重新渲染会重置dom？但从性能及保持状态来说已经通过 class 控制，不重新渲染也完美工作，但因为card-grid内容没有变化，只用样式切换。
        // 为了让按钮状态同步，只需应用类即可, 已经调用applyLayoutClass。无需重新生成数据，完美。
        // 但是先前的卡片样式是grid，通过.list-view .card-grid来变成flex列，所以不需要再render。OK
        // 我们再保存一下布局偏好
        localStorage.setItem('navLayoutList', isListView ? 'true' : 'false');
    }
    
    // 搜索输入事件处理
    function onSearchInput(e) {
        currentSearchKeyword = e.target.value;
        render();
    }
    
    // 初始化加载偏好
    function loadPreferences() {
        const savedTheme = localStorage.getItem('navThemeDark');
        if (savedTheme === 'true') {
            isDarkMode = true;
            setTheme(true);
        } else {
            isDarkMode = false;
            setTheme(false);
        }
        const savedLayout = localStorage.getItem('navLayoutList');
        if (savedLayout === 'true') {
            isListView = true;
        } else {
            isListView = false;
        }
        applyLayoutClass();
    }
    
    // 监听并初始渲染
    function init() {
        loadPreferences();
        render();
        searchInput.addEventListener('input', onSearchInput);
        themeBtn.addEventListener('click', toggleTheme);
        layoutBtn.addEventListener('click', toggleLayout);
        // 可选：鼠标悬浮优雅效果已经自带
        // 若新增网站数组支持动态加入（无需侧边栏，不做编辑面板，保持简洁)
    }
    
    // 启动
    init();
