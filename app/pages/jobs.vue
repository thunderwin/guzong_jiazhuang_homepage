<script setup lang="ts">
type JobSection = { title: string; items: string[] }
type Job = { title: string; type: string; level: string; location: string; summary: string; sections: JobSection[] }

const { t, tm, rt } = useI18n()

useSeoMeta({
  title: () => t('jobs.seo.title'),
  description: () => t('jobs.seo.description')
})

const jobs = computed(() => {
  const rawJobs = tm('jobs.positions') as unknown as Array<Record<string, any>>
  return rawJobs.map((job) => ({
    title: rt(job.title), type: rt(job.type), level: rt(job.level),
    location: rt(job.location), summary: rt(job.summary),
    sections: (Array.isArray(job.sections) ? job.sections : Object.values(job.sections || {}))
      .map((s: any) => ({
        title: rt(s.title),
        items: (Array.isArray(s.items) ? s.items : Object.values(s.items || {})).map((i: any) => rt(i))
      }))
  })) as Job[]
})

const activeJobIndex = ref(0)
const activeJob = computed(() => jobs.value[activeJobIndex.value] || jobs.value[0])

watch(jobs, (next) => {
  if (activeJobIndex.value > next.length - 1) activeJobIndex.value = 0
}, { immediate: true })

const sectionIconMap: Record<string, string> = {
  '岗位定位': 'i-lucide-compass', '岗位职责': 'i-lucide-check-circle',
  '任职要求': 'i-lucide-target', '优先考虑': 'i-lucide-star',
  '加分项': 'i-lucide-sparkles', '你将获得': 'i-lucide-gift',
  '熟练的技术栈': 'i-lucide-code', '岗位价值': 'i-lucide-gem',
  'Role Positioning': 'i-lucide-compass', 'Responsibilities': 'i-lucide-check-circle',
  'Requirements': 'i-lucide-target', 'Preferred': 'i-lucide-star',
  'Bonus Points': 'i-lucide-sparkles', "What You'll Gain": 'i-lucide-gift',
  'Tech Stack': 'i-lucide-code', 'Role Value': 'i-lucide-gem'
}
const getSectionIcon = (title: string) => sectionIconMap[title] || 'i-lucide-file-text'
</script>

<template>
  <div class="bg-[#0A0F1E] text-slate-100 overflow-hidden">

    <!-- Hero -->
    <section class="relative pt-24 pb-16 px-4 text-center">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#3E6CA8]/15 blur-[120px]" />
      </div>
      <div class="relative max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4A78B8]/30 bg-[#4A78B8]/10 text-white text-sm mb-6">
          <UIcon name="i-lucide-briefcase" class="size-3.5" />
          <span>{{ t('jobs.openPositions') }}</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{{ t('jobs.seo.title') }}</h1>
        <p class="text-slate-400 text-lg">{{ t('jobs.seo.description') }}</p>
      </div>
    </section>

    <!-- Job List -->
    <section id="job-list" class="py-12 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-6xl mx-auto">

        <!-- Mobile select -->
        <div class="mb-6 lg:hidden">
          <div class="relative">
            <select
              v-model.number="activeJobIndex"
              class="w-full appearance-none rounded-xl border border-[#4A78B8]/20 bg-slate-900 px-4 py-3 pr-10 text-sm text-slate-100 outline-none focus:border-[#4A78B8]/50"
            >
              <option v-for="(job, i) in jobs" :key="job.title" :value="i">{{ job.title }}</option>
            </select>
            <UIcon name="i-lucide-chevron-down" class="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <!-- Sidebar -->
          <aside class="hidden lg:block">
            <div class="sticky top-24 rounded-2xl border border-[#4A78B8]/15 bg-slate-950/60 p-3">
              <button
                v-for="(job, i) in jobs"
                :key="job.title"
                type="button"
                class="mb-1.5 w-full rounded-xl border px-4 py-3 text-left transition-all last:mb-0"
                :class="activeJobIndex === i
                  ? 'border-[#4A78B8]/40 bg-[#4A78B8]/10 text-slate-100'
                  : 'border-transparent hover:border-[#4A78B8]/20 hover:bg-[#4A78B8]/5 text-slate-400'"
                @click="activeJobIndex = i"
              >
                <p class="line-clamp-2 text-sm font-semibold">{{ job.title }}</p>
                <p class="mt-1 text-xs text-slate-500">{{ job.type }} · {{ job.level }}</p>
              </button>
            </div>
          </aside>

          <!-- Job Detail -->
          <div class="glass-card rounded-2xl p-6 sm:p-8">
            <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div class="space-y-3">
                <h3 class="text-xl font-semibold text-slate-100">{{ activeJob.title }}</h3>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-[#C8B89A]/15 text-white border border-[#4A78B8]/20">
                    {{ activeJob.type }}
                  </span>
                  <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {{ activeJob.level }}
                  </span>
                  <span class="flex items-center gap-1 text-sm text-slate-400">
                    <UIcon name="i-lucide-map-pin" class="size-4" />
                    {{ activeJob.location }}
                  </span>
                </div>
              </div>
            </div>

            <p class="mb-8 text-slate-400 leading-relaxed">{{ activeJob.summary }}</p>

            <div class="space-y-6">
              <div v-for="section in activeJob.sections" :key="section.title" class="space-y-3">
                <h4 class="flex items-center gap-2 font-semibold text-slate-100">
                  <UIcon :name="getSectionIcon(section.title)" class="size-5 text-white" />
                  {{ section.title }}
                </h4>
                <ul class="space-y-2">
                  <li v-for="item in section.items" :key="item" class="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                    <span class="mt-2 size-1.5 shrink-0 rounded-full bg-[#4A78B8]" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apply Section -->
    <section id="apply" class="py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-2 text-slate-100">{{ t('jobs.applySection.title') }}</h2>
        <p class="text-slate-400 mb-10">{{ t('jobs.applySection.description') }}</p>
        <div class="glass-card rounded-2xl p-6 sm:p-8 grid gap-6 sm:grid-cols-2">
          <div v-for="key in ['emailSubject', 'attachments', 'contact', 'feedback']" :key="key" class="flex items-start gap-4">
            <div class="flex size-10 items-center justify-center rounded-xl bg-[#C8B89A]/15 shrink-0">
              <UIcon
                :name="key === 'emailSubject' ? 'i-lucide-briefcase-business' : key === 'attachments' ? 'i-lucide-file-text' : key === 'contact' ? 'i-lucide-message-circle' : 'i-lucide-clock-3'"
                class="size-5 text-white"
              />
            </div>
            <div>
              <p class="font-semibold text-slate-100 mb-1">{{ t(`jobs.applySection.${key}.title`) }}</p>
              <p class="text-sm text-slate-400">{{ t(`jobs.applySection.${key}.content`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
