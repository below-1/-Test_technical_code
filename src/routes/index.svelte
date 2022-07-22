<script>
	import VirtualList from 'svelte-tiny-virtual-list';
	import { fire } from '$lib/fire';

	let number = 1;
	let items = [];

	function validate_number(x) {
		if (x <= 0) {
			return 'harus lebih besar dari 0'
		}
		if (isNaN(x)) {
			return 'harus angka'
		}
		return null;
	}
	$: number_err = validate_number(number);

	async function getTriangle() {
		if (number_err) return;
		try {
			const { data, response } = await fire('/api/triangles', { number })			
			if (!response.ok) {
				alert('terjadi kesalahan')
				return
			}
			items = data.items
		} catch (err) {
			console.log(err)
		}
	}

	async function getOdds() {
		if (number_err) return;
		try {
			const { data, response } = await fire('/api/odds', { number })			
			if (!response.ok) {
				alert('terjadi kesalahan')
				return
			}
			items = data.items
		} catch (err) {
			console.log(err)
		}
	}

	async function getPrimes() {
		if (number_err) return;
		try {
			const { data, response } = await fire('/api/primes', { number })			
			if (!response.ok) {
				alert('terjadi kesalahan')
				return
			}
			items = data.items
		} catch (err) {
			console.log(err)
		}
	}

</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div style="display: flex; flex-direction: column;">
		<input 
			type="number"
			min={1}
			bind:value={number}
		/>
		{#if number_err}
			<small style="color: red">{number_err}</small>
		{/if}
		<div>
			<button 
				on:click={getTriangle}
				type="button">generate segitiga</button>
			<button 
				on:click={getOdds}
				type="button">generate bilangan ganjil</button>
			<button 
				on:click={getPrimes}
				type="button">generate bilangan prima</button>
		</div>
		
		{#if items && items.length}
			<VirtualList
				width="100%"
				height={600}
				itemCount={items.length}
				itemSize={50}>
			<div slot="item" let:index let:style {style}>
				{items[index]}
			</div>
		</VirtualList>
			<!-- <div>
				{#each items as it}
					<strong>{it}</strong>
					<br/>
				{/each}
			</div> -->
		{/if}
	</div>

</section>