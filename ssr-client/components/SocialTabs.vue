<script setup>
/* import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg"; */

</script>

<template>
<aside id="SocialSideTab" class="fixed bottom-12 -translate-y-1/2 z-50 w-full flex bg-accent h-fit transition-transform duration-150
md:w-20 md:top-1/2 md:justify-end md:-translate-x-4 md:hover:translate-x-0">
    <ul class="flex w-full md:flex-col md:justify-center md:items-end">
        <li class=" socialItem transition-all duration-150 bg-blue-600 hover:bg-white w-full md:w-fit">
            <a class="h-12 w-full md:w-16 md:h-16 grid place-content-center" href="https://www.instagram.com/koldfestival/" target="_blank"><img class=" h-8 md:h-12 socialTabIcon transition-all duration-150" :src="IgIcon" /></a>
        </li>
        <li class=" socialItem transition-all duration-150 bg-blue-600 hover:bg-white w-full md:w-fit">
            <a class="h-12 w-full md:w-16 md:h-16 grid place-content-center" href="https://www.facebook.com/koldfestival" target="_blank"><img class=" h-8 md:h-12 socialTabIcon transition-all duration-150" :src="FbIcon" /></a>
        </li>
    </ul>
</aside>
</template>

<style>
.socialItem:hover .socialTabIcon {
    filter: invert(36%) sepia(100%) saturate(3918%) hue-rotate(215deg) brightness(94%) contrast(96%);
}
</style>