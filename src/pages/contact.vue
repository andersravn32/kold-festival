<script setup>
import Form from '../components/contact-form.vue';
import { ArrowDownCircleIcon } from "@heroicons/vue/24/outline";

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
<span>
     <!-- bg img import -->
<div class="imgBox" style="background-image: url('https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr'); background-size: cover;">
</div>
<article class="floatInfo">
     <h2>Navn</h2>
     <h3>Titel</h3>
</article>
</span>

<article class="grid  grid-cols2">
               <article class="flex">
                    <i class="mr-4"> icon</i>
                    <a href="tel:+4512345678">Nummer</a>
               </article>
               
               <article class="flex">
                    <i class="mr-4"> icon</i>
                    <a href="">E-mail</a>
               </article>
          
          </article>

</div>
<!-- Person 2 -->
     <div class="contactCard">

          <span>
               <!-- bg img import -->
          <div class="imgBox" style="background-image: url('https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr'); background-size: cover;">
          </div>
          <article class="floatInfo">
               <h2>Navn</h2>
               <h3>Titel</h3>
          </article>
          </span>

          <article class="grid  grid-cols2">
               <article class="flex">
                    <i class="mr-4"> icon</i>
                    <a href="tel:+4512345678">Nummer</a>
               </article>
               
               <article class="flex">
                    <i class="mr-4"> icon</i>
                    <a href="">E-mail</a>
               </article>
          
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
.contactCard .floatInfo {
     @apply absolute bg-indigo-600/50 w-64 bottom-12;
}


/* Test */

.flex-center {
  width: 100%;

 /*  Midlertidig - slet senere */
 height: 20em;
  
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.icon-3d {
  padding: 10px;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #fff;
}

.icon-3d:hover {
  -webkit-animation: icon3d 200ms infinite;
        animation: icon3d 200ms infinite;
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px rgba(244,67,54,1), -5px -6px rgba(33,150,243,1)
  }
  25% {
    text-shadow: -5px -6px rgba(244,67,54,1), 5px 4px rgba(33,150,243,1)
  }
  50% {
    text-shadow: 5px -4px rgba(244,67,54,1), -8px 4px rgba(33,150,243,1)
  }
  75% {
    text-shadow: -8px -4px rgba(244,67,54,1), -5px -4px rgba(33,150,243,1)
  }
  100% {
    text-shadow: -5px 0 rgba(244,67,54,1), 5px -4px rgba(33,150,243,1)
  }
}

</style>