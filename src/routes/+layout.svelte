<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
    import Nav from '../components/Nav.svelte'
  
    onMount(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(() => {
        invalidate('supabase:auth')
      })
  
      return () => {
        subscription.unsubscribe()
      }
    })
</script>
<body class="min-h-screen bg-slate-50 font-mono container">
  <Nav/>
  <div class="w-full h-10"></div>
  <div class="font-sans container p-8">
    <slot />
  </div>
</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>