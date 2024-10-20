<template>
	<div class="mr-2">
		<div
			@click="toggleNewMessage"
			class="flex items-center justify-center h-8 p-6 m-2 rounded-lg cursor-pointer bg-sky-50">
			<PencilOutlineIcon />
			<span class="text-sm ps-4">Compose</span>
		</div>
		<div class="my-5">
			<div class="flex justify-between px-6 py-1 my-1 rounded-r-full cursor-pointer side-menu-item bg-slate-100">
				<div class="flex items-center">
					<InboxIcon :size="17" />
					<div class="pl-4 text-sm font-semibold">Inbox</div>
				</div>
				<div class="text-sm font-semibold">4</div>
			</div>

			<div class="flex justify-between px-6 py-1 my-1 cursor-pointer side-menu-item">
				<div class="flex items-center">
					<StarOutlineIcon :size="17" />
					<div class="pl-4 text-sm">Starred</div>
				</div>
			</div>

			<div class="flex justify-between px-6 py-1 my-1 cursor-pointer side-menu-item">
				<div class="flex items-center">
					<ClockOutlineIcon :size="17" />
					<div class="pl-4 text-sm">Snoozed</div>
				</div>
			</div>

			<div class="flex justify-between px-6 py-1 my-1 cursor-pointer side-menu-item">
				<div class="flex items-center">
					<SendOutlineIcon :size="17" />
					<div class="pl-4 text-sm">Sent</div>
				</div>
			</div>

			<div class="flex justify-between px-6 py-1 my-1 cursor-pointer side-menu-item">
				<div class="flex items-center">
					<FileOutlineIcon :size="17" />
					<div class="pl-4 text-sm">Drafts</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
	import InboxIcon from 'vue-material-design-icons/Inbox.vue'
	import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
	import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
	import SendOutlineIcon from 'vue-material-design-icons/SendOutline.vue'
	import FileOutlineIcon from 'vue-material-design-icons/FileOutline.vue'
	import PlusIcon from 'vue-material-design-icons/Plus.vue'
	import CloseIcon from 'vue-material-design-icons/Close.vue'

	const { toggleNewMessage } = defineProps(['toggleNewMessage'])
</script>
