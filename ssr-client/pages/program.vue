<script setup>
// Define supabase instance from composable
const supabase = useSupabaseClient();

// Define router from composable
const router = useRouter();

definePageMeta({
  name: "Program",
  hidden: true,
  editable: false,
});

//Import Artists
const { data } = await supabase.from("artists").select("*");
const artists = ref(data);

artists.value = artists.value.map((artist) => {
  return {
    ...artist,
    dateShort: new Intl.DateTimeFormat("da-DK", {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(Math.round(new Date(artist.date))),
  };
});

const festivalYears = ref([]);
artists.value.forEach((artist) => {
  if (!festivalYears.value.includes(artist.date.split("-")[0])) {
    return festivalYears.value.push(artist.date.split("-")[0]);
  }
});

const selectedYear = ref(festivalYears.value.reverse()[0]);

const concerts = ref([]);
const artistCols = ref([]);

const talks = ref([]);
const talkCols = ref([]);

const update = () => {
  artistCols.value = [];
  talkCols.value = [];

  concerts.value = artists.value
    .filter((artist) => {
      return artist.date.split("-")[0] == selectedYear.value;
    })
    .filter((artist) => {
      return artist.type == "concert";
    });

  talks.value = artists.value
    .filter((artist) => {
      return artist.date.split("-")[0] == selectedYear.value;
    })
    .filter((artist) => {
      return artist.type == "talk";
    });

  // Set artist columns state
  concerts.value.forEach((artist) => {
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

  // Set talk columns state
  talks.value.forEach((artist) => {
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
};

onMounted(() => {
  update();
});
</script>
<template>
  <section>
    <BasePageHeader
      id="program-header"
      bg="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgPartnere"
    >
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Program</h1>
      <h2 class="lg:text-xl text-center font-body">
        Nedenfor kan du læse hele festivalens program
      </h2>
    </BasePageHeader>

    <div id="program-tabs">
      <select v-model="selectedYear" @change="update">
        <option v-for="year in festivalYears" :value="year">{{ year }}</option>
      </select>
      <BaseTabs>
        <BaseTab title="Musik" class="grid grid-cols-2 gap-8">
          <div v-for="column in artistCols" class="flex flex-col space-y-4">
            <h2 class="text-xl">{{ column }}</h2>
            <ul class="flex flex-col space-y-4 divide-y-2 divide-white/25">
              <li class="grid grid-cols-4 font-header font-bold">
                <span>Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li
                v-for="artist in concerts.filter((artist) => {
                  return (
                    artist.dateShort.substring(
                      0,
                      artist.dateShort.length - 6
                    ) == column
                  );
                })"
                class="grid grid-cols-4 pt-4 items-center"
              >
                <span
                  class="cursor-pointer underline"
                  @click="router.push('/artist/' + artist.identifier)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span>{{ artist.time }}</span>
              </li>
            </ul>
          </div>
        </BaseTab>
        <BaseTab title="Talks" class="grid grid-cols-2 gap-8">
          <div v-for="column in talkCols" class="flex flex-col space-y-4">
            <h2 class="text-xl">{{ column }}</h2>
            <ul class="flex flex-col space-y-4 divide-y-2 divide-white/25">
              <li class="grid grid-cols-4 font-header font-bold">
                <span>Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li
                v-for="artist in talks.filter((artist) => {
                  return (
                    artist.dateShort.substring(
                      0,
                      artist.dateShort.length - 6
                    ) == column
                  );
                })"
                class="grid grid-cols-4 pt-4 items-center"
              >
                <span
                  class="cursor-pointer underline"
                  @click="router.push('/artist/' + artist.identifier)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span>{{ artist.time }}</span>
              </li>
            </ul>
          </div>
        </BaseTab>
      </BaseTabs>
    </div>
  </section>
</template>

<style>
#program-tabs {
  @apply container mx-auto text-white;
}

#program-tabs .tabs-titles {
  @apply flex items-center space-x-4 my-4;
}

#program-tabs .tab-title {
  @apply bg-indigo-500 px-6 py-2 relative font-header font-bold text-white cursor-pointer;
}

#program-tabs .tab-active {
  @apply bg-indigo-600/75 border-4 border-indigo-500 py-1;
}
</style>
