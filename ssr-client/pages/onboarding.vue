<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();


// Redirect if user is not signed in
if (!user.value){
    router.push("/")
}

// Loading state
const loading = ref(false);

// Update loading state
loading.value = true;

// Fetch profile data from supabase
const { data, error } = await supabase.from("profiles").select().eq("id", user.value.id);

// Assign profile data to supabase
profile.value = data.value[0];

</script>

<template>
    <section id="page-onboarding">
        
    </section>
</template>
