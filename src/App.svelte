<script>
	import axios from 'axios'

	let apikey = '20f6531a'
	let title = ''	
	//let promise = new Promise((resolve) => resolve([]))
	let promise = Promise.resolve([])

	function searchMovies() {
		promise = new Promise( async (resolve, reject) => {
			try{
				const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
				console.log(res)
				resolve(res.data)
			}catch (err) {
				//console.log(err.message)
				reject(err)
			}finally{				
				console.log('Done!')
			}
		})		
	}
</script>

<input type="text" bind:value={title} on:keydown={(e) => {e.key === 'Enter' && searchMovies()}}>
<button on:click={searchMovies}>Search</button>

{#await promise}
	<p style="color: royalblue">Loading...</p>
{:then data} 
	{#if data.Error}	
		<div>{data.Error}</div>		
	{:else}
		<ul>		
			{#each data.Search as movie}
				<li>[{movie.Year}] {movie.Title}</li>			
			{/each}
		</ul>
	{/if}
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await}

<!--
{#if loading}
	<p style="color: royalblue">Loading...</p>
{:else if movies}
	<ul>
		{#each movies as movie}
			<li>[{movie.Year}] {movie.Title}</li>			
		{/each}
	</ul>
{:else if error}
	<p style="color: red;">{error.message}</p>
{/if}
-->