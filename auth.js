const supabaseUrl = 'https://pzzhikykiheouxwyijqcx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6emhpeWtpaGVvdXh3eWlqcWN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NDAyNzksImV4cCI6MjAzODExNjI3OX0.qE8Pw8bQGSnGKCCh1Vr0Fl_T6Ul9ywSKC7dL1AJO-AY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.error('Sign up error:', error.message);
    } else {
        console.log('User signed up:', user);
        document.getElementById('auth').style.display = 'none';
        document.getElementById('analysis').style.display = 'block';
    }
}

async function login(email, password) {
    const { user, session, error } = await supabase.auth.signIn({ email, password });
    if (error) {
        console.error('Login error:', error.message);
    } else {
        console.log('User logged in:', user);
        document.getElementById('auth').style.display = 'none';
        document.getElementById('analysis').style.display = 'block';
    }
}
