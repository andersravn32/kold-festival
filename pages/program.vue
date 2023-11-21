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
artists.value = artists.value.filter(a => a.public).map((artist) => {
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
    if(!artist.public) return
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
      return artist.public && artist.date.split("-")[0] == selectedYear.value;
    })
    .filter((artist) => {
      return artist.type == "concert";
    })
    .sort((x, y) => {
      if(!x.time || !y.time) return
      return x.time.split(':')[0] - y.time.split(':')[0]
    });

  talks.value = artists.value
    .filter((artist) => {
      return artist.public && artist.date.split("-")[0] == selectedYear.value;
    })
    .filter((artist) => {
      return artist.type == "talk";
    })
    .sort((x, y) => {
      if(!x.time || !y.time) return
      return x.time.split(':')[0] - y.time.split(':')[0]
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

const sidebar = useSidebar()

onMounted(() => {
  update();
});
</script>
<template>
  <section :class="{'overflow-y-hidden': sidebar.show}">
    <BasePageHeader
      id="program-header"
      bg="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgPartnere"
    >
      <h1 class="text-4xl lg:text-6xl uppercase leading-[0.9]">Program</h1>
      <h2 class="lg:text-xl text-center font-body">
        Nedenfor kan du læse hele festivalens program
      </h2>
    </BasePageHeader>

    <div id="program-tabs">
      <select v-model="selectedYear" @change="update">
        <option v-for="year in festivalYears" :value="year">{{ year }}</option>
      </select>
      <BaseTabs>
        <BaseTab title="Musik" class="grid space-y-8 lg:grid-cols-2 lg:space-y-0 gap-8">
          <div v-for="column in artistCols" class="flex flex-col space-y-4">
            <h2 class="text-xl">{{ column }}</h2>
            <ul class="flex flex-col space-y-4 divide-y-2 divide-white/25">
              <li class="tabel-placement font-header font-bold">
                <span>Navn</span>
                <span>Sted</span>
                <span class="flex justify-end items-center pr-4">Tidspunkt</span>
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
                class="tabel-placement pt-4 items-center"
              >
                <span
                  class="cursor-pointer underline font-bold"
                  @click="router.push('/artist/' + artist.identifier)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span class="flex justify-end items-center pr-8">{{ artist.time }}</span>
              </li>
            </ul>
          </div>
        </BaseTab>
        <BaseTab title="Talks" class="grid md:grid-cols-2 gap-8">
          <div v-for="column in talkCols" class="flex flex-col space-y-4">
            <h2 class="text-xl">{{ column }}</h2>
            <ul class="flex flex-col space-y-4 divide-y-2 divide-white/25">
              <li class="tabel-placement font-header font-bold">
                <span>Navn</span>
                <span>Sted</span>
                <span class="flex justify-end items-cente pr-4">Tidspunkt</span>
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
                class="tabel-placement pt-4 items-center"
              >
                <span
                  class="cursor-pointer underline"
                  @click="router.push('/artist/' + artist.identifier)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span class="flex justify-end items-center pr-4">{{ artist.time }}</span>
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
  @apply container mx-auto text-white px-8 py-8 space-y-8;
}

.thumbnail-program {
  @apply w-12 h-12 object-cover
}

.tabel-placement {
  @apply grid grid-cols-2 sm:grid-cols-3;
}

.tabel-placement span:nth-child(2) {
  @apply grid-stack sm:col-start-2
}

.grid-stack {
  grid-column: 1 / 2;
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
