<template>
	<div
		id="EmailView"
		class="h-screen bg-gray-50">
		<div class="flex items-center justify-start px-3">EmailView</div>
		<IconComponent
			:icon="MenuIcon"
			iconColor="#636363"
			iconSize="20" />
	</div>
</template>

<script setup>
	import IconComponent from '@/components/IconComponent.vue'
	import MenuIcon from 'vue-material-design-icons/Menu.vue'
</script>

<style lang="scss" scoped></style>
