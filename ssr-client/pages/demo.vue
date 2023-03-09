<template>
  <section id="demo">
    <BlockContent />
  </section>
</template>

<style>
#demo .blocks{
  @apply flex flex-col space-y-16;
}

#demo .block-artist-grid {
  @apply grid grid-cols-3 gap-16 container mx-auto;
}
</style>