<template>
    <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
        <section class="pb-5 ">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
                <div class="flex items-center text-sm">
                    <ActionButton text="Clear Filters" type="secondary" />
                </div>
            </div>

            <CollapsibleAccordion header="Job types">
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flex-row flex-wrap">
                            <li class="h-8 w-1/2">
                                <input id="VueTube" type="checkbox" class="mr-3">
                                <label for="VueTube">VueTube</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input id="TechTube" type="checkbox" class="mr-3">
                                <label for="TechTube">TechTube</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input id="VueTure" type="checkbox" class="mr-3">
                                <label for="VueTure">VueTure</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input id="SuzuTube" type="checkbox" class="mr-3">
                                <label for="SuzuTube">SuzuTube</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>

            </CollapsibleAccordion>
            <JobFiltersSidebarOrganizations />


        </section>
    </div>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import CollapsibleAccordion from '../shared/CollapsibleAccordion.vue';
import JobFiltersSidebarOrganizations from '@/components/job-filter-sidebar/JobFiltersSidebarOrganizations.vue';
export default {
    name: "JobFilterSidebar",
    components: {
        ActionButton,
        CollapsibleAccordion,
        JobFiltersSidebarOrganizations
    },
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