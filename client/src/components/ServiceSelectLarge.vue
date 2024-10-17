<template>
	<div id="ServiceSelectLarge">
		<div class="w-full rounded-2xl bg-custom-color custom-height">
			<div
				v-if="promo"
				class="relative z-10 w-full">
				<span
					class="absolute p-1 px-2 text-xs text-gray-100 -translate-x-1/2 -translate-y-1/2 bg-green-600 top-1/2 left-1/2 rounded-3xl">
					Promo
				</span>
			</div>
			<div class="flex justify-between p-2">
				<div class="ml-2 text-lg text-gray-900 mt-14">{{ text }}</div>
				<div class="mt-3 mr-1">
					<img
						:src="'../../public/img/gojek/' + imageName"
						:width="imageWidth"
						alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue'

	const props = defineProps({
		text: String,
		imageWidth: String,
		imageName: String,
		promo: { Boolean, default: false },
	})

	const { text, imageWidth, image } = toRefs(props)
</script>

<style lang="scss" scoped>
	#ServiceSelectLarge {
		.bg-custom-color {
			background-color: rgb(237, 237, 237);
		}
		.custom-height {
			height: 100px;
		}
	}
</style>
