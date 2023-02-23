const user = ref(null);
const profile = ref(null);

export const useAccount = () => {
  const supabase = useSupabaseClient();

  const update = async () => {
    // Assign account user to supabase user
    user.value = useSupabaseUser().value;

    // Fetch profile data from supabase
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.value.id);

    // Assign account profile data to fetched data
    profile.value = data[0];
  };
  return { user, profile, update };
};
