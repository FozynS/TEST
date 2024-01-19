<script>
export default {
    props: {
        avatar: String,
        name: String,
        email: String,
        onDelete: Function,
        id: Number,
    },
    computed: {
        classNames() {
            return {
                'list-group-item': true,
                'd-flex': true,
                'justify-content-between': true,
            };
        },
    },
};
</script>

<template>
    <li :class="classNames">
        <img :src="avatar" alt="Avatar">
        <span
            class="list-group-item-label"
            >
            {{ email }}
        </span>
        <span
            class="list-group-item-label"
            >
            {{ name }}
        </span>
        <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn-trash btn-sm"  @click="$emit('onDelete', id)">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </li>
</template>

<style>
img {
    width: 50px;
    height: 50px;
}
.list-group-item {
    color: #2e2e2e;
    padding: 15px 20px;
    border-bottom: 1px solid #43d392;
}

.list-group-item:last-child {
    border-bottom: none;
}

.list-group-item span {
    line-height: 35px;
    font-size: 20px;
    min-width: 300px;
    margin-left: 35px;
}

.list-group-item input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
}

.list-group-item button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.list-group-item .btn-cookie {
    color: #e09f3e;
}

.list-group-item .btn-trash {
    color: #e5383b;
}

.list-group-item .fa-star {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #FFD700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
}

.list-group-item.like .fa-star {
    opacity: 1;
    transform: translateX(0px);
}

.list-group-item.increase .list-group-item-label, .list-group-item.increase .list-group-item-input {
    color: #e09f3e;
}

.list-group-item.increase .btn-star {
    color: #aeaeae;
}

</style>