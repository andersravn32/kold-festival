<template>
<aside id="SocialSideTab">
    <ul class="flex w-full md:flex-col md:justify-center md:items-end">
        <li class="socialItem">
            <a class="socialLink " href="https://www.instagram.com/koldfestival/" target="_blank"><img class="socialTabIcon" :src="IgIcon" /></a>
        </li>
        <li class="socialItem">
            <a class="h-12 w-full md:w-16 md:h-16 grid place-content-center" href="https://www.facebook.com/koldfestival" target="_blank"><img class=" h-8 md:h-12 socialTabIcon transition-all duration-150" :src="FbIcon" /></a>
        </li>
    </ul>
</aside>
</template>

<script setup>
const IgIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/instafram.svg";
const FbIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/facebook.svg";

</script>

<style>

    #SocialSideTab {
        @apply fixed bottom-12 -translate-y-1/2 z-50 w-full flex bg-accent h-fit transition-transform duration-150 md:w-20 md:top-1/2 md:justify-end md:-translate-x-4 md:hover:translate-x-0;
    }

    .socialItem {
       @apply transition-all duration-150 bg-blue-600 hover:bg-white w-full md:w-fit;
    }

    .socialLink {
        @apply h-12 w-full md:w-16 md:h-16 grid place-content-center;
    }

    .socialTabIcon {
        @apply h-8 md:h-12 transition-all duration-150;
    }

    .socialItem:hover .socialTabIcon {
        filter: invert(36%) sepia(100%) saturate(3918%) hue-rotate(215deg) brightness(94%) contrast(96%);
    }
</style>