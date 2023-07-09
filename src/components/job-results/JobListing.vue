<template>
    <div>
        <li class="mb-7">
            <router-link class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
                to="/jobs/results/1">
                <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
                    <h2 class="mb-2 text-2xl">Technical Program manager, Perception, Augmented Reality</h2>
                    <div class="flex flex-row align-middle">
                        <div class="mr-7">
                            <span>Karias</span>
                        </div>
                        <div>
                            <span>San Francisco, CA, USA</span>
                        </div>
                    </div>
                </div>
                <div class="px-8 py-4 ">
                    <div>
                        <h3 class="mt-1 mb-2 ">Qualifications:</h3>
                        <div>
                            <ul class="list-disc pl-8">
                                <li>Bachelor's degree or equivalent practical expeirience.</li>
                                <li>5 years of experience in program management</li>
                                <li>Expereince analyzing data through querying database (e.g., SQL) using spreadsheet
                                    softare, and creating statistical models</li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-2 text-center">
                        <router-link to="/jobs/results/1" class="text-brand-blue-1">Expand</router-link>
                    </div>
                </div>
            </router-link>
        </li>

    </div>
</template>

<script>
export default {
    name: "JobListing",
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