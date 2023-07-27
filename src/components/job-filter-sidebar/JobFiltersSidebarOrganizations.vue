<template>
    <CollapsibleAccordion header="Organization">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
                        <input :id="organization" v-model="selectedOrganizations" :value="organization" type="checkbox"
                            class="mr-3" @change="selectOrganization">
                        <label :for="organization">{{ organization }}</label>
                    </li>

                </ul>
            </fieldset>
        </div>

    </CollapsibleAccordion>
</template>

<script setup>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const jobStore = useJobsStore();
const userStore = useUserStore();
const selectedOrganizations = ref([]);

const UNIQUE_ORGANIZATIONS = computed(() => {
    return jobStore.UNIQUE_ORGANIZATIONS
})

const selectOrganization = () => {
    userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value)
    router.push({
        name: 'JobResults'
    })
}

// export default {
//     name: "JobFiltersSidebarOrganizations",
//     components: {
//         CollapsibleAccordion
//     },
//     data() {
//         return {
//             selectedOrganizations: [],
//         }
//     },
//     computed: {
//         ...mapState(useJobsStore, ['UNIQUE_ORGANIZATIONS',]),
//     },
//     methods: {
//         ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
//         selectOrganization() {
//             this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
//             this.$router.push({
//                 name: 'JobResults'
//             })

//         }
//     }

// }
</script>

<style lang="scss" scoped></style>