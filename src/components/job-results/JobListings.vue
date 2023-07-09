<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
            <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />


        </ol>
        <div class="mx-auto mt-8 ">
            <div class="flex flex-row flex-nowrap">
                <p class="flex-grow text-sm"> Page {{ currentPage }}</p>
                <div class="flex items-center justify-center">
                    <router-link v-if="previousPage" class="mx-3 text-sm font-semibold text-brand-blue-1"
                        :to="{ name: 'JobResults', query: { page: previousPage } }">Previous</router-link>
                    <router-link v-if="nextPage" class="mx-3 text-sm font-semibold text-brand-blue-1"
                        :to="{ name: 'JobResults', query: { page: nextPage } }">Next</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import JobListing from '@/components/job-results/JobListing.vue';
import axios from 'axios';
export default {
    name: "JobListings",
    components: {
        JobListing,
    },

    data() {
        return {
            jobs: [],
        }
    },
    computed: {
        previousPage() {
            const previousPage = this.currentPage - 1;
            const firstPage = 1;
            return previousPage >= firstPage ? previousPage : undefined;
        },
        nextPage() {
            const nextPage = this.currentPage + 1;
            const lastPage = Math.ceil(this.jobs.length / 10);
            return nextPage <= lastPage ? nextPage : undefined;
        },
        currentPage() {
            return Number.parseInt(this.$route.query.page || "1");
        },
        displayedJobs() {
            console.log(this.$route);
            const pageNumber = this.currentPage;
            const firstJobIndex = (pageNumber - 1) * 10;
            const lastJobIndex = pageNumber * 10;
            return this.jobs.slice(firstJobIndex, lastJobIndex);
        }
    },
    async mounted() {
        const response = await axios.get('http://localhost:3000/jobs')
        this.jobs = response.data;
    },
}
</script>

<style lang="scss" scoped></style>