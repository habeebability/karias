<template>
    <CollapsibleAccordion header="Job Types">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType" class="h-8 w-1/2">
                        <input @change="selectJobType" :id="jobType" v-model="selectedJobTypes" :value="jobType"
                            type="checkbox" class="mr-3">
                        <label :for="jobType">{{ jobType }}</label>
                    </li>

                </ul>
            </fieldset>
        </div>

    </CollapsibleAccordion>
</template>

<script setup>
import { ref, computed } from 'vue';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

// import { mapState, mapActions } from 'pinia';

const router = useRouter();
const selectedJobTypes = ref([]);

const jobsStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_JOB_TYPES = computed(() => {
    return jobsStore.UNIQUE_JOB_TYPES
})

const selectJobType = () => {
    userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value)
    router.push({
        name: 'JobResults'
    })
}

// export default {
//     name: "JobFiltersSidebarJobTypes",
//     components: {
//         CollapsibleAccordion
//     },
//     data() {
//         return {
//             selectedJobTypes: [],
//         }
//     },
//     computed: {
//         ...mapState(useJobsStore, [UNIQUE_JOB_TYPES,]),
//     },
//     methods: {
//         ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
//         selectJobType() {
//             this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);

//             this.$router.push({
//                 name: 'JobResults'
//             })

//         }
//     }

// }
</script>

<style lang="scss" scoped></style>