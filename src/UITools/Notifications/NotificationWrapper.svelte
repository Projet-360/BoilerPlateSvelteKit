<script>
	import Notification from '$UITools/Notifications/Notification.svelte';
	import notificationStore from '$stores/notificationStore';
</script>

<div class="notification-wrapper">
	{#each $notificationStore as { id, message, type }}
		<Notification {message} {type} />
	{/each}
</div>
