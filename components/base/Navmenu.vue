<script setup>
// Define component emits
defineEmits(["close"]);

const IgIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/instafram.svg";
const FbIcon = "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/facebook.svg";
</script>

<template>
  <div id="navmenu">
    <ul>
      <li>
        <NuxtLink class="link" to="/" @click="$emit('close')">Forside</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/program" @click="$emit('close')">Program</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/faq" @click="$emit('close')">F.A.Q</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/about" @click="$emit('close')">Om os</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/partners" @click="$emit('close')">Partnere</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/contact" @click="$emit('close')">Kontakt os</NuxtLink>
      </li>
      <li class="socialsContainer">
        <div class="socialItemMobile">
            <a class="socialLinkMobile" href="https://www.instagram.com/koldfestival/" target="_blank"><img class="socialTabIconMobile" :src="IgIcon" /></a>
        </div>
        <div class="socialItemMobile">
            <a class="socialLinkMobile" href="https://www.facebook.com/koldfestival" target="_blank"><img class="socialTabIconMobile" :src="FbIcon" /></a>
        </div>
      </li>
    </ul>
    <!-- <div class=" absolute bottom-4 left-1/2 a">
      <a class="socialLinkMobile" href="https://www.instagram.com/koldfestival/" target="_blank"><img class="socialTabIconMobile" :src="IgIcon" /></a>
      <a class="socialLinkMobile" href="https://www.facebook.com/koldfestival" target="_blank"><img class="socialTabIconMobile" :src="FbIcon" /></a>
    </div> -->
  </div>
</template>

<style>
#navmenu {
  @apply bg-midnight fixed top-0 bottom-0 left-0 right-0 z-[90] flex items-center justify-center;
}

#navmenu ul {
  @apply flex flex-col items-center font-header font-bold uppercase text-white/50 space-y-4 md:space-y-8;
}

#navmenu ul li {
  @apply flex justify-center items-center text-4xl xl:text-6xl m-0;
}

.socialsContainer {
   @apply flex w-full gap-4;
}


.socialItemMobile {
    @apply flex md:hidden justify-center items-center transition-all duration-150 bg-blue-600 w-full hover:bg-white rounded-sm;
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
