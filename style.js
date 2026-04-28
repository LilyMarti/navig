  // ---------- 网站数据 ----------
    const sitesData = [
        { "category": "📌 常用工具", "title": "Gmail 邮箱", "description": "Google 官方邮箱服务，收发邮件高效办公", "url": "https://mail.google.com", "icon": "📧" },
        { "category": "📌 常用工具", "title": "GitHub", "description": "全球开发者社区，托管代码与开源项目", "url": "https://github.com", "icon": "🐙" },
        { "category": "📌 常用工具", "title": "DeepSeek", "description": "深度求索 AI 助手，解答问题与创作", "url": "https://chat.deepseek.com", "icon": "🤖" },
        { "category": "📌 常用工具", "title": "Google 翻译", "description": "快速翻译多国语言", "url": "https://translate.google.com", "icon": "🌐" },
        { "category": "🎨 设计灵感", "title": "Pinterest", "description": "发现创意灵感、设计素材插画", "url": "https://www.pinterest.com", "icon": "📌" },
        { "category": "🎨 设计灵感", "title": "Dribbble", "description": "顶尖设计师作品集与潮流设计", "url": "https://dribbble.com", "icon": "🏀" },
        { "category": "🎨 设计灵感", "title": "Figma 社区", "description": "UI/UX 设计协作平台，海量资源", "url": "https://www.figma.com/community", "icon": "🎨" },
        { "category": "🎨 设计灵感", "title": "Awwwards", "description": "获奖网页设计 showcase", "url": "https://www.awwwards.com", "icon": "🏆" },
        { "category": "🎨 设计灵感", "title": "Chatgpt_signal", "description": "获奖网页设计 showcase", "url": "https://opennana.com/awesome-prompt-gallery?model=ChatGPT", "icon": "🏆" },
        { "category": "📰 资讯阅读", "title": "知乎", "description": "中文互联网高质量问答社区", "url": "https://www.zhihu.com", "icon": "❓" },
        { "category": "📰 资讯阅读", "title": "Medium", "description": "深度优质文章与科技博客", "url": "https://medium.com", "icon": "📘" },
        { "category": "📰 资讯阅读", "title": "Hacker News", "description": "科技与创业热点资讯", "url": "https://news.ycombinator.com", "icon": "💡" },
        { "category": "📰 资讯阅读", "title": "豆瓣电影", "description": "电影评分与影评社区", "url": "https://movie.douban.com", "icon": "🎬" },
        { "category": "💻 开发文档", "title": "MDN Web Docs", "description": "权威前端技术文档与示例", "url": "https://developer.mozilla.org", "icon": "📄" },
        { "category": "💻 开发文档", "title": "Stack Overflow", "description": "编程问题解决社区", "url": "https://stackoverflow.com", "icon": "🧩" },
        { "category": "💻 开发文档", "title": "Python 官方", "description": "Python 语言参考与教程", "url": "https://www.python.org", "icon": "🐍" },
        { "category": "💻 开发文档", "title": "Vue.js 中文", "description": "渐进式框架中文文档", "url": "https://cn.vuejs.org", "icon": "⚡" },
        { "category": "🎮 娱乐影音", "title": "YouTube", "description": "全球视频分享平台, 学习娱乐", "url": "https://www.youtube.com", "icon": "📺" },
        { "category": "🎮 娱乐影音", "title": "Spotify", "description": "海量音乐与播客流媒体", "url": "https://open.spotify.com", "icon": "🎵" },
        { "category": "🎮 娱乐影音", "title": "Bilibili", "description": "国内知名二次元弹幕视频站", "url": "https://www.bilibili.com", "icon": "📡" },
        { "category": "🎮 娱乐影音", "title": "gequhai", "description": "音乐下载网站", "url": "https://www.gequhai.com", "icon": "🎵" },
        { "category": "🎮 娱乐影音", "title": "yinwe", "description": "流行在线听歌网站", "url": "https://www.yinwe.com/top", "icon": "🎵" },
        { "category": "常用导航", "title": "Tbox", "description": "Tbox导航", "url": "https://www.tboxn.com/", "icon": "🧭" },
        { "category": "常用导航", "title": "爱达杂货铺", "description": "爱达杂货铺", "url": "https://adzhp.cc", "icon": "🧭" },
        { "category": "编程学习", "title": "菜鸟教程", "description": "编程学习网站", "url": "https://www.runoob.com/", "icon": "👩🏾‍💻" },
        { "category": "编程学习", "title": "w3school", "description": "编程学习网站", "url": "https://www.w3school.com.cn/", "icon": "👩🏾‍💻" },
        { "category": "🎥影视娱乐", "title": "monket", "description": "猴子影视", "url": "https://monkey-flix.com/", "icon": "🎵" },
        { "category": "🎥影视娱乐", "title": "hhkan0", "description": "好好看", "url": "https://www.hhkan0.com/", "icon": "🎞️" },
        { "category": "🎥影视娱乐", "title": "kele影视导航", "description": "kele影视导航", "url": "https://www.klyingshi4.com/", "icon": "🎞️" },
        { "category": "外语学习", "title": "letmeenglish", "description": "英语聚合学习平台，集合多种英语学习方法和英语视频", "url": "https://letmeenglish.com/", "icon": "🔖" },
        { "category": "外语学习", "title": "quwertlearner", "description": "一个通过打字实习单词背诵的平台，包含多种单词表，四六级，考研和雅思词汇", "url": "https://qwerty.kaiyi.cool/", "icon": "📜" },
        { "category": "🧰工具导航", "title": "证件照格式修改", "description": "证件照一站式搞定", "url": "https://uutool.cn", "icon": "👔" },
        { "category": "🧰工具导航", "title": "mermaid流图图", "description": "uutool", "url": "https://www.min2k.com/tools/mermaid/", "icon": "📉" },
        { "category": "🧰工具导航", "title": "ai导航", "description": "ai-kit", "url": "https://ai-kit.cn/", "icon": "🥽" },
        { "category": "🧰工具导航", "title": "gamma", "description": "使用提示词快速生成高质量ppt", "url": "https://gamma.app/zh-cn", "icon": "🎵" },
        { "category": "🔍资源搜索", "title": "AnyBt", "description": "海里种子资源搜索", "url": "https://anybt.eth.link/#/", "icon": "📇" },
        { "category": "🔍资源搜索", "title": "海搜", "description": "聚合成千上万的学习文档，涵盖中小学，考研、考公等资料", "url": "https://haisou.cc/", "icon": "📇" },
        { "category": "🏛️国家政务信息公示", "title": "国家政务信息公示网", "description": "国家政务服务信息公示查询", "url": "https://gx.gsxt.gov.cn/", "icon": "🏡" }
    ];

    // 预定义分类顺序
    const categoryOrder = ["📌 常用工具", "🎨 设计灵感", "📰 资讯阅读", "💻 开发文档", "🎮 娱乐影音", "常用导航", "编程学习", "🎥影视娱乐", "外语学习", "🧰工具导航", "🔍资源搜索", "🏛️国家政务信息公示"];

    let currentSearchKeyword = '';
    let isListView = false;
    let isDarkMode = false;
    let originalSites = [...sitesData];

    const categoriesContainer = document.getElementById('categoriesContainer');
    const searchInput = document.getElementById('searchInput');
    const themeBtn = document.getElementById('themeToggleBtn');
    const layoutBtn = document.getElementById('layoutToggleBtn');
    const noResultDiv = document.querySelector('.no-results');

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

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

    // 核心渲染主内容
    function render() {
        const filtered = filterSitesByKeyword(currentSearchKeyword);
        if (filtered.length === 0) {
            categoriesContainer.innerHTML = '';
            noResultDiv.style.display = 'block';
            categoriesContainer.appendChild(noResultDiv);
            updateCatalog([]);
            return;
        }
        noResultDiv.style.display = 'none';
        const categoryMap = new Map();
        for (const item of filtered) {
            const cat = item.category;
            if (!categoryMap.has(cat)) categoryMap.set(cat, []);
            categoryMap.get(cat).push(item);
        }
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
        let html = '';
        for (const cat of orderedCategories) {
            const safeId = cat.name.replace(/[^\w\u4e00-\u9fa5]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
            const categoryId = `cat-${safeId}`;
            html += `<div class="category" id="${categoryId}" data-category="${escapeHtml(cat.name)}">
                <div class="category-header">
                    <div class="category-title">
                        <a href="#${categoryId}" class="anchor-link" title="跳转到此分类">🔗</a>
                        ${escapeHtml(cat.name)} <span>${cat.items.length}</span>
                    </div>
                    <div class="count-badge">${cat.items.length}个站点</div>
                </div>
                <div class="card-grid" id="grid-${slugify(cat.name)}">`;
            for (const site of cat.items) {
                html += `<a href="${escapeHtml(site.url)}" target="_blank" rel="noopener noreferrer" class="nav-card">
                    <div class="card-icon">${escapeHtml(site.icon) || '🔗'}</div>
                    <div class="card-title">${escapeHtml(site.title)}</div>
                    <div class="card-desc">${escapeHtml(site.description)}</div>
                    <div class="card-url">${truncateUrl(site.url)}</div>
                </a>`;
            }
            html += `</div></div>`;
        }
        categoriesContainer.innerHTML = html;
        applyLayoutClass();
        // 更新側边栏目录 (基于当前过滤后的分类)
        updateCatalog(orderedCategories);
    }

    // 侧边栏目录渲染 (无功能按钮，纯粹目录)
    function updateCatalog(categoriesList) {
        const catalogContainer = document.getElementById('catalogContainer');
        if (!catalogContainer) return;
        if (!categoriesList.length) {
            catalogContainer.innerHTML = '<div style="padding:20px; text-align:center;">✨ 暂无分类</div>';
            return;
        }
        let catHtml = '';
        for (const cat of categoriesList) {
            const safeId = cat.name.replace(/[^\w\u4e00-\u9fa5]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
            const elementId = `cat-${safeId}`;
            catHtml += `<div class="catalog-item">
                <div class="nav-catalog-item" data-target-id="${elementId}">
                    <span class="catalog-icon">📁</span>
                    <span class="catalog-name">${escapeHtml(cat.name)}</span>
                    <span class="catalog-count">${cat.items.length}</span>
                </div>
                <div class="catalog-sub">${cat.items.length} 个站点</div>
            </div>`;
        }
        catalogContainer.innerHTML = catHtml;
        // 绑定点击滚动定位
        document.querySelectorAll('.nav-catalog-item').forEach(el => {
            el.addEventListener('click', (e) => {
                const targetId = el.getAttribute('data-target-id');
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // 关闭侧边栏
                        closeSidebar();
                    } else {
                        console.warn('未找到元素', targetId);
                    }
                }
            });
        });
    }

    function applyLayoutClass() {
        if (isListView) {
            document.body.classList.add('list-view');
            layoutBtn.innerHTML = '🗂️ 网格视图';
        } else {
            document.body.classList.remove('list-view');
            layoutBtn.innerHTML = '📋 列表视图';
        }
    }

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

    function toggleTheme() { setTheme(!isDarkMode); }
    function toggleLayout() {
        isListView = !isListView;
        applyLayoutClass();
        localStorage.setItem('navLayoutList', isListView ? 'true' : 'false');
    }

    function onSearchInput(e) {
        currentSearchKeyword = e.target.value;
        render();
    }

    function loadPreferences() {
        const savedTheme = localStorage.getItem('navThemeDark');
        if (savedTheme === 'true') setTheme(true);
        else setTheme(false);
        const savedLayout = localStorage.getItem('navLayoutList');
        isListView = savedLayout === 'true';
        applyLayoutClass();
    }

    // 侧边栏交互 (纯目录)
    const sidebarTrigger = document.getElementById('sidebarTrigger');
    const sidebarPanel = document.getElementById('sidebarPanel');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    function openSidebar() {
        sidebarPanel.classList.add('open');
        sidebarOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebarPanel.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    if (sidebarTrigger) sidebarTrigger.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    function init() {
        loadPreferences();
        render();
        searchInput.addEventListener('input', onSearchInput);
        themeBtn.addEventListener('click', toggleTheme);
        layoutBtn.addEventListener('click', toggleLayout);
    }
    init();
