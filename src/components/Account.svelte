<script lang="ts">
    import { onMount } from 'svelte'
    import type { AuthSession } from '@supabase/supabase-js'
    //import Avatar from '../components/Avatar.svelte'
    //<Avatar bind:url="{avatarUrl}" size="{10}" on:upload="{updateProfile}" />
    import { supabase } from '$lib/supabaseClient'
  
    export let session: AuthSession
  
    let loading = false
    let username: string | null = null
    let website: string | null = null
    let avatarUrl: string | null = null
  
    onMount(() => {
      getProfile()
    })
  
    const getProfile = async () => {
      try {
        loading = true
        const { user } = session
  
        const { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()
  
        if (data) {
          username = data.username
          website = data.website
          avatarUrl = data.avatar_url
        }
  
        if (error && status !== 406) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  
    async function updateProfile() {
      try {
        loading = true
        const { user } = session
  
        const updates = {
          id: user.id,
          username,
          website,
          avatar_url: avatarUrl,
          updated_at: new Date(),
        }
  
        let { error } = await supabase.from('profiles').upsert(updates)
  
        if (error) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  
    async function signOut() {
      try {
        loading = true
        let { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  </script>
  
  <form use:getProfile class="flex items-center flex-col" on:submit|preventDefault="{updateProfile}">
    <div>
      <input class="bg-gray-200 text-gray-400 rounded-md p-2 my-2" placeholder="Email" id="email" type="text" value="{session.user.email}" disabled />
    </div>
    <div>
      <input class="bg-gray-200 rounded-md p-2 my-2" placeholder="Name" id="username" type="text" bind:value="{username}" />
    </div>
    <div>
      <input class="bg-gray-200 rounded-md p-2 my-2" placeholder="Website" id="website" type="website" bind:value="{website}" />
    </div>
  
    <div>
      <input type="submit" class="bg-gray-400 text-white hover:cursor-pointer p-2 rounded-lg my-2" value={loading ? 'Loading...' : 'Update'}
      disabled={loading} />
    </div>
  
    <div>
      <button class="bg-red-400 text-white hover:cursor-pointer p-2 rounded-lg my-2" on:click="{signOut}" disabled="{loading}">Sign Out</button>
    </div>
  </form>
  