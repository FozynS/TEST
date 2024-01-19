<script>
export default {
    data() {
        return {
            term: '',
        };
    },
    methods: {
        onUpdateSearch() {
            this.$emit('update-search', this.term);
        },
    },
};
</script>

<template>
    <input
        type="text"
        class="form-control search-input"
        placeholder="Найти пользователя"
        v-model="term"
        @input="onUpdateSearch"
    />
</template>

<style>
.search-panel {
    margin-top: 30px;
    padding: 25px;
    background-color: #43d392;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0 .15);
    color: #1a1a1a;
}
</style>