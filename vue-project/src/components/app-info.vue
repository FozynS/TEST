<script>
export default {
    props: {
        employees: Number,
    }
};
</script>

<template>
    <div class="app-info">
        <h1>Список пользователей</h1>
        <h2>Общее число пользователей: {{employees}}</h2>
    </div>
</template>

<style scoped>
.app-info {
    padding: 25px;
    background-color: #43d392;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0 .15);
    color: #1a1a1a;
}
</style>