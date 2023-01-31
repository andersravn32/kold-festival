export const useArtists = () => {
  // Import supabase client
  const supabase = useSupabaseClient();

  // Artists array
  const data = ref([]);

  // Reload current artist data
  const reload = async () => {
    // Request data from supabase
    const req = await supabase.from("artists").select().eq('public', true);

    // Assign comp data to response data
    data.value = req.data;

    // Return comp data
    return data.value;
  };

  // Create new artist
  const create = async (data) => {
    // Insert artist data
    const req = await supabase.from("artists").insert(data);

    // If insert failed, return null
    if (!(req.status == 201)) {
      return;
    }

    // Return newly created data
    return await reload();
  };

  // Update artist
  const update = async (id, data) => {};

  // Remove artist
  const remove = async (id) => {};

  return { data, reload, create, update, remove };
};
