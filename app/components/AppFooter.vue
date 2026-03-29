<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <USeparator
    icon="i-lucide-sofa"
    class="h-px"
  />

  <UFooter>
    <template #left>
      <div class="text-sm text-muted leading-6">
        <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
        <p v-html="t('footer.address').replace('802室', '802室<br>')" />
      </div>
    </template>

    <template #right />
  </UFooter>
</template>
