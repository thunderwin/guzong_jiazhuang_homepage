<script setup lang="ts">
const { t, locale } = useI18n()

const images = [
  '/images/carousel/carousel-1.png',
  '/images/carousel/carousel-2.png',
  '/images/carousel/carousel-3.png',
  '/images/carousel/carousel-4.png',
  '/images/carousel/carousel-5.png',
  '/images/carousel/carousel-6.png'
]

const currentIndex = ref(0)
const totalSlides = images.length

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const getSlideClass = (index: number) => {
  if (index === currentIndex.value) {
    return 'carousel-slide active'
  }
  const prevIndex = (currentIndex.value - 1 + totalSlides) % totalSlides
  const nextIndex = (currentIndex.value + 1) % totalSlides
  
  if (index === prevIndex) {
    return 'carousel-slide prev'
  }
  if (index === nextIndex) {
    return 'carousel-slide next'
  }
  
  if (index < currentIndex.value) {
    return 'carousel-slide hidden-left'
  }
  return 'carousel-slide hidden-right'
}

// Auto-advance
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div 
    class="relative w-full max-w-6xl mx-auto"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div class="absolute -top-8 left-0 z-20">
      <h2 class="text-3xl sm:text-4xl font-bold mb-3 text-default">
        {{ locale === 'zh' ? '项目展示' : 'Project Showcase' }}
      </h2>
    </div>
    
    <div class="carousel-container pt-10">
      <!-- Navigation Buttons -->
      <div class="absolute top-1/2 -translate-y-1/2 left-0 z-30">
        <button 
          class="w-10 h-10 rounded-full border-2 border-default/50 bg-default/80 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
          @click="prevSlide"
        >
          <UIcon name="i-heroicons-chevron-left" class="w-5 h-5" />
        </button>
      </div>
      <div class="absolute top-1/2 -translate-y-1/2 right-0 z-30">
        <button 
          class="w-10 h-10 rounded-full border-2 border-default/50 bg-default/80 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
          @click="nextSlide"
        >
          <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
        </button>
      </div>

      <div class="carousel-track">
        <div 
          v-for="(img, index) in images"
          :key="index"
          :class="getSlideClass(index)"
          @click="index === (currentIndex - 1 + totalSlides) % totalSlides ? prevSlide() : index === (currentIndex + 1) % totalSlides ? nextSlide() : null"
        >
          <img :src="img" :alt="`Project ${index + 1}`" />
        </div>
      </div>

      <!-- Dots -->
      <div class="flex justify-center mt-4">
        <div class="flex gap-2">
          <button
            v-for="(_, index) in images"
            :key="index"
            class="h-2 w-2 rounded-full transition-all duration-300"
            :class="index === currentIndex ? 'bg-primary w-4' : 'bg-default/50 hover:bg-default/70'"
            @click="goToSlide(index)"
          />
        </div>
      </div>

      <!-- Learn More Link -->
      <NuxtLink 
        to="/brand#showcase"
        class="absolute bottom-4 right-4 z-30 text-sm text-muted hover:text-primary transition-colors flex items-center gap-1 bg-default/80 px-3 py-1.5 rounded-lg shadow"
      >
        {{ locale === 'zh' ? '了解更多' : 'Learn More' }}
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  position: relative;
}

.carousel-slide {
  position: absolute;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: 0;
  cursor: pointer;
  width: 25%;
  height: 75%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.carousel-slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  z-index: 10;
  width: 70%;
  height: 100%;
  cursor: default;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  background: #ffffff;
}

.carousel-slide.prev {
  opacity: 0.8;
  transform: translateX(-120%) scale(0.85);
  z-index: 5;
  background: #ffffff;
}

.carousel-slide.next {
  opacity: 0.8;
  transform: translateX(120%) scale(0.85);
  z-index: 5;
  background: #ffffff;
}

.carousel-slide.hidden-left {
  transform: translateX(-180%) scale(0.5);
  opacity: 0;
}

.carousel-slide.hidden-right {
  transform: translateX(180%) scale(0.5);
  opacity: 0;
}
</style>