<script>
import AppInfo from './components/app-info.vue';
import SearchPanel from './components/search-panel.vue';
import EmployeersList from './components/employeers-list.vue';
import EmployeersAddForm from './components/employeers-add-form.vue';

async function getAllUsers() {
  try {
    const response = await fetch('https://reqres.in/api/users');

    if (!response.ok) {
      throw new Error('Запрос завершился неудачно');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
export default {
  data() {
    return {
      data: [],
      term: '',
      filter: 'all',
      maxId: 6,
    };
  },
  async created() {
      try {
        const users = await getAllUsers();

        this.data = users.data.map((item) => ({
          avatar: item.avatar,
          email: item.email,
          name: `${item.first_name} ${item.last_name}`,
          id: item.id,
        }));
      } catch (error) {
        console.error(error.message);
      }
    },
  computed: {
    employees() {
      return this.data.length;
    },

    visibleData() {
      return this.filterPost(this.searchEmpty(this.data, this.term), this.filter);
    },    
  },
  methods: {
    deleteItem(id) {
      console.log('Delete', id)
      this.data = this.data.filter((item) => item.id !== id);
    },

    addItem({ name, email }) {
      if (name === '' || email === '') {
        alert('You can\'t add an empty string');
      } else {
        const newItem = {
          email: email,
          name: name,
          id: this.maxId++,
        };
        this.data = [...this.data, newItem];
      }
    },
    
    searchEmpty(items, term) {
      if (term.length === 0) {
        return items;
      }

      return items.filter((item) => item.name.indexOf(term) > -1);
    },

    onUpdateSearch(term) {
      this.term = term;
    },

    filterPost(items, filter) {
      switch (filter) {
        case 'like':
          return items.filter((item) => item.like);
        default:
          return items;
      }
    },
    
    onFilterSelect(filter) {
      this.filter = filter;
    },
  },
  components: {
    AppInfo,
    SearchPanel,
    EmployeersList,
    EmployeersAddForm,
  },
};

</script>

<template>
  <div class="app">
    <app-info :employees="employees" />

    <div class="search-panel">
      <search-panel @updateSearch="onUpdateSearch" />
    </div>

    <employeers-list
      :data="visibleData"
      @deleteItem="deleteItem"
    />
    <employeers-add-form @add="addItem" />
  </div>
</template>

<style scoped>
.app {
    margin: 0 auto;
    max-width: 1000px;
}
</style>
