<template>
    <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
        <div class="flex flex-1 flex-nowrap h-full text-base font-light">
            <div class="flex h-full flex-1 relative items-center pr-3">
                <label for="" class="absolute left-0 -top-10">Role</label>
                <!-- <TextInput placeholder="Software engineer" @handle-input="updateRole" /> -->
                <!-- <TextInput :value="role" placeholder="Software engineer" @handle-input="role = $event" /> -->
                <TextInput v-model="role" placeholder="Software engineer" />
            </div>
            <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>

            <div class="flex h-full flex-1 relative items-center pl-3">
                <label for="" class="absolute left-0 -top-10">Where?</label>
                <!-- <TextInput placeholder="Los Angeles" @handle-input="updateLocation" /> -->
                <!-- <TextInput :value="location" placeholder="Los Angeles" @handle-input="location = $event" /> -->
                <TextInput v-model="location" placeholder="Los Angeles" />

            </div>
        </div>
        <ActionButton text="search" type="secondary" class="rounded-r-3xl" />
    </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';
export default {
    name: "JobSearchForm",
    components: {
        ActionButton,
        TextInput
    },
    data() {
        return {
            role: "",
            location: ""
        }
    },
    methods: {
        // this functions can be removed if attended to inline in the template
        // updateRole(value) {
        //     this.role = value;

        //     console.log(this.role);
        // },
        // updateLocation(value) {
        //     this.location = value;

        //     console.log(this.location);
        // }
    }
}
</script>

<style lang="scss" scoped></style>