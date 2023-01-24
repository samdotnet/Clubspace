<script>


</script>

<body class="font-mono">

    <h1>Create a New Club</h1>
    
    <form class="flex items-center flex-col py-8 rounded-md bg-gray-100">
        <div class="flex flex-row">
            <div class="flex flex-col">
                <label class="p-2 my-2 mr-2 text-right" for="name">Club Name</label>
                <label class="p-2 my-2 mr-2 text-right grow" for="description">Description</label>
                <label class="p-2 my-2 mr-2 items-end text-right" for="tags">Tags</label>
            </div>
            <div class="flex justify-center flex-col">
                <input required class="bg-gray-200 rounded-md p-2 my-2" placeholder="Club Name" id="name" type="text" />
                <textarea required class="bg-gray-200 rounded-md p-2 my-2" placeholder="Description" id="description" />
                <input class="bg-gray-200 rounded-md p-2 my-2" placeholder="Tags (Seperate with a comma)" id="tags" type="text" />
            </div>
        </div>
        <div class="flex justify-center flex-row">
            <label class="p-2 my-2 text-right" for="visibility">Visible</label>
            <input id="visibility" type="checkbox" value="false" class="bg-gray-400 text-white hover:cursor-pointer p-2 rounded-lg my-2" />
        </div>
        <button class="bg-[#2a9d8f] text-white hover:cursor-pointer my-2 p-2 text-lg text-center border-solid border-[2.5px] border-black flex flex-col items-center shadow-black shadow-[5px_5px] hover:shadow-black hover:shadow-[7px_7px] transition-shadow">Create</button>
  </form>
</body>