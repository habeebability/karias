<template>
    <button :class="buttonClass">{{ text }}</button>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        default: 'primary',
        validator(value) {
            return ['primary', 'secondary'].includes(value)
        }
    }
})


const { type } = toRefs(props)

const buttonClass = computed(() => {
    return {
        [type.value]: true
    }
})



</script>

<style scoped>
button {
    @apply px-5 py-3 font-medium
}

/* button:hover {
    background-color: #1967d2;
} */


.primary {
    @apply rounded bg-brand-blue-1 text-white
}

.primary:hover {
    @apply bg-brand-blue-2
}



.secondary {
    @apply bg-transparent text-brand-blue-1
}

.secondary:hover {
    @apply bg-brand-blue-2 text-white
}
</style>