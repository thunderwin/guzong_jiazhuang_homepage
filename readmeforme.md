# 佛山市绎间科技有限公司官网项目分析文档

## 一、项目概述

本项目是 **佛山市绎间科技有限公司** 的企业官网，定位为"全屋设计出海一体化平台"。项目基于 Nuxt.js 4 框架构建，采用现代化的前端技术栈，支持中英文双语切换、深色/浅色主题切换，是一个功能完善、设计精美的企业 Landing Page。

### 项目基本信息

| 项目属性 | 说明 |
|---------|------|
| 项目名称 | nuxt-ui-template-landing |
| 项目类型 | 企业官网 / Landing Page |
| 开发框架 | Nuxt.js 4.4.2 |
| UI 框架 | Nuxt UI 4.5.1 |
| 包管理器 | pnpm 10.32.1 |
| 默认语言 | 中文 (zh) |
| 支持语言 | 中文 / 英文 |

---

## 二、技术栈详解

### 核心依赖

```json
{
  "nuxt": "^4.4.2",           // 主框架
  "@nuxt/ui": "^4.5.1",       // UI组件库
  "@nuxt/content": "^3.12.0", // 内容管理模块
  "@nuxt/image": "^2.0.0",    // 图片优化模块
  "@nuxtjs/i18n": "^10.2.4",  // 国际化模块
  "tailwindcss": "^4.2.1"     // CSS框架
}
```

### 开发工具依赖

- **eslint**: 代码质量检查
- **typescript**: TypeScript 支持
- **vue-tsc**: Vue 类型检查

### 图标资源

- **@iconify-json/lucide**: Lucide 图标集
- **@iconify-json/simple-icons**: Simple Icons 图标集

---

## 三、项目结构

```
guzong_jiazhuang_homepage/
├── app/                          # 应用核心目录
│   ├── app.vue                   # 应用入口组件
│   ├── app.config.ts             # 应用配置
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # 主样式文件
│   ├── components/               # 组件目录
│   │   ├── AppHeader.vue         # 页头组件 (导航栏)
│   │   ├── AppFooter.vue         # 页脚组件
│   │   ├── AppLogo.vue           # Logo组件
│   │   ├── HeroBackground.vue    # Hero区域背景
│   │   ├── StarsBg.vue           # 星星背景效果
│   │   └── TemplateMenu.vue      # 模板菜单
│   └── pages/                    # 页面目录
│       ├── index.vue             # 首页
│       ├── about.vue             # 关于我们页
│       └── jobs.vue              # 招聘岗位页
│
├── locales/                      # 国际化语言文件
│   ├── zh.json                   # 中文语言包
│   ├── en.json                   # 英文语言包
│
├── content/                      # 内容目录
│   └── index.yml                 # 首页内容配置
│
├── public/                       # 静态资源
│   └── images/                   # 图片资源
│       ├── light/                # 浅色主题图片
│       ├── dark/                 # 深色主题图片
│       └── house-tech.svg        # 技术示意图
│
├── nuxt.config.ts                # Nuxt配置文件
├── content.config.ts             # 内容配置
├── tsconfig.json                 # TypeScript配置
├── eslint.config.mjs             # ESLint配置
├── package.json                  # 项目依赖配置
├── pnpm-workspace.yaml           # pnpm工作空间配置
├── vercel.json                   # Vercel部署配置
├── deploy.sh                     # 部署脚本
│
├── .github/
│   └── workflows/
│       └── ci.yml                # CI/CD配置
│
├── README.md                     # 项目说明文档
├── LICENSE                       # 许可证文件
├── about_us.md                   # 关于我们文档
├── jobs.md                       # 招聘文档
│
└── renovate.json                 # 依赖更新配置
```

---

## 四、页面功能说明

### 4.1 首页 (index.vue)

首页是项目的核心页面，包含以下主要模块：

| 模块 | 功能描述 |
|------|---------|
| **Hero区域** | 展示公司核心定位"以AI驱动全屋设计出海"，包含两个CTA按钮 |
| **产业平台能力结构** | 展示前中后台一体化协同能力（AI设计提效、供应链整合、全球交付） |
| **核心竞争力** | 6大核心能力卡片展示（AI设计引擎、产业带整合、全屋定制等） |
| **3步闭环流程** | 展示从需求到交付的业务流程（需求诊断→AI设计→供应链履约） |
| **商业模式** | 项目制合作和渠道合作两种商业模式展示 |
| **团队与增长基础** | 展示团队经验和业务战绩 |
| **CTA区域** | 底部号召行动区域，引导用户咨询合作 |

### 4.2 关于我们页 (about.vue)

展示公司详细信息：
- 公司定位与使命
- 核心能力体系详解
- 团队优势展示
- 商业模式与长期愿景

### 4.3 招聘岗位页 (jobs.vue)

完整的招聘信息展示系统：
- 岗位列表侧边栏（左侧固定）
- 岗位详情展示（右侧内容区）
- 投递方式说明区域

**当前开放岗位**（共9个）：

| 岗位名称 | 类型 | 级别 |
|---------|------|------|
| 海外社媒运营主管 | 全职 | 主管 |
| UI设计主管 | 全职 | 主管 |
| 财务总监（CFO培养） | 全职 | 总监 |
| 豪宅全屋定制业务合伙人 | 全职 | 高级岗位 |
| 软件开发工程师（AI编程方向） | 全职 | 中高级 |
| 图片与内容处理实习生 | 实习 | 在校生 |
| 海外销售业务（高定家具搭配） | 全职 | 销售顾问 |
| LLM开发工程师（AIGC方向） | 全职 | 工程师 |
| LLM架构师/工程师（Agent方向） | 全职 | 资深工程师 |

