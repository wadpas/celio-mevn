<template>
	<div id="ServiceSelectSmall">
		<div class="relative w-full rounded-2xl bg-custom-color custom-height">
			<div class="absolute mt-1 transform top-1/3 left-1/3 translate-x-1/3 -translate-y-1/4">
				<img
					:src="'../../public/img/gojek/' + imageName"
					width="55"
					alt="" />
			</div>
		</div>
		<div class="mt-2 text-xs text-center text-gray-900">{{ text }}</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue'

	const props = defineProps({
		text: String,
		imageName: String,
	})

	const { text, imageWidth, image } = toRefs(props)
</script>

<style lang="scss" scoped>
	#ServiceSelectSmall {
		.bg-custom-color {
			background-color: rgb(237, 237, 237);
		}
		.custom-height {
			height: 100px;
		}
	}
</style>
