<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { ResetPassword } from '$lib';
	const title = 'Reset your password';
	const site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
	const acceptTerms = true;
	const btnTitle = 'Create account';
	const termsLink = '/';
	const labelClass = 'mb-2';
	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};
</script>

<ResetPassword {title} {site} {acceptTerms} {btnTitle} {termsLink} on:submit={onSubmit}>
	<div>
		<Label for="email" class="mb-2">Your email</Label>
		<Input type="email" name="email" id="email" placeholder="name@company.com" required />
	</div>
	<div>
		<Label for="password" class={labelClass}>Your password</Label>
		<Input type="password" name="password" id="password" placeholder="••••••••" required />
	</div>
	<div>
		<Label for="confirm-password" class={labelClass}>Confirm password</Label>
		<Input
			type="password"
			name="confirm-password"
			id="confirm-password"
			placeholder="••••••••"
			required
		/>
	</div>
</ResetPassword>
