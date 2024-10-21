<template>
	<div class="relative h-screen">
		<div class="flex items-center p-3">
			<TopMenu />
			<UserMenu />
		</div>
		<div class="flex">
			<SideMenu :toggleNewMessage="toggleNewMessage" />
			<router-view />
		</div>
		<NewMessage
			v-if="newMessageOpen"
			:toggleNewMessage="toggleNewMessage" />
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import UserMenu from '@/components/UserMenu.vue'
	import TopMenu from '@/components/TopMenu.vue'
	import SideMenu from '@/components/SideMenu.vue'
	import EmailList from '@/components/EmailList.vue'
	import NewEmail from '@/components/NewEmail.vue'

	import TooltipIcon from '@/components/TooltipIcon.vue'

	let newMessageOpen = ref(true)

	function toggleNewMessage() {
		newMessageOpen.value = !newMessageOpen.value
	}
</script>

<style lang="scss" scoped></style>
