<script>
	import { BarsSolid } from 'svelte-awesome-icons';

	let navbarOpen = false;

	function setNavbarOpen() {
		navbarOpen = !navbarOpen;
	}
</script>

<nav
	class="navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a
				data-sveltekit-reload
				class="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
				href="/"
			>
				Gather Hope
			</a>
			<button
				class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				on:click={setNavbarOpen}
			>
				<BarsSolid class="text-white" />
			</button>
		</div>
		<div
			class="flex-grow items-center rounded bg-white shadow-lg lg:flex lg:bg-opacity-0 lg:shadow-none {navbarOpen
				? 'block'
				: 'hidden'}"
			id="example-navbar-warning"
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				<li class="flex items-center">
					<a
						class="lg:hover:text-blueGray-200 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2 lg:text-white"
						href="/about"
					>
						About us
					</a>
				</li>
			</ul>
			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<li class="flex items-center">
					<a
						class="lg:hover:text-blueGray-200 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2 lg:text-white"
						href="/privacy"
						target="_blank"
					>
						<span class="ml-2 inline-block lg:hidden">Privacy</span>
					</a>
				</li>

				<li class="flex items-center">
					<button
						class="text-blueGray-700 active:bg-blueGray-50 mb-3 ml-3 rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none lg:mb-0 lg:mr-1"
						type="button"
					>
						Join now
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
