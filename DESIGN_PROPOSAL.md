# 绎间科技网站改版设计方案
## Yijian Technology Website Redesign Proposal

**日期 Date**: 2026-04-17  
**版本 Version**: 1.0  
**目标 Objective**: 高端大气上档次的企业形象升级

---

## 一、设计理念 Design Philosophy

### 核心定位
- **科技奢侈品牌** — 将AI技术与高端家居结合，打造科技感与品质感并存的视觉体验
- **全球化视野** — 体现跨境供应链和国际化运营能力
- **专业可信** — B2B企业形象，强调数据、案例和实力

### 视觉关键词
- **Sophisticated** 精致
- **Innovative** 创新
- **Premium** 高端
- **Global** 国际化
- **Data-driven** 数据驱动

---

## 二、色彩系统 Color System

### 主色调 Primary Colors
```
深邃蓝 Deep Blue: #0A1628 (主背景)
科技紫 Tech Purple: #6366F1 (主品牌色，替代当前绿色)
奢华金 Luxury Gold: #D4AF37 (强调色)
```

### 辅助色 Secondary Colors
```
冷灰 Cool Gray: #64748B (文字辅助)
纯白 Pure White: #FFFFFF (文字主色)
渐变紫蓝 Gradient: #6366F1 → #8B5CF6 → #3B82F6
```

### 为什么改色？
- 当前绿色（emerald）偏向环保/健康，不够高端科技感
- 紫色系在科技行业代表创新、AI、未来感
- 金色点缀提升奢华感，符合高端家居定位

---

## 三、排版系统 Typography

### 中文字体
```css
主标题: "思源黑体 CN Heavy" / "PingFang SC Semibold"
正文: "思源黑体 CN Regular" / "PingFang SC Regular"
数据: "DIN Pro Bold" (数字专用)
```

### 英文字体
```css
主标题: "Inter Display Bold" / "SF Pro Display Bold"
正文: "Inter Regular"
数据: "DIN Pro Bold"
```

### 字号层级
```
Hero 标题: 72px / 4.5rem (桌面) → 48px / 3rem (移动)
Section 标题: 48px / 3rem → 32px / 2rem
卡片标题: 24px / 1.5rem → 20px / 1.25rem
正文: 18px / 1.125rem → 16px / 1rem
辅助文字: 14px / 0.875rem
```

---

## 四、页面布局改版 Layout Redesign

### 1. 首页 Homepage

#### Hero Section (全屏沉浸式)
```
布局:
- 全屏深色背景 (#0A1628)
- 3D 动态粒子背景（Three.js / Spline）
- 中央大标题 + 副标题
- 双 CTA 按钮（主次分明）
- 向下滚动指示器

视觉元素:
- 动态 3D 家居模型旋转展示
- 紫色光晕效果
- 金色粒子漂浮
```

#### 数据展示区 Stats Section
```
布局: 4列网格，深色卡片
内容:
- $200M+ 年营收
- 40+ 覆盖国家
- 9 个实体公司
- 120% 年增长率

设计:
- 大号数字（DIN Pro Bold, 64px）
- 金色数字 + 白色标签
- 卡片悬停时紫色光晕
```

#### 核心能力 Core Capabilities
```
布局: 3列卡片，左右留白
设计:
- 玻璃态卡片（glassmorphism）
- 渐变边框（紫→蓝）
- Icon + 标题 + 描述
- 悬停时卡片上浮 + 阴影加深

内容:
1. AI 设计引擎
2. 全球供应链
3. 端到端交付
```

#### 品牌矩阵 Brand Portfolio
```
布局: 横向滚动画廊
设计:
- 大尺寸品牌卡片（400x500px）
- 品牌 Logo + 关键数据
- 悬停时显示详细信息
- 无限循环滚动动画
```

#### 客户案例 Case Studies
```
布局: 全宽轮播
设计:
- 左侧大图（项目效果图）
- 右侧文字（客户名称、项目描述、成果数据）
- 进度指示器
- 自动播放 + 手动控制
```

#### 流程展示 Process
```
布局: 时间轴式横向流程
设计:
- 3个阶段节点
- 连接线动画（从左到右）
- 每个节点：数字 + 标题 + 描述
- 紫色渐变连接线
```

#### CTA 区域
```
布局: 全宽深色背景
设计:
- 中央大标题："准备开始您的项目？"
- 双按钮：联系我们（主）+ 查看案例（次）
- 背景：动态星空效果
```

---

### 2. 品牌矩阵页 Brand Page

#### Hero
```
布局: 分屏式
左侧: 大标题 + 副标题
右侧: 品牌数据可视化（动态图表）
```

#### 时间轴 Timeline
```
布局: 垂直时间轴（居中）
设计:
- 左右交替排列
- 年份节点（金色圆点）
- 品牌卡片（玻璃态）
- 滚动视差效果
```

