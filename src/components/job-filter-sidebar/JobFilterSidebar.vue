<template>
    <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
        <section class="pb-5 ">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
                <div class="flex items-center text-sm">
                    <ActionButton text="Clear Filters" type="secondary" />
                </div>
            </div>

            <CollapsibleAccordion header="Degree" />


            <!-- <JobFiltersSidebarOrganizations />
            <JobFiltersSidebarJobTypes /> -->

            <JobFilterSidebarCheckboxGroup header="Job types" :unique-values="UNIQUE_JOB_TYPES"
                :action="userStore.ADD_SELECTED_JOB_TYPES" />
            <JobFilterSidebarCheckboxGroup header="Organizations" :unique-values="UNIQUE_ORGANIZATIONS"
                :action="userStore.ADD_SELECTED_ORGANIZATIONS" />


        </section>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import CollapsibleAccordion from '../shared/CollapsibleAccordion.vue';
// import JobFiltersSidebarOrganizations from '@/components/job-filter-sidebar/JobFiltersSidebarOrganizations.vue';
// import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue';
import JobFilterSidebarCheckboxGroup from '@/components/job-filter-sidebar/JobFilterSidebarCheckboxGroup.vue';

import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

const jobsStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_ORGANIZATIONS = computed(() => {
    return jobsStore.UNIQUE_ORGANIZATIONS
})
const UNIQUE_JOB_TYPES = computed(() => {
    return jobsStore.UNIQUE_JOB_TYPES
})

</script>

<style lang="scss" scoped></style>