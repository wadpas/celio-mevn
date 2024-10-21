<template>
	<div class="flex flex-col justify-center flex-1 h-screen px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
				class="w-auto h-6 mx-auto"
				src="../assets/celio.svg"
				alt="Celio" />
			<h2 class="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
				Sign in to your account
			</h2>
		</div>

		<div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
			<form
				class="space-y-4"
				action="#"
				method="POST">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900">
						Email address
					</label>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div v-show="!login">
					<label
						for="username"
						class="block text-sm font-medium leading-6 text-gray-900">
						Username
					</label>
					<div class="mt-2">
						<input
							id="username"
							name="username"
							type="text"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900">
							Password
						</label>
						<div class="text-sm"></div>
					</div>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="fle mt-2 w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
						Sign in
					</button>
				</div>
			</form>

			<p class="mt-2 text-sm text-center text-gray-500">
				{{ login ? 'Not a member?' : 'Already with us?' }}
				<a
					@click="toggleAuth"
					class="font-semibold leading-6 cursor-pointer text-rose-500 hover:text-rose-600">
					{{ login ? 'Create an account' : 'Login to account' }}
				</a>
			</p>

			<div class="flex justify-center mt-6">
				<GoogleLogin :callback="callback" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import axios from 'axios'
	import { onMounted } from '@vue/runtime-core'
	import { useRouter } from 'vue-router'

	let login = ref(true)

	function toggleAuth() {
		login.value = !login.value
	}

	const router = useRouter()

	const callback = async (response) => {
		console.log(response)
	}
</script>
