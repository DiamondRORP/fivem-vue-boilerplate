<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const state = reactive({
    msg: "Vite + Vue",
})

function onMessage(event) {
    const data = event.data

    if (data.interface === "adminMsg") {
        build(data)
    } else if (data.interface === "endAdminMsg" && state.active) {
        destroy()
    }
}

function onStateChange(data) {
    state.msg = data.msg
}

function build(data) {
    state.msg = data.msg
}

function destroy() {
    state.msg = "Vite + Vue"
}

onMounted(() => {
    window.addEventListener("message", onMessage)
})

onUnmounted(() => {
    window.removeEventListener("message", onMessage)
})

</script>

<template>
    <div className="flex justify-center items-center h-screen w-screen flex-col text-center gap-5">
        <HelloWorld :msg="state.msg" :onStateChange="onStateChange" />
    </div>
</template>