<template>
	<div class="flex w-full">
		<div class="w-full h-full ml-2 bg-white shadow-sm rounded-t-xl">
			<div class="flex items-center justify-end px-4 my-3 text-xs text-gray-500">1-50 of 153</div>
		</div>
		<!-- <div
			v-for="email in userStore.emails"
			:key="email">
			<MessageRow
				:id="email.id"
				:from="email.firstName + ' ' + email.lastName"
				:subject="email.subject"
				:body="email.body"
				:time="email.createdAt"
				:hasViewed="email.hasViewed"
				@selectedId="selectedId" />
		</div> -->
	</div>
</template>

<script setup>
	import TooltipIcon from '@/components/TooltipIcon.vue'
	import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue'
</script>
