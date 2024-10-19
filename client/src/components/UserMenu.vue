<template>
	<div>
		<div @click="openMenu = !openMenu">
			<IconComponent
				:icon="AccountCircle"
				:size="32"
				text="Account"
				:show="!openMenu" />
		</div>
		<div
			v-show="openMenu"
			class="absolute z-10 grid bg-white rounded-lg shadow w-80 right-2 top-16 justify-items-stretch">
			<div
				@click="openMenu = false"
				class="p-2 justify-self-end hover:cursor-pointer">
				<Close />
			</div>
			<div class="flex justify-center w-full">
				<img
					class="w-20 rounded-full"
					src="../assets/hulk.png" />
			</div>
			<div class="flex justify-center w-full mt-2 text-lg text-gray-700">Bruce Banner</div>
			<div class="flex justify-center w-full text-sm text-gray-700">brucebanner@gmail.com</div>
			<div class="flex justify-center my-5">
				<button
					class="px-4 py-2 text-xs font-semibold text-gray-600 bg-transparent border border-gray-300 rounded hover:bg-gray-100">
					Sign out of Gmail
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import AccountCircle from 'vue-material-design-icons/AccountCircle.vue'
	import Close from 'vue-material-design-icons/Close.vue'
	import IconComponent from '@/components/TooltipIcon.vue'

	let openMenu = ref(false)
</script>

<style lang="scss" scoped></style>
