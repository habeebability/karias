<template>
    <CollapsibleAccordion header="Organization">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
                        <input @change="selectOrganization" :id="organization" v-model="selectedOrganizations"
                            :value="organization" type="checkbox" class="mr-3">
                        <label :for="organization">{{ organization }}</label>
                    </li>

                </ul>
            </fieldset>
        </div>

    </CollapsibleAccordion>
</template>

<script>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from '@/stores/user';
import { mapState, mapActions } from 'pinia';

export default {
    name: "JobFiltersSidebarOrganizations",
    components: {
        CollapsibleAccordion
    },
    data() {
        return {
            selectedOrganizations: [],
        }
    },
    computed: {
        ...mapState(useJobsStore, ['UNIQUE_ORGANIZATIONS',]),
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
        selectOrganization() {
            this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);

        }
    }

}
</script>

<style lang="scss" scoped></style>