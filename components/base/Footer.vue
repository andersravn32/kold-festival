<template>
  <footer>
    <ul
      class="footerList"
    >
      <li class="footerItem">
        <NuxtLink class="item-link" to="/"> Hjem </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink class="item-link" to="/about"> Om os </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink class="item-link" to="/faq"> F.A.Q </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink class="item-link" to="/program"> Program </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink class="item-link" to="/partners"> Partnere </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink class="item-link" to="/contact"> Kontakt os </NuxtLink>
      </li>
    </ul>
    <div class="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row text-center lg:text-left">
      <ul class="text-white/75 flex flex-col space-y-2 font-body text-xs">
        <li class="font-bold">MUSIKKOLDING</li>
        <li>Jens Holms Vej 5, 6000 Kolding</li>
      </ul>
      <ul class="text-white/75 grid grid-cols-2 gap-2 lg:grid-cols-4 mb-5 font-body text-xs">
        <li><router-link to="/auth/signin">Personalelogin</router-link></li>
        <li><a href="#" target="_blank">Privatlivspolitik</a></li>
        <li><a href="#" target="_blank">Handelsbetingelser</a></li>
        <li>Copyright &copy; 2023</li>
      </ul>
    </div>
  </footer>
</template>

<style>
footer {
  @apply flex flex-col space-y-8 p-8 mt-8 mb-16;
}

.footerList {
  @apply container mx-auto flex justify-between flex-col md:flex-row place-items-center text-white font-header uppercase font-bold border-b-2 border-b-white/50;
}

.footerItem {
  @apply relative h-12 flex justify-center items-center border-b-[1px] border-b-white/50 w-full md:border-b-0
}

.item-link {
  @apply w-full h-full flex justify-center items-center
}

.item-link:hover {
  @apply bg-white/50
}

/* .footerItem::before {
  content: '';
  @apply absolute h-1 w-full bg-zinc-50 bottom-0 mt-2 duration-150 transition-all
} */
</style>
