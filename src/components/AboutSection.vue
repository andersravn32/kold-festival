<script setup>
import img1 from '../assets/img/aboutImg2.png'

</script>
<template>
<article id="aboutSection" class=" container text-white mx-auto flex flex-col justify-between items-start md:flex-row">
    <div class=" flex flex-col justify-center gap-8">
        <h3 class=" text-4xl">Derfor skal du til Kold Festival iår</h3>
        <p class=" w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias error vero nulla 
            est tenetur neque, expedita maxime id iusto hic dolores, 
            impedit laborum similique maiores consequuntur? Numquam, explicabo eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, alias error vero nulla 
            est tenetur neque, expedita maxime id iusto hic dolores, 
            impedit laborum similique maiores consequuntur? Numquam, explicabo eius.
        </p>
        <ul class="flex gap-4">
            <li>
                <router-link to="/about" class="bg-blue-600 px-8 py-4 font-header font-bold hover:bg-blue-500">
                    Læs mere om os
                </router-link> 
            </li>
            <li>
                <router-link to="/faq" class="bg-indigo-500/75 px-8 py-4 font-header font-bold hover:bg-indigo-400/75">
                    Praktiske informationer
                </router-link> 
            </li>
        </ul>
    </div>
    <div class="grid place-content-center">
    <img :src="img1" class=" w-full">
    </div>
</article>
</template>