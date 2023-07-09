<template>
    <img :src="imageLink" alt="" class="h-8 w-8 rounded-full object-cover">
</template>

<script >
export default {
    name: 'ProfileImage',
    data() {
        return {
            imageLink: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
        };
    },
}

</script>

<style lang="scss" scoped></style>