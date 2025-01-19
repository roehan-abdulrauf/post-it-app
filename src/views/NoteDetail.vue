<template>
  <div class="p-6 flex flex-col items-center justify-center min-h-screen ">
    <!-- Vérification si la note existe -->
    <div
      v-if="note"
      class="relative bg-white border rounded-lg shadow-md max-w-lg w-full dark:bg-gray-800 dark:border-gray-700"
    >
      <!-- Titre -->
      <div class="p-4 border-b border-gray-300 dark:border-gray-700">
        <h1
          class="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white"
        >
          {{ note.title }}
        </h1>
      </div>

      <!-- Contenu -->
      <div class="p-6 bg-amber-800 text-gray-100 rounded-b-lg">
        <p class="text-justify">
          {{ note.content }}
        </p>
      </div>

      <!-- Bouton Retour -->
      <div class="p-4 text-center">
        <button
          @click="$router.push('/')"
          class="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700"
        >
          Retour à la liste
        </button>
      </div>
    </div>

    <!-- Message d'erreur si la note n'existe pas -->
    <div
      v-else
      class="text-center text-red-500 font-semibold text-lg"
    >
      <!-- La note demandée n'existe pas. Veuillez revenir à la liste.
      <button
        @click="$router.push('/')"
        class="block mt-4 bg-gray-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-gray-700"
      >
        Retour à la liste
      </button> -->
      <div
 
      class="relative bg-white border rounded-lg shadow-md max-w-lg w-full "
    >
      <!-- Titre -->
      <div class="p-4 border-b border-gray-300 ">
        <h1
          class="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white"
        >
          test
        </h1>
      </div>

      <!-- Contenu -->
      <div class="p-6 bg-amber-800 text-gray-100 rounded-b-lg">
        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
        </p>
      </div>

      <!-- Bouton Retour -->
      <div class="p-4 text-center">
        <button
          @click="$router.push('/')"
          class="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700"
        >
          Retour à la liste
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'], // Reçoit l'ID de la note via les props
  computed: {
    // Recherche de la note dans le store à partir de l'ID
    note() {
      return this.$store.state.notes.find((note) => note.id === this.id);
    },
  },
};
</script>

<style>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
