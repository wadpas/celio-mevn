<template>
	<div class="flex items-center justify-start me-12">
		<TooltipIcon
			:icon="MenuIcon"
			:size="32"
			text="Menu" />
		<img
			width="80"
			class="ms-2"
			src="../assets/celio.svg"
			alt="celio" />
	</div>

	<div class="flex items-center w-full mx-24 rounded-lg bg-gray-50 input-width">
		<TooltipIcon
			:icon="MagnifyIcon"
			text="Search" />
		<input
			placeholder="Search mail"
			class="w-full h-10 placeholder-gray-900 border-transparent border-none outline-none bg-gray-50 focus:ring-0"
			type="text" />
		<TooltipIcon
			:icon="TuneIcon"
			text="Options" />
	</div>

	<div class="flex items-center">
		<TooltipIcon
			:icon="CogOutlineIcon"
			text="Settings" />
		<TooltipIcon
			:icon="AppsIcon"
			text="Apps" />
	</div>
</template>

<script setup>
	import TooltipIcon from '@/components/TooltipIcon.vue'
	import UserMenu from '@/components/UserMenu.vue'
	import MenuIcon from 'vue-material-design-icons/Menu.vue'
	import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
	import TuneIcon from 'vue-material-design-icons/Tune.vue'
	import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue'
	import AppsIcon from 'vue-material-design-icons/Apps.vue'
</script>

<style lang="scss" scoped></style>
