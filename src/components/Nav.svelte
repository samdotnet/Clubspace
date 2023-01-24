<script>
    import { page } from '$app/stores'
    import Account from '../components/Account.svelte'
    import Auth from '../components/Auth.svelte'
</script>

<nav class="bg-slate-50 py-2 border-black border-b-[2.5px] fixed flex justify-center w-full">
    <a class="mx-4 p-1 rounded-md text-lg hover:bg-gray-200" href="/">Home</a>
    <a class="mx-4 p-1 rounded-md text-lg hover:bg-gray-200" href="/about">About</a>
    <a class="mx-4 p-1 rounded-md text-lg hover:bg-gray-200" href="/clubs">Clubs</a>
    <a class="mx-4 p-1 rounded-md text-lg hover:bg-gray-200" href="/create">Create</a>
    {#if !$page.data.session}
        <a class="mx-4 rounded-md p-1 text-lg hover:bg-gray-200" href="/account">Log In</a>
    {:else}
        <a class="mx-4 rounded-md p-1 text-lg hover:bg-gray-200" href="/account">Account</a>
    {/if}
</nav>