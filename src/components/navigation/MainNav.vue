<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed top-0 left-0 h-16 w-full bg-white">
            <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
                <router-link to="/" class="flex h-full items-center text-xl">{{
                    company
                }}</router-link>

                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
                            <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                                menuItem.text
                            }}</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="ml-auto flex h-full items-center">
                    <ProfileImage v-if="isLoggedIn" />
                    <ActionButton v-else type="primary" text="Sign in" @click="loginUser" />

                </div>
                <!-- :is-primary="false"  -->
            </div>

            <SubNav v-if="isLoggedIn" />
        </div>
    </header>
</template>
  
<script>
// mapStores map all the stores to the component.
// import { mapStores } from 'pinia';

import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/user';

import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import SubNav from '@/components/navigation/SubNav.vue';
export default {
    name: "MainNav",
    components: {
        ActionButton,
        ProfileImage,
        SubNav,
    },
    data() {
        return {
            company: "Karias",
            menuItems: [
                {
                    text: "Teams",
                    url: '/teams'
                },
                {
                    text: "Locations",
                    url: '/'
                },
                {
                    text: "Life at Bobo Corp", url: '/'
                },
                {
                    text: "How we hire", url: '/'
                },
                {
                    text: "Students", url: '/'
                },
                {
                    text: "Jobs", url: '/jobs/results'
                },

            ],
        };
    },
    computed: {
        // ...mapStores(useUserStore),//userStore
        ...mapState(useUserStore, ['isLoggedIn']),//map only what we need(isLoggedIn) from the store(useUserStore)

        headerHeightClass() {
            return {
                "h-16": !this.isLoggedIn,
                "h-32": this.isLoggedIn,
            }
        },
    },
    methods: {
        ...mapActions(useUserStore, ['loginUser']),//map only what we need(loginUser) from the store(useUserStore)

    }
};
</script>
  