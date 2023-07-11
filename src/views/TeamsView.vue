<template>
    <HeaderContainer>
        <!-- unnamed slot == default -->
        <!-- <template v-slot:default>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template> -->
        <template #title>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template>
        <!-- named slot....v-slot:subtitle but #subtitle for short -->
        <template #subtitle>
            <h2 class="my-4 w-full text-base font-light">It's awesome working here, why don't you come join us.</h2>
        </template>

    </HeaderContainer>
</template>

<script>
import HeaderContainer from '@/components/shared/HeaderContainer.vue';
export default {
    name: "TeamsView",
    components: {
        HeaderContainer
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped></style>