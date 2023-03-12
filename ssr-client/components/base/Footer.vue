<template>
    <footer>
        <ul
            class="container mx-auto grid grid-cols-3 place-items-center text-white font-header uppercase font-bold border-b-2 border-b-white/50 pb-8">
            <li>
                <NuxtLink to="/">
                    Hjem
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">
                    Om os
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/faq">
                    F.A.Q
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/program">
                    Program
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/partners">
                    Partnere
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">
                    Kontakt os
                </NuxtLink>
            </li>
        </ul>
        <ul class="text-white/75 flex flex-col space-y-2 font-body text-xs">
            <li class="text-center">MUSIKKOLDING</li>
            <li class="text-center">Jens Holms Vej 5, 6000 Kolding</li>
        </ul>
    </footer>
</template>

<style>
footer {
    @apply flex flex-col space-y-8 py-8;
}
</style>