<template>
    <div>
        <h1>Mixins</h1>
        <input v-model="filterText" />
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <hr />
    </div>
</template>

<script>
export default {
    data() {
        return {
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((f) => {
                return f.match(this.filterText);
            });
        }
    }
}
</script>

<style>

</style>
