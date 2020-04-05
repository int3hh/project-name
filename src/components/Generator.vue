<template>
    <section class="section">
        <div class="container">
            <img alt="logo" src="../assets/logo.jpg" class="animated pulse infinite" style="cursor:pointer;" @click="generate">
            <div class="box" style="margin-top:15px;">
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
        }
    }
}
</script>

<style scoped>
.name {
    font-size:48px;
}
</style>