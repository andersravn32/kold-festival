<script setup>
import img1 from "../assets/img/about_frontImg.png";
</script>
<template>
  <article
    id="aboutSection"
    class="container text-white mx-auto flex flex-col-reverse justify-between items-start md:flex-row p-4"
  >
    <div class="flex flex-col justify-center gap-8 text-center md:text-left">
      <h3 class="text-4xl">Derfor skal du til Kold Festival iår</h3>
      <p class="w-full max-w-lg">
        Kom til KOLD Festival og få årets første festivaloplevelse. 6 venues åbner dørene til et væld af forskellige musikoplevelser i starten februar. 
        Tag vennerne med under armen og oplev alt fra vilde fester, jazzkoncerter, talks om feminisme og bæredyygtighed og meget mere! 
        Alt dette kan du få adgang til for kun 300 kr. og endnu billigere, hvis du er studerende eller under 25 år.
      </p>
      <ul class="flex flex-col lg:flex-row gap-4">
        <li>
          <router-link to="/about" class="bg-blue-600 px-8 py-4 font-header font-bold hover:bg-blue-500 text-center"> Læs mere om os </router-link>
        </li>
        <li>
          <router-link to="/faq" class="bg-indigo-500/75 px-8 py-4 font-header font-bold hover:bg-indigo-400/75 text-center"> Praktiske informationer </router-link>
        </li>
      </ul>
    </div>
    <div class="grid place-content-center">
      <img :src="img1" class="w-full" />
    </div>
  </article>
</template>
