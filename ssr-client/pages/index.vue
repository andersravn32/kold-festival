<script setup>
/* Meta */
definePageMeta({
//Disable duplicate
  hid: 'Hjem',
//Page Title
  name: "Hjem",
//Page description
  content: 'Default description for the page'
});
/* Imports */
import { InformationCircleIcon } from "@heroicons/vue/24/solid";

// GSAP implementation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/* // Supabase
const supabase = useSupabaseClient();

const { data: artists } = await useAsyncData('artists', async () => {
    const { data } = await supabase.from('artists').select();

    return data
})
 */

/* const { data } = useArtists();
console.log(data)
  const artistsData = ref(
    artists.filter((artist) => {
      return artist.type == "concert";
    })
  ); */

// import router
const router = useRouter();

const artists = useArtists();

artists.reload();

// Load gsap when page has mounted
onMounted(async () => {

// Register gsap plugin
gsap.registerPlugin(ScrollTrigger);

// Floating Banner Effect
const banner = gsap.timeline();

// Enter tickets Effect
const tickets = gsap.timeline();

// Position animated banner center
banner
  .from("#artist-banner", { x: "-50%" })
  .from(".floatingText", { opacity: 1 });

// Enterings effect tickets
tickets.to(".price-panel", {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "ease-out",
  stagger: 0.3,
});

// Create scrolltrigger
ScrollTrigger.create({
  animation: banner,
  trigger: "#artist-banner",
  scrub: 1,
  start: "top 90% ",
  end: "bottom 40%",
  toggleActions: "restart none reset none",
});

ScrollTrigger.create({
  animation: tickets,
  trigger: "#tickets",
  start: "top 70%",
  end: "bottom 40%",
  toggleActions: "play none none none",
});

 
});
</script>




<template>
  <div id="page-index">
<!-- Video Hero -->
   <PageHeaderIndex />
<!-- Floating GSAP Text -->
    <div class="overflow-hidden w-full">
      <div id="artist-banner">
        <span class="floatingText">KUNSTNERE</span>
        <span class="floatingText">KUNSTNERE</span>
        <span>KUNSTNERE</span>
        <span class="floatingText">KUNSTNERE</span>
        <span class="floatingText">KUNSTNERE</span>
      </div>
    </div> 

<!-- Artis Grid (mangler: se om data virker) -->
<section class="pb-16" id="artist" v-if="artists.data">
      <div class="artistGrid">
        <GridArtist
          v-for="(artist, index) in artists.data.value"
          :key="index"
          :name="artist.name"
          :subartist="artist.subtitle"
          :artist-cover="artist.header"
          @click="router.push(`/artist/${artist.identifier}`)"
        />
      </div>
    </section>
    
    

<!-- Ticket Selection -->
    <section id="tickets">
      <PricePanel
        class="price-panel"
        title="Partout"
        :price="300"
        :studentPrice="150"
      />
      <PricePanel
        class="price-panel"
        title="Fredag"
        :price="175"
        :studentPrice="100"
      />
      <PricePanel
        class="price-panel"
        title="Lørdag"
        subtitle="(OBS: Gælder ikke Ude af Kontrol)"
        :price="175"
        :studentPrice="100"
      />
      <div
        class="price-panel notice"
      >
        <InformationCircleIcon class="h-32 w-32" />
        <h3>Vær opmærksom på..</h3>
        <p class="font-body text-center">
          For at opnå student / ung pris skal man være under 25 år eller have et
          gyldigt studiekort
        </p>
      </div>
    </section>

<!-- About Selection -->
     <AboutSection /> 

  </div>
</template>


<style scoped>

/* Floating Text styling */
#artist-banner{
  @apply flex justify-center items-center py-4 font-bold text-[4rem] lg:text-[8rem] xl:text-[12rem] font-header text-zinc-100 space-x-8 lg:space-x-16;
}
.floatingText{
  @apply opacity-25 ;
}
/* Artist grid styling */
.artistGrid {
  @apply  p-4 container mx-auto grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
/* Tickets styling */
#tickets {
  @apply container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-zinc-100 md:mb-16;
}

.notice {
  @apply flex p-4 flex-col justify-center items-center bg-blue-900/75 border-2 border-zinc-100;
}


</style>
