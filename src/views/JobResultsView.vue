<template>
    <div class="flex flex-nowrap w-full">
        <JobFilterSidebar />
        <JobListings />
    </div>
</template>

<script>
import JobFilterSidebar from '@/components/job-filter-sidebar/JobFilterSidebar.vue';
import JobListings from '../components/job-results/JobListings.vue';
export default {
    name: "JobResultsView",
    components: {
        JobFilterSidebar,
        JobListings,
    },
    data() {


        return {}
    },

}
</script>

<style lang="scss" scoped></style>