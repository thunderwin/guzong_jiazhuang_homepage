<script setup lang="ts">
useSeoMeta({
  title: '关于绎间科技｜全屋设计出海一体化平台',
  description: '了解绎间科技的使命、团队与商业模式。我们致力于成为中国版的全球家装整合服务商。'
})
</script>

<template>
  <div class="relative">
    <!-- Background decoration -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <!-- Hero Section -->
    <UPageHero
      :ui="{ container: 'py-20 lg:py-28', title: 'max-w-4xl mx-auto' }"
    >
      <template #title>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          关于<span class="text-primary">绎间科技</span>
        </h1>
      </template>

      <template #description>
        <div class="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          绎间科技是一家聚焦<span class="text-primary font-semibold">全屋设计出海</span>的跨境家装设计品牌，以AI设计 + 中国供应链 + 全球交付为核心，面向海外设计师、建筑商、承包商和中高端用户提供<span class="font-semibold">设计、产品、交付</span>一体化空间解决方案。公司依托佛山产业带优势，结合成熟的跨境品牌操盘经验和全球交付整合能力，切入整体厨房、全屋定制、空间改造等高客单价项目，长期目标是打造可复制的全球化空间解决方案平台。
        </div>
      </template>
    </UPageHero>

    <!-- Company Intro -->
    <section id="intro" class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-default bg-default/50 p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6">公司定位</h2>
          <div class="prose prose-lg max-w-none text-muted">
            <p class="mb-4">
              绎间科技是一家位于佛山的全新跨境家装设计品牌公司，聚焦"全屋设计出海"这一高潜力赛道，致力于打造一个以<span class="font-semibold text-foreground">AI设计驱动、中国供应链支撑、全球交付能力整合</span>为核心的跨境家装产业平台。
            </p>
            <p class="mb-4">
              公司定位<span class="font-semibold text-foreground">并非</span>传统家具出口商或单品跨境电商，而是面向海外用户提供<span class="font-semibold text-foreground">"设计 + 产品 + 交付"一体化解决方案</span>的家装品牌。我们希望推动中国家居产业从"卖产品出海"升级为"卖整体空间解决方案出海"，并逐步成长为<span class="font-semibold text-foreground">中国版的全球家装整合服务商</span>。
            </p>
            <p>
              在能力结构上，绎间科技围绕家装产业链的前端、中台和后端，构建了完整的核心能力体系。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section id="capabilities" class="py-16 lg:py-20 relative overflow-hidden">
      <div class="absolute rounded-full -left-20 top-20 size-[400px] bg-primary/10 blur-[150px]" />
      <div class="absolute rounded-full -right-20 bottom-20 size-[400px] bg-primary/10 blur-[150px]" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">核心能力体系</h2>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Frontend -->
          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-sparkles" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">前端：AI设计提效</h3>
            <p class="text-muted leading-relaxed">
              在前端，公司将通过自研和整合AI设计工具，实现空间设计的标准化、快速出图和在线可视化，大幅降低设计门槛与人力成本，提升用户体验与转化效率，逐步建立"所见即所得"的在线设计能力，让海外设计师、建筑商、C端用户能够更高效地完成方案确认与决策。
            </p>
          </div>

          <!-- Middle -->
          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-factory" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">中台：供应链协同</h3>
            <p class="text-muted leading-relaxed">
              在中台，公司依托佛山成熟的家居制造产业带，整合优质工厂资源，推动产品标准化、模块化与成本优化，建立面向海外市场的供应链协同体系，从而确保品牌在全球市场具备更强的价格竞争力、品质稳定性和交付效率优势。
            </p>
          </div>

          <!-- Backend -->
          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-globe" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">后端：全球交付整合</h3>
            <p class="text-muted leading-relaxed">
              在后端，公司将持续连接海外设计师资源与本地安装服务体系，打通从方案确认、产品配置、生产交付、物流配送到落地安装的完整链路，解决传统跨境家装中"设计与交付割裂"的核心痛点，形成真正可落地的一体化交付闭环。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">团队优势</h2>
            <p class="text-lg text-muted mb-6">成熟的跨境品牌操盘经验</p>
            <div class="prose prose-lg max-w-none text-muted">
              <p class="mb-4">
                除了业务模式本身，绎间科技的另一项核心优势在于团队能力。公司创始团队具备极强的跨境品牌操盘经验和产业整合能力，长期深耕独立站与DTC品牌业务，已成功打造<span class="font-semibold text-foreground">5个年销千万美元级品牌</span>（其中2个长期位居北美品类第一），拥有年销售规模超<span class="font-semibold text-foreground">10亿元人民币</span>的跨境电商实战经验。
              </p>
              <p>
                团队在品牌定位、独立站运营、海外流量获取、内容营销、转化提升、用户增长、供应链协同、多平台运营和规模化扩张等方面，均已建立成熟的方法论与执行体系。
              </p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">5+</div>
              <div class="text-sm text-muted">千万美元级品牌</div>
            </div>
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">10亿+</div>
              <div class="text-sm text-muted">累计操盘规模</div>
            </div>
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">No.1</div>
              <div class="text-sm text-muted">北美品类领先</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Model -->
    <section class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-default bg-default/50 p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6">商业模式与长期愿景</h2>
          <div class="prose prose-lg max-w-none text-muted">
            <p class="mb-4">
              绎间科技以<span class="font-semibold text-foreground">北美高客单价家装项目</span>为核心切入点，包括整体厨房、全屋定制、空间改造等，通过独立站、海外社媒等渠道获取海外用户需求，以AI设计工具实现快速转化，再借助中国供应链和本地交付网络完成履约，形成<span class="font-semibold text-foreground">"高客单值、高服务附加值、高口碑沉淀"</span>的增长路径。
            </p>
            <p>
              从长期来看，绎间科技不仅希望成为一家跨境家装品牌，更希望成长为一个<span class="font-semibold text-foreground">可复制的空间解决方案平台</span>。未来，公司将持续向更多国家、更多空间品类延展，最终构建一个以中国供应链为底座、以全球设计与服务网络为触点的跨境家居生态系统。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <UPageCTA
      variant="naked"
      class="overflow-hidden relative py-20"
    >
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">与绎间科技合作</h2>
        <p class="text-lg text-muted max-w-xl mx-auto mb-8">无论您是寻求全屋定制解决方案的海外用户，还是希望加入我们的优秀人才，欢迎联系我们。</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            label="查看招聘岗位"
            to="/jobs"
            icon="i-lucide-briefcase"
            size="xl"
          />
          <UButton
            label="联系我们"
            to="#contact"
            variant="outline"
            icon="i-lucide-mail"
            size="xl"
          />
        </div>
      </div>

      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
