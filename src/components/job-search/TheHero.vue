<template>
    <main>

        <section class="flex flex-col h-screen  pt-10 pb-20">
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

    </main>
</template>

<script>
import JobSearchForm from '@/components/job-search/JobSearchForm.vue';
import TheHeadline from '@/components/job-search/TheHeadline.vue';
export default {
    name: "TheHero",
    components: {
        TheHeadline,
        JobSearchForm
    },
    data() {

        return {}
    },

}
</script>

<style lang="scss" scoped></style>