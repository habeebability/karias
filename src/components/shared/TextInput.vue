<template>
    <input type="text" :value="modelValue" class="w-full text-lg font-normal focus:outline-none" @input="handleInput">
</template>

<script>
export default {
    name: "TextInput",
    props: {
        modelValue: {
            type: String,
            required: true,
            default: ""
        }
    },
    emits: ["update:modelValue"],
    data() {
        return {
        }
    },
    methods: {
        handleInput($event) {
            this.$emit("update:modelValue", $event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped></style>