---

## 五、核心组件说明

### 5.1 AppHeader.vue - 导航头部

**功能特性**：
- 响应式导航菜单
- 滚动监听自动激活当前区块
- 中英文语言切换按钮
- 深色/浅色主题切换
- 移动端适配菜单

### 5.2 AppFooter.vue - 页脚

**功能特性**：
- 公司版权信息
- 公司地址展示
- 年份动态计算

### 5.3 StarsBg.vue - 星星背景

**功能特性**：
- 动态星星动画效果
- 用于CTA区域背景增强

### 5.4 HeroBackground.vue - Hero背景

**功能特性**：
- 渐变背景效果
- SVG装饰线条
- 模糊光晕效果

---

## 六、国际化配置

### 配置详情 (nuxt.config.ts)

```typescript
i18n: {
  locales: [
    { code: 'zh', name: '中文', file: 'zh.json' },
    { code: 'en', name: 'English', file: 'en.json' }
  ],
  defaultLocale: 'zh',
  lazy: true,                    // 懒加载语言包
  langDir: 'locales/',
  strategy: 'no_prefix',         // URL无语言前缀
  detectBrowserLanguage: {
    useCookie: true,             // 使用Cookie存储语言偏好
    cookieKey: 'i18n_locale',
    redirectOn: 'root'
  }
}
```

### 语言切换机制

- 点击导航栏的语言按钮（中文/EN）切换
- 自动检测浏览器语言设置
- Cookie持久化存储用户语言偏好

---

## 七、SEO优化配置

### 全局SEO (app.vue)

```typescript
useSeoMeta({
  ogSiteName: '佛山市绎间科技有限公司',
  keywords: '全屋设计出海,跨境家装,AI设计,中国供应链,全球交付',
  ogImage: '/templates/landing.png',
  twitterCard: 'summary_large_image'
})
```

### 页面级SEO

每个页面都有独立的SEO配置：

| 页面 | Title | Description |
|------|-------|-------------|
| 首页 | 佛山市绎间科技有限公司｜全屋设计出海一体化平台 | 以AI设计驱动、中国供应链支撑与全球交付网络... |
| 关于页 | 关于佛山市绎间科技有限公司｜全屋设计出海一体化平台 | 了解绎间科技的使命、团队与商业模式... |
| 招聘页 | 加入佛山市绎间科技有限公司｜招聘岗位 | 招聘海外销售、LLM开发工程师等岗位... |

---

## 八、部署配置

### 预渲染配置

```typescript
nitro: {
  preset: 'static',
  prerender: {
    crawlLinks: true,
    failOnError: true,
    routes: ['/', '/jobs']
  }
}
```

### 支持的部署平台

- **Vercel**: 配置了 `vercel.json`
- **静态部署**: 使用 `nuxt generate` 生成静态文件

### CI/CD

项目配置了 GitHub Actions CI 流程 (`ci.yml`)，自动化代码检查和构建。

---

## 九、如何运行项目

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
# 或
pnpm dev --host  # 允许外部访问
```

### 构建生产版本

```bash
pnpm build       # 构建SSR版本
pnpm generate    # 生成静态版本
```

### 预览生产版本

```bash
pnpm preview
```

### 其他命令

```bash
pnpm lint        # 代码检查
pnpm typecheck   # 类型检查
pnpm postinstall # 准备Nuxt环境
```

---

## 十、公司业务介绍

### 公司定位

佛山市绎间科技有限公司是一家聚焦 **全屋设计出海** 的跨境家装设计品牌，以：
- AI设计驱动
- 中国供应链支撑
- 全球交付能力整合

为核心，面向海外设计师、建筑商、承包商和中高端用户提供 **设计 + 产品 + 交付** 一体化空间解决方案。

### 核心能力体系

| 层级 | 能力 | 说明 |
|------|------|------|
| 前端 | AI设计提效 | 空间设计标准化、快速出图、在线可视化 |
| 中台 | 供应链协同 | 佛山产业带资源整合、产品标准化 |
| 后端 | 全球交付整合 | 连接海外设计师与本地安装服务 |

### 商业模式

- **项目制合作**: 整体厨房、全屋定制、空间改造项目
- **渠道合作**: 海外设计机构、服务商、渠道伙伴合作

### 联系方式

- **邮箱**: info@yijianspace.com
- **地址**: 广东省佛山市南海区桂城街道德高信写字楼3座802室

---

## 十一、项目特色

### 技术亮点

1. **现代化框架**: Nuxt.js 4 + Vue 3 Composition API
2. **组件化UI**: Nuxt UI 组件库，设计统一美观
3. **响应式设计**: 完整的移动端适配
4. **国际化支持**: 中英文双语，无缝切换
5. **主题切换**: 深色/浅色主题，用户偏好持久化
6. **SEO优化**: 全局和页面级SEO配置完善
7. **静态生成**: 预渲染优化，加载速度快

### 设计亮点

1. **渐变背景**: 精美的渐变和光晕效果
2. **交互反馈**: Hover效果、过渡动画完善
3. **视觉层次**: 清晰的信息层级和视觉引导
4. **品牌一致性**: 统一的设计语言和色彩系统

---

## 十二、后续建议

### 可优化的方向

1. **性能优化**: 可考虑图片懒加载、组件懒加载优化
2. **内容扩展**: 可添加更多业务案例展示
3. **交互增强**: 可增加表单提交、在线咨询等交互功能
4. **数据驱动**: 可接入后台数据，动态更新招聘信息
5. **多语言扩展**: 可考虑支持更多语言（如日文、韩文等）

---

*文档生成时间: 2026年4月14日*
*项目版本: Nuxt 4.4.2*