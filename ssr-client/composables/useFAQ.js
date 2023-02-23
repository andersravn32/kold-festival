export const useFaq = () => {
  // Import supabase client
  const supabase = useSupabaseClient();

  // FAQ array
  const data = ref([]);

  const getData = async () => {
    
    // Request data from supabase
    const req = await supabase.from("faq").select();

    // Assign comp data to response data
    data.value = req.data;

    // Return comp data
    return data.value;
  }

  // Create new artist
  const create = async (data) => {
    // Insert artist data
    const req = await supabase.from("faq").insert(data);

    // If insert failed, return null
    if (!(req.status == 201)) {
      return;
    }

    // Return newly created data
    return await getData();
  };

  // Update artist
  const update = async (id, data) => {};

  // Remove artist
  const remove = async (id) => {};

  return { data, getData, create, update, remove };
};
