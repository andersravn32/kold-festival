<template>
<aside id="SocialSideTabMobile">
    <ul class="flex w-full">
        <li class="socialItemMobile">
            <a class="socialLinkMobile" href="https://www.instagram.com/koldfestival/" target="_blank"><img class="socialTabIconMobile" :src="IgIcon" /></a>
        </li>
        <li class="socialItemMobile">
            <a class="socialLinkMobile" href="https://www.facebook.com/koldfestival" target="_blank"><img class="socialTabIconMobile" :src="FbIcon" /></a>
        </li>
    </ul>
</aside>
</template>

<script setup>
const IgIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/instafram.svg";
const FbIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/facebook.svg";

</script>

<style>

    #SocialSideTabMobile {
        @apply fixed md:hidden bottom-16 -translate-y-2 z-50 w-full flex transition-transform duration-150;
    }

    .socialItemMobile {
       @apply flex justify-center items-center transition-all duration-150 bg-blue-600 w-full hover:bg-white;
    }

    .socialLinkMobile {
        @apply h-full w-full py-2 grid place-content-center;
    }

    .socialTabIconMobile {
        @apply h-8 transition-all duration-150;
    }

    .socialItemMobile:hover .socialTabIconMobile {
        filter: invert(36%) sepia(100%) saturate(3918%) hue-rotate(215deg) brightness(94%) contrast(96%);
    }
</style>