<script setup>
import { ref } from "vue"

const props = defineProps({
	msg: String,
	onStateChange: Function,
})

const count = ref(0)

function triggerStateChange(msg) {
	if (props.onStateChange) {
		props.onStateChange({ msg: msg })
	}
}
</script>

<template className="bg-red-500">
	<h1>{{ msg }}</h1>

	<div className="flex flex-col gap-2 justify-center items-center">
		<button type="button"
			className="p-5 rounded-lg bg-blue-400 hover:bg-blue-600 text-black hover:text-white transition-all duration-500 delay-0 ease-in-out"
			@click="incrementCount">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
		<button type="button"
			className="p-5 rounded-lg bg-blue-400 hover:bg-blue-600 text-black hover:text-white transition-all duration-500 delay-0 ease-in-out"
			@click="triggerStateChange('Updated from HelloWorld')">Change Message</button>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
		starter
	</p>
	<p>
		Learn more about IDE Support for Vue in the
		<a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up
			Guide</a>.
	</p>
	<p>Click on the Vite and Vue logos to learn more</p>
</template>