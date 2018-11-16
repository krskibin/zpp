<template>
<div>
  <h1>Login</h1>
  <Form>
	<FormField label="Email address" htmlFor="basic-form-input-email">
		<FormInput autoFocus type="email" placeholder="Enter email" name="basic-form-input-email" />
	</FormField>
	<FormField label="Password" htmlFor="basic-form-input-password">
		<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
	</FormField>
	<FormField>
		<Checkbox label="Check it" />
	</FormField>
	<Button submit>Submit</Button>
</Form>
</div>
</template>

<script>
export default {
  name: 'user-login',
};
</script>

<style lang="scss">
</style>
