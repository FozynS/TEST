<script>
export default {
    data() {
        return {
            name: '',
            email: '',
        };
    },
    methods: {
        onValueChange(event) {
            this[event.target.name] = event.target.value;
        },
        onSubmit() {
            this.$emit('add', { name: this.name, email: this.email });
            this.name = '';
            this.email = '';
        },
    },
};
</script>

<template>
    <div class="app-add-form">
        <h3>Добавьте нового пользователя</h3>
        <form class="add-form d-flex" @submit.prevent="onSubmit">
            <input
                type="text"
                class="form-control new-post-label"
                placeholder="Как его зовут?"
                :value="name"
                @input="name = $event.target.value"
            />
            <input
                type="text"
                class="form-control new-post-label"
                placeholder="Введите свой e-mail"
                :value="email"
                @input="email = $event.target.value"
            />

        <button type="submit" class="btn btn-outline-dark">Добавить</button>
        </form>
    </div>
</template>

<style scoped>
.app-add-form {
    margin-top: 30px;
    padding: 25px;
    background-color: #43d392;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #1a1a1a;
}

.add-form {
    margin-top: 20px;
}

.add-form input {
    width: 350px;
    margin-right: 20px;
}
</style>