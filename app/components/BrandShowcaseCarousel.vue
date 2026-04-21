<script setup lang="ts">
const { t } = useI18n()

const images = [
  '/images/brand-showcase/showcase-1.png',
  '/images/brand-showcase/showcase-2.png',
  '/images/brand-showcase/showcase-3.png',
  '/images/brand-showcase/showcase-4.png',
  '/images/brand-showcase/showcase-5.png',
  '/images/brand-showcase/showcase-6.png',
  '/images/brand-showcase/showcase-7.png',
  '/images/brand-showcase/showcase-8.png',
  '/images/brand-showcase/showcase-9.png',
  '/images/brand-showcase/showcase-10.png',
  '/images/brand-showcase/showcase-11.png',
  '/images/brand-showcase/showcase-12.png',
  '/images/brand-showcase/showcase-13.png',
  '/images/brand-showcase/showcase-14.png'
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
  
  // Hidden slides
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
  }, 6000)
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
  <section 
    id="showcase"
    class="py-24 bg-default"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div class="max-w-3xl">
          <h2 class="text-5xl md:text-6xl mb-6 font-bold tracking-tight uppercase whitespace-nowrap">
            {{ t('brand.showcase.title1') }}<span class="italic font-normal text-primary ml-2">{{ t('brand.showcase.title2') }}</span>
          </h2>
          <p class="text-muted text-xl">{{ t('brand.showcase.description') }}</p>
        </div>
        <div class="flex gap-4">
          <button 
            class="w-12 h-12 rounded-full border-2 border-default flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
            @click="prevSlide"
          >
            <UIcon name="i-heroicons-chevron-left" class="w-5 h-5" />
          </button>
          <button 
            class="w-12 h-12 rounded-full border-2 border-default flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
            @click="nextSlide"
          >
            <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="carousel-container">
        <div class="carousel-track">
          <div 
            v-for="(img, index) in images"
            :key="index"
            :class="getSlideClass(index)"
            @click="index === (currentIndex - 1 + totalSlides) % totalSlides ? prevSlide() : index === (currentIndex + 1) % totalSlides ? nextSlide() : null"
          >
            <img :src="img" :alt="`Brand Showcase ${index + 1}`" />
          </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center mt-8">
          <div class="flex gap-2">
            <button
              v-for="(_, index) in images"
              :key="index"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="index === currentIndex ? 'bg-primary w-6' : 'bg-default/50'"
              @click="goToSlide(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 550px;
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
  height: 480px;
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
  transform: translateX(-170%) scale(0.85);
  z-index: 5;
  background: #ffffff;
}

.carousel-slide.next {
  opacity: 0.8;
  transform: translateX(170%) scale(0.85);
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