<script setup lang="ts">
type JobSection = {
  title: string
  items: string[]
}

type Job = {
  title: string
  type: string
  level: string
  location: string
  summary: string
  sections: JobSection[]
}

const { t, tm, rt } = useI18n()

useSeoMeta({
  title: () => t('jobs.seo.title'),
  description: () => t('jobs.seo.description')
})

const jobs = computed(() => {
  const rawJobs = tm('jobs.positions') as unknown as Array<Record<string, any>>

  return rawJobs.map((job) => ({
    // `tm` returns message trees; normalize both object/array section shapes.
    title: rt(job.title),
    type: rt(job.type),
    level: rt(job.level),
    location: rt(job.location),
    summary: rt(job.summary),
    sections: (Array.isArray(job.sections) ? job.sections : Object.values(job.sections || {}))
      .map((section: any) => ({
        title: rt(section.title),
        items: (Array.isArray(section.items) ? section.items : Object.values(section.items || {}))
          .map((item: any) => rt(item))
      }))
  })) as Job[]
})
const activeJobIndex = ref(0)
const activeJob = computed(() => jobs.value[activeJobIndex.value] || jobs.value[0])

watch(jobs, (next) => {
  if (!next.length) {
    activeJobIndex.value = 0
    return
  }

  if (activeJobIndex.value > next.length - 1) {
    activeJobIndex.value = 0
  }
}, { immediate: true })

const sectionIconMap: Record<string, string> = {
  '岗位定位': 'i-lucide-compass',
  '岗位职责': 'i-lucide-check-circle',
  '任职要求': 'i-lucide-target',
  '优先考虑': 'i-lucide-star',
  '加分项': 'i-lucide-sparkles',
  '你将获得': 'i-lucide-gift',
  '熟练的技术栈': 'i-lucide-code',
  '岗位价值': 'i-lucide-gem',
  'Role Positioning': 'i-lucide-compass',
  Responsibilities: 'i-lucide-check-circle',
  Requirements: 'i-lucide-target',
  Preferred: 'i-lucide-star',
  'Bonus Points': 'i-lucide-sparkles',
  "What You'll Gain": 'i-lucide-gift',
  'Tech Stack': 'i-lucide-code',
  'Role Value': 'i-lucide-gem'
}

const getSectionIcon = (title: string) => sectionIconMap[title] || 'i-lucide-file-text'
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="absolute -top-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

    <UPageSection
      id="job-list"
      :title="t('jobs.openPositions')"
      class="relative"
    >
      <div class="mx-auto max-w-6xl">
        <div class="mb-6 lg:hidden">
          <label class="mb-2 block text-sm font-medium text-muted">
            {{ t('jobs.selectJob') }}
          </label>
          <div class="relative">
            <select
              v-model.number="activeJobIndex"
              class="w-full appearance-none rounded-xl border border-default bg-default px-4 py-3 pr-10 text-sm text-foreground outline-none transition focus:border-primary/50"
            >
              <option
                v-for="(job, index) in jobs"
                :key="job.title"
                :value="index"
              >
                {{ job.title }}
              </option>
            </select>
            <UIcon
              name="i-lucide-chevron-down"
              class="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside class="hidden lg:block">
            <div class="sticky top-24 rounded-2xl border border-default bg-default/50 p-3">
              <button
                v-for="(job, index) in jobs"
                :key="job.title"
                type="button"
                class="mb-2 w-full rounded-xl border px-4 py-3 text-left transition-colors last:mb-0"
                :class="activeJobIndex === index ? 'border-primary/40 bg-primary/10' : 'border-transparent bg-transparent hover:border-default hover:bg-default/70'"
                @click="activeJobIndex = index"
              >
                <p class="line-clamp-2 text-sm font-semibold text-foreground">
                  {{ job.title }}
                </p>
                <p class="mt-1 text-xs text-muted">
                  {{ job.type }} · {{ job.level }}
                </p>
              </button>
            </div>
          </aside>

          <UPageCard
            variant="subtle"
            class="group"
          >
            <div class="p-4 sm:p-8">
              <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div class="space-y-3">
                  <h3 class="text-lg font-semibold leading-tight text-foreground sm:text-xl">
                    {{ activeJob.title }}
                  </h3>
                  <div class="flex flex-wrap items-center gap-2">
                    <UBadge color="primary" variant="soft" class="font-medium">
                      {{ activeJob.type }}
                    </UBadge>
                    <UBadge color="neutral" variant="soft">
                      {{ activeJob.level }}
                    </UBadge>
                    <span class="flex items-center gap-1 break-words text-sm text-muted">
                      <UIcon name="i-lucide-map-pin" class="size-4" />
                      {{ activeJob.location }}
                    </span>
                  </div>
                </div>
              </div>

              <p class="mb-8 text-sm leading-relaxed text-muted sm:text-base">
                {{ activeJob.summary }}
              </p>

              <div class="space-y-6">
                <div
                  v-for="section in activeJob.sections"
                  :key="section.title"
                  class="space-y-3"
                >
                  <h4 class="flex items-center gap-2 font-semibold text-foreground">
                    <UIcon
                      :name="getSectionIcon(section.title)"
                      class="size-5 text-primary"
                    />
                    {{ section.title }}
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="item in section.items"
                      :key="item"
                      class="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span class="break-words">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </UPageCard>
        </div>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="apply"
      :title="t('jobs.applySection.title')"
      :description="t('jobs.applySection.description')"
      :ui="{ title: 'text-left', description: 'text-left' }"
    >
      <div class="rounded-2xl border border-default p-6 sm:p-8 bg-default/40">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="flex items-start gap-4">
            <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
              <UIcon name="i-lucide-briefcase-business" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold mb-1">
                {{ t('jobs.applySection.emailSubject.title') }}
              </p>
              <p class="text-sm text-muted">
                {{ t('jobs.applySection.emailSubject.content') }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
              <UIcon name="i-lucide-file-text" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold mb-1">
                {{ t('jobs.applySection.attachments.title') }}
              </p>
              <p class="text-sm text-muted">
                {{ t('jobs.applySection.attachments.content') }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
              <UIcon name="i-lucide-message-circle" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold mb-1">
                {{ t('jobs.applySection.contact.title') }}
              </p>
              <p class="text-sm text-muted">
                {{ t('jobs.applySection.contact.content') }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
              <UIcon name="i-lucide-clock-3" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold mb-1">
                {{ t('jobs.applySection.feedback.title') }}
              </p>
              <p class="text-sm text-muted">
                {{ t('jobs.applySection.feedback.content') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
