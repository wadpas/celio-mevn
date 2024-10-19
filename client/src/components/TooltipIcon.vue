<template>
	<div
		class="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200"
		:data-tooltip-target="`tooltip-${text}`"
		data-tooltip-placement="bottom">
		<component
			:is="icon"
			:size="size" />
	</div>
	<div
		v-if="show"
		:id="`tooltip-${text}`"
		role="tooltip"
		class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
		{{ text }}
	</div>
</template>

<script setup>
	import { useI18n } from 'vue-i18n'
	import { toRefs } from 'vue'
	const props = defineProps({
		icon: Object,
		text: String,
		size: Number,
		show: { type: Boolean, default: true },
	})

	const { icon, text, size, show } = toRefs(props)
</script>

<style lang="scss" scoped></style>
