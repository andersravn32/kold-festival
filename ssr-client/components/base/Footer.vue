<template>
  <footer>
    <ul
      class="container mx-auto flex justify-evenly flex-col md:flex-row place-items-center text-white font-header uppercase font-bold border-b-2 border-b-white/50 pb-8"
    >
      <li class="footerItem">
        <NuxtLink to="/"> Hjem </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink to="/about"> Om os </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink to="/faq"> F.A.Q </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink to="/program"> Program </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink to="/partners"> Partnere </NuxtLink>
      </li>
      <li class="footerItem">
        <NuxtLink to="/contact"> Kontakt os </NuxtLink>
      </li>
    </ul>
    <div class="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row text-center lg:text-left">
      <ul class="text-white/75 flex flex-col space-y-2 font-body text-xs">
        <li class="font-bold">MUSIKKOLDING</li>
        <li>Jens Holms Vej 5, 6000 Kolding</li>
      </ul>
      <ul class="text-white/75 flex space-x-4 font-body text-xs">
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
  @apply flex flex-col space-y-8 py-8 mt-8 px-8;
}

.footerItem {
  @apply relative h-12 flex justify-center items-center border-b-[1px]
}

/* .footerItem::before {
  content: '';
  @apply absolute h-1 w-full bg-zinc-50 bottom-0 mt-2 duration-150 transition-all
} */

.footerItem:hover {
  @apply border-b-2 md:border-b-2
}
</style>
