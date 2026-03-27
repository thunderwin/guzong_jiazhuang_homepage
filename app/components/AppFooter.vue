<script setup lang="ts">
const columns = [{
  label: '核心能力',
  children: [{
    label: 'AI设计提效'
  }, {
    label: '供应链整合'
  }, {
    label: '全球交付网络'
  }, {
    label: '全屋定制项目'
  }]
}, {
  label: '合作方式',
  children: [{
    label: '项目制合作'
  }, {
    label: '渠道合作'
  }, {
    label: '商务对接'
  }, {
    label: '交付协同'
  }]
}, {
  label: '关于我们',
  children: [{
    label: '公司定位'
  }, {
    label: '团队实力'
  }, {
    label: '增长经验'
  }, {
    label: '长期愿景'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: '提交成功',
    description: '我们已收到您的联系方式，将尽快与您沟通。'
  })
}
</script>

<template>
  <USeparator
    icon="i-lucide-sofa"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="获取合作方案"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="请输入邮箱"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      label="提交"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        绎间科技 • 全屋设计出海一体化平台 • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="#"
        icon="i-lucide-message-circle"
        aria-label="在线咨询"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="#"
        icon="i-lucide-phone-call"
        aria-label="电话联系"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="#"
        icon="i-lucide-handshake"
        aria-label="商务合作"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
