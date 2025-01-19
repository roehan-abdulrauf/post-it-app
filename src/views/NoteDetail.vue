<template>
  <div class="p-6 flex flex-col items-center justify-center min-h-screen ">

    <div v-if="note"
      class="relative bg-white border rounded-lg shadow-md max-w-lg w-full dark:bg-gray-800 dark:border-gray-700">

      <div class="p-4 border-b border-gray-300 dark:border-gray-700">
        <h1 class="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
          {{ note.title }}
        </h1>
      </div>

      <div class="p-6 bg-amber-800 text-gray-100 rounded-b-lg">
        <p class="text-justify">
          {{ note.content }}
        </p>
      </div>

      <div class="p-4 text-center">
        <button @click="$router.push('/')"
          class="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
          Retour à la liste
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NoteDetail',
  props: ['id'], 
  computed: {

    note() {
      return this.notes.find((note) => note._id === this.id);
    },
    ...mapState(['notes']), 
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleDateString('fr-FR', options);
    },
  },
};
</script>

