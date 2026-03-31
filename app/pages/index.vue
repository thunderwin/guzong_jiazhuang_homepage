<script setup lang="ts">
const { t, locale } = useI18n()

const page = computed(() => ({
  title: t('home.hero.title'),
  description: t('home.hero.description'),
  hero: {
    links: [
      {
        label: t('home.hero.cta1'),
        icon: 'i-lucide-arrow-right',
        trailing: true,
        color: 'primary',
        to: '#features',
        size: 'xl'
      },
      {
        label: t('home.hero.cta2'),
        icon: 'i-lucide-message-circle',
        size: 'xl',
        color: 'neutral',
        variant: 'outline',
        to: '#cta'
      }
    ]
  },
  section: {
    title: t('home.section.title'),
    description: t('home.section.description'),
    images: {
      mobile: '/images/house-tech.svg',
      desktop: '/images/house-tech.svg'
    },
    features: [
      {
        title: t('home.section.features.frontend.title'),
        description: t('home.section.features.frontend.description')
      },
      {
        title: t('home.section.features.middle.title'),
        description: t('home.section.features.middle.description')
      },
      {
        title: t('home.section.features.backend.title'),
        description: t('home.section.features.backend.description')
      }
    ]
  },
  features: {
    title: t('home.features.title'),
    description: t('home.features.description'),
    features: [
      {
        title: t('home.features.items.aiDesign.title'),
        description: t('home.features.items.aiDesign.description'),
        icon: 'i-lucide-sparkles'
      },
      {
        title: t('home.features.items.supplyChain.title'),
        description: t('home.features.items.supplyChain.description'),
        icon: 'i-lucide-factory'
      },
      {
        title: t('home.features.items.customization.title'),
        description: t('home.features.items.customization.description'),
        icon: 'i-lucide-house-plus'
      },
      {
        title: t('home.features.items.delivery.title'),
        description: t('home.features.items.delivery.description'),
        icon: 'i-lucide-globe'
      },
      {
        title: t('home.features.items.growth.title'),
        description: t('home.features.items.growth.description'),
        icon: 'i-lucide-trending-up'
      },
      {
        title: t('home.features.items.data.title'),
        description: t('home.features.items.data.description'),
        icon: 'i-lucide-chart-column-increasing'
      }
    ]
  },
  steps: {
    title: t('home.steps.title'),
    description: t('home.steps.description'),
    items: [
      {
        title: t('home.steps.items.step1.title'),
        description: t('home.steps.items.step1.description')
      },
      {
        title: t('home.steps.items.step2.title'),
        description: t('home.steps.items.step2.description')
      },
      {
        title: t('home.steps.items.step3.title'),
        description: t('home.steps.items.step3.description')
      }
    ]
  },
  pricing: {
    title: t('home.pricing.title'),
    description: t('home.pricing.description'),
    plans: [
      {
        title: t('home.pricing.projectPlan.title'),
        description: t('home.pricing.projectPlan.description'),
        price: t('home.pricing.projectPlan.price'),
        features: [
          t('home.pricing.projectPlan.features.0'),
          t('home.pricing.projectPlan.features.1'),
          t('home.pricing.projectPlan.features.2'),
          t('home.pricing.projectPlan.features.3'),
          t('home.pricing.projectPlan.features.4')
        ],
        button: {
          label: t('home.pricing.projectPlan.button'),
          color: 'neutral',
          variant: 'outline',
          to: '#cta'
        }
      },
      {
        title: t('home.pricing.channelPlan.title'),
        description: t('home.pricing.channelPlan.description'),
        price: t('home.pricing.channelPlan.price'),
        highlight: true,
        features: [
          t('home.pricing.channelPlan.features.0'),
          t('home.pricing.channelPlan.features.1'),
          t('home.pricing.channelPlan.features.2'),
          t('home.pricing.channelPlan.features.3'),
          t('home.pricing.channelPlan.features.4')
        ],
        button: {
          label: t('home.pricing.channelPlan.button'),
          variant: 'subtle',
          to: '#cta'
        }
      }
    ]
  },
  testimonials: {
    title: t('home.testimonials.title'),
    description: t('home.testimonials.description'),
    items: [
      {
        quote: t('home.testimonials.items.team.quote'),
        user: {
          name: t('home.testimonials.items.team.name'),
          description: t('home.testimonials.items.team.role')
        }
      },
      {
        quote: t('home.testimonials.items.achievement.quote'),
        user: {
          name: t('home.testimonials.items.achievement.name'),
          description: t('home.testimonials.items.achievement.role')
        }
      },
      {
        quote: t('home.testimonials.items.vision.quote'),
        user: {
          name: t('home.testimonials.items.vision.name'),
          description: t('home.testimonials.items.vision.role')
        }
      }
    ]
  },
  cta: {
    title: t('home.cta.title'),
    description: t('home.cta.description'),
    links: [
      {
        label: t('home.cta.button1'),
        to: '#',
        trailingIcon: 'i-lucide-arrow-right'
      },
      {
        label: t('home.cta.button2'),
        to: '#',
        variant: 'subtle',
        icon: 'i-lucide-handshake'
      }
    ]
  }
}))

