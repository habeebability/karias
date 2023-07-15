<template>
    <main class="flex flex-col h-screen">

        <section class="  pt-10 pb-20">
            <div class="grid grid-cols-12">

                <div class="col-span-1 col-start-1">

                </div>
                <div class="col-span-5 col-start-2">
                    <TheHeadline />
                    <JobSearchForm />
                </div>
                <div class="col-span-5 col-start-7 self-center justify-self-center">
                    <img class="w-80 h-80 object-contain"
                        src="https://media.istockphoto.com/id/1481181755/photo/african-american-man-writing-lines-of-code-on-desktop-computer-with-multiple-monitors-and.webp?b=1&s=170667a&w=0&k=20&c=jriZayjtwKwnMdMUB3N8yZuxcfdsbXjbLXN7NK1roFc="
                        alt="">
                </div>
                <div class="col-span-1 col-start-12">

                </div>
            </div>
        </section>
        <!-- <SpotLight class="flex flex-row justify-center pb-16">
            <template #default="slotProps">
                <router-link to="/jobs/results" class="mx-5 flex flex-col h-96 w-72 rounded-lg border bg-brand-gray-2">
                    <img :src="slotProps.spotlight.img" class="object-contain" alt="">
                    <div class="mt-3 h-48 px-6 py-4">
                        <h3 class="text-lg font-medium">{{ slotProps.spotlight.title }}</h3>
                        <p class="mt-3 text-sm">
                            {{ slotProps.spotlight.description }}
                        </p>
                    </div>
                    <router-link class="px-6 pb-4 text-sm text-brand-blue-1" to="/jobs/results">see jobs</router-link>
                </router-link>
            </template>
        </SpotLight> -->
        <SpotLight class="flex flex-row justify-center pb-16">

            <!-- slotProps can be destructed like {title, img, description} , then use description in the template -->
            <template #default="slotProps">
                <router-link to="/jobs/results" class="mx-5 flex h-[268px] w-[530px] flex-col rounded-lg ">
                    <div class="flex h-full flex-col justify-end bg-cover" :style="{
                        backgroundImage: 'url(' + slotProps.spotlight.img + ')'
                    }">
                        <div class="text-white">
                            <div class="px-6 py-4">
                                <div class="text-xl">{{ slotProps.spotlight.title }}
                                    <p class="pt-4">{{ slotProps.spotlight.description }}</p>
                                </div>
                            </div>
                        </div>
                        <router-link class="px-6 pb-4 text-sm text-white" to="/jobs/results">see jobs</router-link>
                    </div>


                </router-link>
            </template>
        </SpotLight>

    </main>
</template>

<script>
import JobSearchForm from '@/components/job-search/JobSearchForm.vue';
import SpotLight from '@/components/job-search/SpotLight.vue';
import TheHeadline from '@/components/job-search/TheHeadline.vue';
export default {
    name: "TheHero",
    components: {
        TheHeadline,
        JobSearchForm,
        SpotLight
    },
    data() {

        return {}
    },

}
</script>

<style lang="scss" scoped></style>