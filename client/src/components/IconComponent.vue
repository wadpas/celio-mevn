<template>
	<div class="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer">
		<component
			:is="icon"
			:fillColor="iconColor"
			:size="iconSize" />
	</div>
</template>

<script setup>
	import { toRefs } from 'vue'
	import MenuIcon from 'vue-material-design-icons/Menu.vue'

	const props = defineProps({
		icon: Object,
		iconColor: String,
		iconSize: Number,
	})

	let iconColor3 = '#143432'

	const { icon, iconColor, iconSize } = toRefs(props)
</script>
