<template>
  <section id="demo">
    <BlockContent />
  </section>
</template>

<style>
#demo .block-header{
  @apply mb-8;
}

#demo .block-header h1{
  @apply text-6xl;
}

#demo .block-header p{
  @apply text-xl text-white font-bold uppercase;
}

#demo .block-accordion {
  @apply max-w-4xl mx-auto mb-4;
}

#demo .block-artist-grid {
  @apply grid grid-cols-3 gap-16 container mx-auto;
}
</style>