<script>
	import background from '../assets/bg_7.jpg';
	import Navbar from '../lib/components/Navbar.svelte';
	import {
		HandHoldingHeartSolid,
		HandsHoldingSolid,
		HandHoldingHandSolid,
		HandshakeAngleSolid
	} from 'svelte-awesome-icons';

	let ms = 5000;
	let currentIndex = 0;
	let clear;

	const headings = [
		'Together, We Gather Hope to Make a Difference',
		'Every Form Filled Sparks a Brighter Future',
		'Join Gather Hope and Change Lives Today',
		'Your Clicks Turn into Acts of Kindness',
		'Fill Forms, Spread Hope, Create Change'
	];

	const updateHeading = () => {
		currentIndex = (currentIndex + 1) % headings.length;
	};

	$: {
		clearInterval(clear);
		clear = setInterval(updateHeading, ms);
	}

	$: header = headings[currentIndex];
</script>

<div class="font-overpass">
	<Navbar />
	<main>
		<div
			class="relative flex min-h-screen-80 content-center items-center justify-center pb-32 pt-16"
		>
			<div
				class="absolute top-0 h-full w-full bg-cover bg-center"
				style="background-image: url({background});"
			>
				<span id="blackOverlay" class="absolute h-full w-full bg-black opacity-10"></span>
			</div>
			<div class="container relative mx-auto">
				<div class="flex flex-wrap items-center">
					<div class="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
						<div>
							<h1 class="animate-fadeIn font-dosis text-5xl font-light text-white opacity-0">
								{header}
							</h1>
							<p class="mt-4 text-lg font-light text-slate-200">
								Gather Hope turns every sign-up into a step toward a better world. By filling out a
								simple form, you join a community spreading kindness and creating impact.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="-mt-20" id="section-counter">
			<div class="m-auto flex max-w-7xl flex-col px-8 font-light sm:flex-row">
				<div class="z-10 flex-none basis-1/3 bg-[#f86f2d] p-8">
					<p class="text-2xl">Served Over</p>
					<p class="my-4 text-6xl">1,432,805</p>
					<p class="text-2xl">Children in 190 countries in the world</p>
				</div>
				<div class="z-10 flex-none basis-1/3 bg-[#fa8f3d] p-8">
					<p class="text-xl">Donate Money</p>
					<p class="my-4 text-base text-gray-800">
						Even the all-powerful Pointing has no control about the blind texts.
					</p>
					<p>
						<button
							class="text-blueGray-700 active:bg-blueGray-50 rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
							type="button"
						>
							Join now
						</button>
					</p>
				</div>
				<div class="z-10 flex-none basis-1/3 bg-[#faaa3a] p-8">
					<p class="text-xl">Donate Money</p>
					<p class="my-4 text-base text-gray-800">
						Even the all-powerful Pointing has no control about the blind texts.
					</p>
					<p>
						<button
							class="text-blueGray-700 active:bg-blueGray-50 rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
							type="button"
						>
							Join now
						</button>
					</p>
				</div>
			</div>
		</section>

		<section id="section-details" class="mt-8">
			<div class="m-auto flex max-w-7xl flex-col px-8 font-light sm:flex-row">
				<div class="z-10 flex-none basis-1/3 p-8">
					<div class="grid grid-flow-col grid-rows-3 gap-4">
						<div class="row-span-3">
							<HandHoldingHeartSolid size="50" class="text-[#f86f2d]" />
						</div>
						<div class="col-span-2">
							<p class="text-xl">Make Donation</p>
						</div>
						<div class="col-span-2 row-span-2">
							<p class="text-base text-gray-800">
								Even the all-powerful Pointing has no control about the blind texts it is an almost
								unorthographic.
							</p>
						</div>
					</div>
				</div>

				<div class="z-10 flex-none basis-1/3 p-8">
					<div class="grid grid-flow-col grid-rows-3 gap-4">
						<div class="row-span-3">
							<HandshakeAngleSolid size="50" class="text-[#f86f2d]" />
						</div>
						<div class="col-span-2">
							<p class="text-xl">Become A Volunteer</p>
						</div>
						<div class="col-span-2 row-span-2">
							<p class="text-base text-gray-800">
								Even the all-powerful Pointing has no control about the blind texts it is an almost
								unorthographic.
							</p>
						</div>
					</div>
				</div>
				<div class="z-10 flex-none basis-1/3 p-8">
					<div class="grid grid-flow-col grid-rows-3 gap-4">
						<div class="row-span-3">
							<HandsHoldingSolid size="50" class="text-[#f86f2d]" />
						</div>
						<div class="col-span-2">
							<p class="text-xl">Sponsorship</p>
						</div>
						<div class="col-span-2 row-span-2">
							<p class="text-base text-gray-800">
								Even the all-powerful Pointing has no control about the blind texts it is an almost
								unorthographic.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<sections class="m-auto mt-8 flex max-w-7xl px-8">
			<h3 class="text-4xl">Ongoing Campaigns</h3>
		</sections>
	</main>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0.2;
		}
		to {
			opacity: 1;
		}
	}

	.animate-fadeIn {
		animation: fadeIn 2s ease-in-out forwards;
	}
</style>
