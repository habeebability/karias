<template>
    <div>
        <h1>Reactive vs Ref</h1>
        <p>Counter (Reactive): {{ reactiveCounter }}</p>
        <p>Counter (Ref): {{ refCounter }}</p>
        <button @click="incrementReactive">Increment Reactive Counter</button>
        <button @click="incrementRef">Increment Ref Counter</button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
// Reactive
const reactiveData = reactive({
    counter: 0
});

const incrementReactive = () => {
    reactiveData.counter++;
};

// Ref
const refCounter = ref(0);

const incrementRef = () => {
    refCounter.value++;
};





</script>

<style lang="scss" scoped></style>