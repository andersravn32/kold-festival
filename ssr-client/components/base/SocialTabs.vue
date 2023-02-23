<template>
<aside id="SocialSideTab">
    <ul class="flex-col justify-center items-end">
        <li class="socialItem">
            <a class="socialLink" href="https://www.instagram.com/koldfestival/" target="_blank"><img class="socialTabIcon" :src="IgIcon" /></a>
        </li>
        <li class="socialItem">
            <a class="socialLink" href="https://www.facebook.com/koldfestival" target="_blank"><img class="socialTabIcon" :src="FbIcon" /></a>
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
        @apply hidden md:fixed md:flex bottom-12 -translate-y-1/2 z-50 w-20 bg-accent h-fit transition-transform duration-150 top-1/2 justify-end -translate-x-4 hover:translate-x-0;
    }

    .socialItem {
       @apply transition-all duration-150 bg-blue-600 hover:bg-white w-fit;
    }

    .socialLink {
        @apply w-16 h-16 grid place-content-center;
    }

    .socialTabIcon {
        @apply h-12 transition-all duration-150;
    }

    .socialItem:hover .socialTabIcon {
        filter: invert(36%) sepia(100%) saturate(3918%) hue-rotate(215deg) brightness(94%) contrast(96%);
    }
</style>