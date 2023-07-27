<template>
    <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white">
        <div class="flex items-center h-full px-8">
            <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
                <span><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span> jobs
                    matched</span>
            </div>
        </div>
    </div>
</template>

<script setup>

// import { mapState } from 'pinia'
import { useJobsStore } from '../../stores/jobs'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const jobsStore = useJobsStore();

const FILTERED_JOBS = computed(() => {
    return jobsStore.FILTERED_JOBS
})



const onJobResultsPage = computed(() => {
    return route.name === 'JobResults'
    // ...mapState(useJobsStore, [FILTERED_JOBS]),

})




</script>

<style lang="scss" scoped></style>