
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function testSupabase() {
    if (!supabaseUrl || !supabaseAnonKey) {
        console.error('Supabase credentials are not set in the environment variables.');
        return;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
        // Fetch user profiles
        const { data: profiles, error: profilesError } = await supabase
            .from('profiles')
            .select('*');

        if (profilesError) {
            console.error('\nError fetching profiles:', profilesError.message);
        } else {
            console.log('\nProfiles:', profiles);
        }

        // Fetch couples
        const { data: couples, error: couplesError } = await supabase
            .from('couples')
            .select('*');

        if (couplesError) {
            console.error('\nError fetching couples:', couplesError.message);
        } else {
            console.log('\nCouples:', couples);
        }

    } catch (error) {
        console.error('\nAn unexpected error occurred:', error.message);
    }
}

testSupabase();
