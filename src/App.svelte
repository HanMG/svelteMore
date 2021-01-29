<script>
	import axios from 'axios'
	let apikey = '20f6531a'
	let title = ''
	let movies = null
	let error = null
	let loading = false	

	async function searchMovies() {
		// 중복클릭 방지
		if(loading)	return
		// 초기화
		moives = null
		error = null
		loading = true
		try{
		const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
		console.log(res)
		movies = res.data.Search
		}catch (err) {
			console.log(err.message)
			error = err
		}finally{
			loading = false
		}
	}
</script>

<input type="text" bind:value={title}>
<button on:click={searchMovies}>Search</button>

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