<script>
	import "../app.css"
	import { navigating } from '$app/stores';
	import { blur } from "svelte/transition"
	import Nav from '@evidence-dev/components/ui/Nav.svelte';
	import BreadCrumbs from '@evidence-dev/components/ui/BreadCrumbs.svelte';
	import LoadingIndicator from '@evidence-dev/components/ui/LoadingIndicator.svelte';
	import Logo from '@evidence-dev/components/ui/Logo.svelte';

</script>

<svelte:head>
	<title>Evidence</title>
</svelte:head>

{#if $navigating}
	<LoadingIndicator/>
{/if}

<div class="header">
	<Logo organization="Austin 311"/>
	<Nav
		sections = {[
			{href:"/", label: "Home"},
			{href:"/departments", label: "Departments"}
		]}
	/>
</div>

{#if !$navigating}
	<main in:blur|local>
		<BreadCrumbs/>
		<article>
			<slot></slot>
		</article>      
	</main>
{/if}

<style>
	div.header {
		padding: .5em 1.5em 0 1.5em;
	}
</style>