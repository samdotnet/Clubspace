<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
  
    let loading = false
    let email: string
  
    const handleLogin = async () => {
      try {
        loading = true
        const { error } = await supabase.auth.signInWithOtp({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  </script>
  
  <form class="flex items-center" on:submit|preventDefault="{handleLogin}">
    <div class="">
      <h1 class="text-2xl font-bold">Clubspace</h1>
      <p class="text-md font-light">Sign in via magic link with your email below</p>
      <div>
        <input class="bg-gray-200 rounded-md p-2 my-2" placeholder="Email" type="email" bind:value="{email}" />
      </div>
      <div>
        <input type="submit" class="bg-green-400 text-white hover:cursor-pointer p-2 rounded-lg my-2" value={loading ? 'Loading...' : 'Send Magic Link'}
        disabled={loading} />
      </div>
    </div>
  </form>
  