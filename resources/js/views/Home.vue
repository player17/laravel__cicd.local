<template>
    <h1>Home</h1>

    <button class="btn btn-primary" @click.prevent="load" v-if="migrations.length === 0">Загрузить список</button>

    <div class="server-response" v-if="migrations.length > 0">
        <h2>Список:</h2>
        <ul>
            <li v-for="item in migrations" :key="item.id">{{ item.migration }}</li>
        </ul>
    </div>


</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            migrations: []
        }
    },

    methods: {
        load() {
            axios
                .get('/api/migration')
                .then(response => {
                    this.migrations = response.data
                })
        }
    },
}

</script>

<style scoped>

</style>
