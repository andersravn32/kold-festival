const user = ref(null);
const profile = ref(null);

export const useAccount = () => {
  const supabase = useSupabaseClient();

  // Assign account user to supabase user
  user.value = /* useSupabaseUser().value; */ { email: "test@test.dk" }

  const update = async () => {
    // If no data was loaded, return nothing
    /* if (!user.value) {
      return;
    } */

    // Fetch profile data from supabase
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.value.id);

    // If no data was fetched, return nothing
    /* if (!data) {
      return;
    }
 */
    // Assign account profile data to fetched data
    profile.value = { email: "test@test.dk" } //data[0];
  };

  const signout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return;
    }

    user.value = null;
    profile.value = null;
  };
  return { user, profile, update, signout };
};
