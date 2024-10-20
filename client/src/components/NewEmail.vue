<template>
	<div class="absolute bottom-0 right-0 w-1/3 m-2 bg-white rounded-lg shadow-lg">
		<div class="flex items-center justify-between w-full px-3 py-2 text-sm rounded-t-lg bg-sky-50">
			<div>New message</div>
			<Close
				class="cursor-pointer"
				@click="toggleNewMessage"
				:size="19" />
		</div>

		<div>
			<div class="relative flex items-center px-4 py-2">
				<div class="text-sm text-gray-700">To</div>
				<input
					v-model="toEmail"
					class="w-full h-6 border-transparent border-none outline-none focus:ring-0"
					type="text" />
			</div>
			<div class="relative flex items-center px-4 py-2">
				<div class="text-sm text-gray-700">Subject</div>
				<input
					v-model="subject"
					class="w-full h-6 border-transparent border-none outline-none focus:ring-0"
					type="text" />
			</div>
		</div>

		<div class="m-1">
			<textarea
				v-model="body"
				style="resize: none"
				class="w-full border-transparent border-none outline-none focus:ring-0"
				rows="14"></textarea>
		</div>

		<div class="p-4 mt-5">
			<button
				@click="sendEmail"
				class="px-4 py-2 text-sm font-bold text-white bg-blue-700 rounded-full hover:bg-blue-600">
				Send message
			</button>
		</div>
	</div>
</template>

<script setup>
	const { toggleNewMessage } = defineProps(['toggleNewMessage'])
	import Close from 'vue-material-design-icons/Close.vue'
</script>
