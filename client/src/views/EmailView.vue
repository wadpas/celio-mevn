<template>
	<div class="relative h-screen bg-gray-50">
		<div class="flex items-center p-3">
			<TopMenu />
			<UserMenu />
		</div>
		<SideMenu />
	</div>
</template>

<script setup>
	import TooltipIcon from '@/components/TooltipIcon.vue'
	import UserMenu from '@/components/UserMenu.vue'
	import TopMenu from '@/components/TopMenu.vue'
	import SideMenu from '@/components/SideMenu.vue'
</script>

<style lang="scss" scoped></style>
