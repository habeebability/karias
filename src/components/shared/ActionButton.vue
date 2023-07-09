<template>
    <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
    name: 'ActionButton',
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'primary',
            validator(value) {
                return ['primary', 'secondary'].includes(value)
            }
            // validator: function (value) {
            //     return ['primary', 'secondary' ].indexOf(value) !== -1
            // }
        }
    },
    // data() {
    //     return {
    //         primary: this.isPrimary
    //     }
    // },
    computed: {
        // more optimized
        buttonClass() {
            return {
                [this.type]: true,
            }
        }
        // optimized
        // buttonClass() {
        //     return {
        //         primary: this.type === 'primary', secondary: this.type === 'secondary',
        //         [this.type]: true,
        //     }
        // }

        // code similar to the above code...
        // buttonClass() {
        //     return this.isPrimary ? 'primary' : 'secondary'
        // }
    },
    methods: {
        handleClick() {
            alert('You clicked me!');
        }
    }
}

</script>

<style scoped>
button {
    @apply px-5 py-3 font-medium
}

/* button:hover {
    background-color: #1967d2;
} */


.primary {
    @apply rounded bg-brand-blue-1 text-white
}

.primary:hover {
    @apply bg-brand-blue-2
}



.secondary {
    @apply bg-transparent text-brand-blue-1
}

.secondary:hover {
    @apply bg-brand-blue-2 text-white
}
</style>