useSeoMeta({
  title: () => t('home.seo.title'),
  ogTitle: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogDescription: () => t('home.seo.description')
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_520px_at_12%_-8%,rgba(16,185,129,0.22),transparent_62%),radial-gradient(860px_420px_at_88%_8%,rgba(6,182,212,0.18),transparent_60%),linear-gradient(180deg,rgba(15,23,42,0.03),transparent_40%)] dark:bg-[radial-gradient(1200px_520px_at_12%_-8%,rgba(16,185,129,0.28),transparent_62%),radial-gradient(860px_420px_at_88%_8%,rgba(6,182,212,0.24),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.48),rgba(2,6,23,0)_40%)]" />
    <div class="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />

    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] overflow-hidden">
      <svg
        viewBox="0 0 1440 650"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-0 top-0 h-[650px] w-full"
      >
        <defs>
          <linearGradient id="heroBgFill" x1="720" y1="0" x2="720" y2="650" gradientUnits="userSpaceOnUse">
            <stop stop-color="currentColor" stop-opacity="0.12" />
            <stop offset="1" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1440" height="650" fill="url(#heroBgFill)" class="text-primary" />
        <path d="M0 128H1440" stroke="currentColor" stroke-opacity="0.18" stroke-dasharray="8 10" class="text-primary" />
        <path d="M0 224H1440" stroke="currentColor" stroke-opacity="0.12" stroke-dasharray="6 8" class="text-primary" />
        <path d="M0 320H1440" stroke="currentColor" stroke-opacity="0.08" stroke-dasharray="4 8" class="text-primary" />
      </svg>
      <div class="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div class="absolute right-[-80px] top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div class="absolute left-1/2 top-[380px] h-40 w-[60%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </div>

    <UPageHero
      :description="page.description"
      :links="page.hero.links"
      :ui="{
        container: 'md:pt-20 lg:pt-24 relative',
        title: 'max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
        description: 'text-lg sm:text-xl text-muted max-w-2xl mx-auto mt-6'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :key="`hero-title-${locale}`"
          :value="page.title"
          unwrap="p"
        />
      </template>
    </UPageHero>

    <UPageSection
      :description="page.section.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10'
      }"
      reverse
      class="relative"
    >
      <template #title>
        <MDC
          :key="`section-title-${locale}`"
          :value="page.section.title"
          class="sm:*:leading-tight text-3xl sm:text-4xl font-bold"
        />
      </template>

      <template #features>
        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="(feature, index) in page.section.features"
            :key="index"
            class="group relative rounded-2xl border border-default bg-default/50 p-6 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg"
            :class="index === 0 ? 'border-primary/50 bg-primary/5' : ''"
          >
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon
                :name="index === 0 ? 'i-lucide-layers' : index === 1 ? 'i-lucide-box' : 'i-lucide-globe'"
                class="size-5"
              />
            </div>
            <h3 class="mb-2 text-lg font-semibold">{{ feature.title }}</h3>
            <p class="text-sm leading-relaxed text-muted">{{ feature.description }}</p>
          </div>
        </div>
      </template>

      <img
        :src="page.section.images.desktop"
        :alt="page.section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl"
      >
      <img
        :src="page.section.images.mobile"
        :alt="page.section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/20' }" />

    <section id="features" class="relative overflow-hidden py-20">
      <div class="absolute rounded-full -left-20 top-20 size-[420px] bg-primary/15 blur-[150px]" />
      <div class="absolute rounded-full -right-20 bottom-20 size-[420px] bg-cyan-400/15 blur-[150px]" />
      <div class="absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_0%,rgba(16,185,129,0.08)_45%,transparent_80%)]" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <MDC :key="`features-title-${locale}`" :value="page.features.title" class="text-3xl sm:text-4xl font-bold mb-4" />
          <p class="text-muted max-w-2xl mx-auto">{{ page.features.description }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, index) in page.features.features"
            :key="index"
            class="group rounded-2xl border border-default bg-default/50 p-6 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <UIcon :name="feature.icon" class="size-5" />
              </div>
              <h3 class="text-lg font-semibold whitespace-normal">{{ feature.title }}</h3>
            </div>
            <p class="text-sm leading-relaxed text-muted whitespace-normal">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <USeparator :ui="{ border: 'border-primary/20' }" />

    <section id="steps" class="relative overflow-hidden py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative mb-8">
          <svg
            viewBox="0 0 12 106"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -top-10 left-1/2 h-24 -translate-x-1/2 text-primary"
          >
            <path d="M6 0V106" stroke="currentColor" stroke-opacity="0.25" stroke-dasharray="6 8" />
          </svg>
        </div>

        <div class="text-center mb-12">
          <MDC :key="`steps-title-${locale}`" :value="page.steps.title" class="text-3xl sm:text-4xl font-bold mb-4" />
          <p class="text-muted max-w-2xl mx-auto">{{ page.steps.description }}</p>
        </div>

        <div class="relative max-w-3xl mx-auto">
          <div class="space-y-8">
            <div
              v-for="(step, index) in page.steps.items"
              :key="index"
              class="flex items-start gap-4 sm:gap-6"
            >
              <div class="relative flex flex-col items-center">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-bold text-primary shadow-lg text-lg">
                  {{ index + 1 }}
                </div>
                <div v-if="index < page.steps.items.length - 1" class="mt-2 h-20 w-px bg-gradient-to-b from-primary/50 to-primary/10" />
              </div>

              <div class="flex-1 pb-4">
                <div class="rounded-2xl border border-default bg-default/50 p-5 sm:p-6 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
                  <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <UIcon
                        :name="index === 0 ? 'i-lucide-clipboard-list' : index === 1 ? 'i-lucide-sparkles' : 'i-lucide-truck'"
                        class="size-8 text-primary"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="mb-2 text-lg font-semibold">{{ step.title }}</h3>
                      <p class="text-sm leading-relaxed text-muted">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UPageSection
      id="pricing"
      class="mb-32 overflow-hidden"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :ui="{ title: 'text-center', description: 'text-center max-w-2xl mx-auto' }"
    >
      <template #title>
        <MDC :key="`pricing-title-${locale}`" :value="page.pricing.title" class="text-3xl sm:text-4xl font-bold" />
      </template>

      <div class="mt-12 grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
        <div
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          class="rounded-2xl border p-8 transition-all"
          :class="plan.highlight ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/20' : 'border-default bg-default/50 hover:border-primary/30'"
        >
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">{{ plan.title }}</h3>
            <p class="text-sm text-muted">{{ plan.description }}</p>
          </div>

          <div class="mb-6">
            <span class="text-3xl font-bold">{{ plan.price }}</span>
          </div>

          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2 text-sm text-muted"
            >
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 text-primary shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <UButton
            :label="plan.button.label"
            :variant="plan.button.variant || 'solid'"
            :color="plan.button.color || 'primary'"
            :to="plan.button.to"
            size="lg"
            block
          />
        </div>
      </div>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :ui="{
        title: 'text-center',
        description: 'text-center max-w-2xl mx-auto'
      }"
    >
      <template #headline>
        <svg
          viewBox="0 0 12 106"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-10 right-1/2 h-24 text-primary sm:top-0"
        >
          <path d="M6 0V106" stroke="currentColor" stroke-opacity="0.2" stroke-dasharray="6 8" />
        </svg>
      </template>

      <template #title>
        <MDC :key="`testimonials-title-${locale}`" :value="page.testimonials.title" class="text-3xl sm:text-4xl font-bold" />
      </template>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="rounded-2xl border border-default bg-default/50 p-6 transition-all hover:border-primary/30 hover:bg-default/80"
        >
          <p class="text-base leading-relaxed italic text-muted mb-6">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center gap-3 border-t border-default pt-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <UIcon name="i-lucide-user" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold">{{ testimonial.user.name }}</p>
              <p class="text-xs text-muted">{{ testimonial.user.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden relative"
      :ui="{
        container: 'py-16 sm:py-20',
        title: 'text-3xl sm:text-4xl font-bold',
        description: 'text-lg text-muted max-w-xl mx-auto mt-4'
      }"
    >
      <template #title>
        <MDC :key="`cta-title-${locale}`" :value="page.cta.title" />
      </template>

      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
