<script setup>
import Form from '../components/contact-form.vue';
import { ArrowDownCircleIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";

</script>
<template>
<main id="contact">
<h1 class=" uppercase font-header font-bold text-8xl text-center text-white">Kontakt</h1>
<p class="text-white font-body text-center my-4">Udfyld den nedenstående formular for at sende os en direkte besked:</p>

<div class=" flex flex-col justify-center items-center">
<Form />


<section id="personale">
<!-- Person 1 -->
<div class="contactCard">
    <div class="relative">
     <!-- bg img import -->
    <div class="imgBox" style="background-image: url('https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr'); background-size: cover;">
        <article class="floatInfo">
            <h2 class="font-bold">Klaus Nielsen</h2>
            <h3 class="font-normal">PR Medarbejder</h3>
        </article>
    </div>
</div>

<article class="grid gap-2 grid-cols2 py-4">
    <div class="flex items-center">
        <i class="mr-4"><PhoneIcon class="w-8 h-8"></PhoneIcon></i>
        <a href="tel:+4520228630" class="font-body font-normal">20 22 86 30</a>
    </div>
               
    <div class="flex items-center">
        <i class="mr-4"><EnvelopeIcon class="w-8 h-8"></EnvelopeIcon></i>
        <a href="mailto:sabuh@kolding.dk" class="font-body font-normal">sabuh@kolding.dk</a>
    </div>
          
</article>

</div>

<!-- Person 2 -->
<div class="contactCard">
    <div class="relative">
     <!-- bg img import -->
    <div class="imgBox" style="background-image: url('https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr'); background-size: cover;">
        <article class="floatInfo">
            <h2 class="font-bold">Klaus Nielsen</h2>
            <h3 class="font-normal">PR Medarbejder</h3>
        </article>
    </div>
</div>

<article class="grid gap-2 grid-cols2 py-4">
    <div class="flex items-center">
        <i class="mr-4"><PhoneIcon class="w-8 h-8"></PhoneIcon></i>
        <a href="tel:+4520228630" class="font-body font-normal">20 22 86 30</a>
    </div>
               
    <div class="flex items-center">
        <i class="mr-4"><EnvelopeIcon class="w-8 h-8"></EnvelopeIcon></i>
        <a href="mailto:sabuh@kolding.dk" class="font-body font-normal">sabuh@kolding.dk</a>
    </div>
          
</article>

</div>

</section>
</div>
<section class="test">
<div class="flex-center">
     <i class=" icon-3d"><ArrowDownCircleIcon class="w-32 h-32"></ArrowDownCircleIcon></i>
     <i class=" icon-3d"><ArrowDownCircleIcon class="w-32 h-32"></ArrowDownCircleIcon></i>
</div>
</section>


</main>
</template>
<style>
#contact {
    @apply flex flex-col justify-between items-center h-screen w-full py-32;
}

#personale {
    @apply text-white grid grid-cols-1 sm:grid-cols-2 gap-16 my-12;
}

.contactCard {
    @apply grid relative;
}

.imgBox {
     @apply w-64 h-64;
}

.floatInfo {
     @apply absolute bg-indigo-600/50 w-64 bottom-0 px-4 py-2 font-body;
}


/* Test */

.flex-center {
@apply w-full h-[20em] flex;
}

.icon-3d {
@apply p-[10px] text-white;
}



</style>