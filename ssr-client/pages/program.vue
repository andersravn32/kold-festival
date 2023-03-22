<script setup>
// Define supabase instance from composable 
const supabase = useSupabaseClient()

// Define router from composable
const router = useRouter();

definePageMeta({
  name: "Program",
  hidden: false,
  editable: false,
});



//Import Artists
const { data }= await supabase.from("artists").select("*");
const artists = data;

// Define array for storing number and titles of columns
const artistCols = ref([]);
const talkCols = ref([]);


const artistDates = ref(
  artists.map((artist) => {
    return {
      ...artist,
      dateShort: new Intl.DateTimeFormat("da-DK", {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(Math.round(new Date(artist.date) / 1000)),
    };
  })
);

/* onMounted(() => {
  //Sort concerts and talks
  const concerts = artistDates.value.filter((artist) => {
    return artist.type === "concert";
  });

  const talks = artistDates.value.filter((artist) => {
    return artist.type === "talk";
  });

  // Get number of dates as array
  concerts.forEach((artist) => {
    if (
      !artistCols.value.includes(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      )
    ) {
      artistCols.value.push(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      );
    }
  });

  // Get number of dates as array
  talks.forEach((artist) => {
    if (
      !talkCols.value.includes(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      )
    ) {
      talkCols.value.push(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      );
    }
  });

  // Sort concerts
  concerts.sort((x, y) => {
    return x.date - y.date;
  });

  // Sort talks
  talks.sort((x, y) => {
    return x.date - y.date;
  });
}); */
</script>
<template>
  <section id="programPage">
    <PageHeader>
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Program</h1>
      <h2 class="lg:text-xl text-center font-body">
        Nedenfor kan du læse hele festivalens program
      </h2>
    </PageHeader>

    <article id="programContainer">
      <Tabs>
        <Tab title="Musik" class="tabStyle">
          <div
            v-for="(column, index) in artistCols.value"
            :key="index"
            class="flex flex-col space-y-4 bg-blue-900/75 p-4"
          >
            <h2 class="text-xl">{{ column }}</h2>
            <ul class="flex flex-col space-y-2 divide-y-2 divide-blue-900">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li
                v-for="(artist, index) in concerts.filter((artist) => {
                  return (
                    artist.dateShort.substring(
                      0,
                      artist.dateShort.length - 6
                    ) == column
                  );
                })"
                :key="index"
                class="grid grid-cols-4 font-body pt-2"
              >
                <span
                  class="col-span-2 cursor-pointer underline"
                  @click="router.push(`/artist/${artist.identifier}`)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span
                  >kl
                  {{
                    artist.dateShort
                      .substring(
                        artist.dateShort.length - 6,
                        artist.dateShort.length
                      )
                      .replace(".", ":")
                  }}</span
                >
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    </article>
  </section>
</template>

<style>
.programContainer {
  @apply text-zinc-100;
}

.tabStyle {
  @apply grid md:grid-cols-2 lg:grid-cols-2 gap-4;
}
</style>
