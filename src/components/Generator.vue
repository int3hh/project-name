<template>
    <section class="section">
        <div class="container">
            <img alt="logo" src="../assets/logo.jpg" class="animated tada infinite delay-1s" style="cursor:pointer;" @click="generate">
            <div class="box" style="margin-top:15px;cursor:pointer" v-clipboard:copy="name" v-clipboard:success="showSuccess">
               <span class="name"> {{ name }} </span>
            </div>
        </div>
    </section>
</template>

<script>

import NameGenerator from '../generator'

export default {
    data() {
        return {
             name: ''
        }
    },
    mounted() {
        this.generate();
    },
    methods: {
        generate() {
            this.name = new NameGenerator().generate();
        },
        showSuccess() {
            this.$buefy.toast.open({
                    message: 'Name copied to clipboard!',
                    type: 'is-success'
                })
        }
    }
}
</script>

<style scoped>
.name {
    font-size:48px;
}
</style>