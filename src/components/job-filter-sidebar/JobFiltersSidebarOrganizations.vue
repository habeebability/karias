<template>
    <CollapsibleAccordion header="Organization">
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
</template>

<script>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
export default {
    name: "JobFiltersSidebarOrganizations",
    components: {
        CollapsibleAccordion
    }

}
</script>

<style lang="scss" scoped></style>