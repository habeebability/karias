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

<script>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { useJobsStore, UNIQUE_JOB_TYPES } from '@/stores/jobs';
import { useUserStore, ADD_SELECTED_JOB_TYPES } from '@/stores/user';
import { mapState, mapActions } from 'pinia';

export default {
    name: "JobFiltersSidebarJobTypes",
    components: {
        CollapsibleAccordion
    },
    data() {
        return {
            selectedJobTypes: [],
        }
    },
    computed: {
        ...mapState(useJobsStore, [UNIQUE_JOB_TYPES,]),
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
        selectJobType() {
            this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);

            this.$router.push({
                name: 'JobResults'
            })

        }
    }

}
</script>

<style lang="scss" scoped></style>