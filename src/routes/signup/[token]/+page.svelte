<script>
	// Import necessary Svelte stores and functions
	import { page } from '$app/stores'; // Access to the current page's parameters
	import { goto } from '$app/navigation'; // Navigate to a different route
	import { onMount } from 'svelte'; // Run code when the component is mounted
	import notificationStore from '$stores/notificationStore'; // Access to a notification store
	import { BD } from '$lib/constants'; // Import constants
	import { t } from '$UITools/translations/index';

	let token; // Declare a variable to store the token from the URL parameters

	// This code block runs when the component is mounted
	onMount(async () => {
		token = $page.params.token; // Get the token from the URL parameters

		try {
			// Send a request to verify the token using the specified API endpoint
			const res = await fetch(`${BD}/auth/verify/${token}`);

			if (res.ok) {
				// If the response is OK (status code 200), the token is verified
				console.log('Token verified successfully'); // For debugging purposes
				goto('/'); // Redirect to the home page
				notificationStore.addNotification(
					'Your email address has been successfully verified',
					'success'
				);
			} else {
				// If the response is not OK (status code other than 200), token verification failed
				console.log('Token verification failed'); // For debugging purposes
				// Handle token verification failure here
			}
		} catch (error) {
			// If an error occurs during the verification process, catch and handle it
			console.log('Error during verification:', error); // For debugging purposes
			// Handle the error here
		}
	});
</script>

<!-- Display a message while verification is in progress -->
<h1>{$t('user.title')}</h1>
