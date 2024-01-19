<script>
import EmployeersListItem from './employeers-list-item.vue';

export default {
    props: {
        data: Array,
        onDelete: Function,
    },
    components: {
        EmployeersListItem,
    },
};
</script>

<template>
    <ul class="app-list list-group">
        <employeers-list-item
            v-for="item in data"
            :key="item.id"
            :avatar="item.avatar"
            :email="item.email"
            :name="item.name"
            @deleteItem="onDelete(item.id)"
        />
    </ul>
</template>

<style>
.app-list {
    margin-top: 30px;
    background-color: #43d392;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
}
</style>