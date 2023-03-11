<template>
  <article
    id="aboutSection"
  >
    <div class="aboutContainer">
      <h3 class="text-4xl">Derfor skal du til Kold Festival iår</h3>
      <p class="w-full mx-auto max-w-lg md:mx-0">
        Kom til KOLD Festival og få årets første festivaloplevelse. 6 venues åbner dørene til et væld af forskellige musikoplevelser i starten februar. 
        Tag vennerne med under armen og oplev alt fra vilde fester, jazzkoncerter, talks om feminisme og bæredyygtighed og meget mere! 
        Alt dette kan du få adgang til for kun 300 kr. og endnu billigere, hvis du er studerende eller under 25 år.
      </p>
      <ul class="flex flex-col xl:flex-row gap-8">
        <li>
          <NuxtLink to="/about" class="bg-blue-600 hover:bg-blue-500 aboutLinks"> Læs mere om os </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq" class="bg-indigo-500/75 hover:bg-indigo-400/75 aboutLinks"> Praktiske informationer </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="grid place-content-center">
      <img :src="img1" class="w-full" />
    </div>
  </article>
</template>
<script setup>

// Import img - test
const img1 = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/aboutCollage.png";

</script>

<style>

#aboutSection {
  @apply container text-white mx-auto flex flex-col-reverse justify-between items-start md:flex-row p-4
}

.aboutContainer {
  @apply flex flex-col mt-8 justify-center gap-8 text-center md:text-left md:mt-0
}

.aboutLinks {
  @apply px-8 py-4 font-header font-bold text-center
}

</style>