#### 品牌展示 Brand Showcase
```
布局: 3x3 网格
设计:
- 品牌 Logo 卡片
- 悬停时显示品牌介绍
- 点击进入品牌详情页（未来扩展）
```

---

### 3. 关于我们页 About Page

#### Hero
```
布局: 全宽视频背景
内容: 公司宣传视频（或高质量图片轮播）
覆盖层: 半透明深色 + 中央文字
```

#### 公司定位
```
布局: 左右分栏
左侧: 大段文字描述
右侧: 关键数据可视化
```

#### 团队优势
```
布局: 卡片网格
设计:
- 每个优势一个卡片
- Icon + 标题 + 数据
- 金色强调数据
```

---

### 4. 招聘页 Jobs Page

#### Hero
```
布局: 简洁式
内容: "加入我们，定义未来"
背景: 渐变紫蓝
```

#### 职位列表
```
布局: 左侧分类导航 + 右侧职位卡片
设计:
- 职位卡片可展开
- 显示：职位名称、部门、地点、薪资范围
- 点击展开显示详细 JD
- "立即申请"按钮
```

---

## 五、交互动效 Interactions & Animations

### 页面加载
- 渐入动画（fade in + slide up）
- 元素依次出现（stagger animation）

### 滚动效果
- 视差滚动（parallax）
- 滚动触发动画（scroll-triggered）
- 进度指示器

### 悬停效果
- 卡片上浮 + 阴影加深
- 按钮渐变移动
- 图片缩放（scale 1.05）

### 页面切换
- 平滑过渡（smooth transition）
- 加载动画（loading spinner）

---

## 六、技术实现 Technical Implementation

### 保持现有技术栈
- Nuxt.js 4 + Vue 3
- Tailwind CSS v4
- @nuxt/ui v4

### 新增依赖
```json
{
  "@vueuse/motion": "^2.0.0",  // 动画库
  "three": "^0.160.0",          // 3D 效果
  "@splinetool/runtime": "^1.0.0", // 3D 模型（可选）
  "gsap": "^3.12.0"             // 高级动画
}
```

### CSS 变量更新
```css
:root {
  --color-primary: #6366F1;
  --color-secondary: #8B5CF6;
  --color-accent: #D4AF37;
  --color-bg-dark: #0A1628;
  --color-bg-card: rgba(255, 255, 255, 0.05);
  --font-display: "Inter Display", "PingFang SC", sans-serif;
  --font-body: "Inter", "PingFang SC", sans-serif;
  --font-mono: "DIN Pro", monospace;
}
```

---

## 七、响应式设计 Responsive Design

### 断点
```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large Desktop: > 1440px
```

### 移动端优化
- 简化动画（减少性能消耗）
- 单列布局
- 触摸友好的按钮尺寸（最小 44x44px）
- 汉堡菜单导航

---

## 八、性能优化 Performance

### 图片优化
- WebP 格式
- 响应式图片（srcset）
- 懒加载（lazy loading）

### 代码优化
- 代码分割（code splitting）
- 按需加载组件
- CSS 压缩

### 加载优化
- 首屏内容优先加载
- 预加载关键资源
- CDN 加速

---

## 九、实施计划 Implementation Plan

### Phase 1: 基础改版（2周）
- [ ] 更新色彩系统和 CSS 变量
- [ ] 更新字体系统
- [ ] 重构 Hero Section
- [ ] 更新导航栏设计

### Phase 2: 页面重构（3周）
- [ ] 首页完整改版
- [ ] 品牌矩阵页改版
- [ ] 关于我们页改版
- [ ] 招聘页改版

### Phase 3: 动效实现（2周）
- [ ] 添加页面加载动画
- [ ] 实现滚动效果
- [ ] 添加交互动效
- [ ] 3D 元素集成

### Phase 4: 优化测试（1周）
- [ ] 性能优化
- [ ] 跨浏览器测试
- [ ] 移动端测试
- [ ] A/B 测试

---

## 十、预期效果 Expected Outcomes

### 视觉提升
- 品牌形象更高端、更国际化
- 科技感和专业度显著提升
- 视觉层次更清晰

### 用户体验
- 信息传达更高效
- 交互更流畅
- 转化率提升 30%+

### 品牌价值
- 提升客户信任度
- 吸引高端客户
- 增强招聘吸引力

---

## 附录：参考案例 References

### 高端科技网站
- Apple.com (产品展示)
- Stripe.com (B2B SaaS)
- Linear.app (现代设计)
- Vercel.com (开发者体验)

### 奢侈品牌网站
- Bentley.com (汽车)
- Rolex.com (手表)
- Fendi.com (时尚)

---

**设计负责人签字 Design Lead Signature**: _________________  
**日期 Date**: 2026-04-17
