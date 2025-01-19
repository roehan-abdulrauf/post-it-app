<template>

  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h2 class="text-xl font-bold mb-4">{{ isEdit ? 'Modifier' : 'Ajouter' }} une Note</h2>
      <form @submit.prevent="saveNote">
        <label for="title" class="block mb-2">Titre</label>
        <input id="title" placeholder="Titre" class="border p-2 rounded w-full mb-4" />

        <label for="content" class="block mb-2">Contenu</label>
        <textarea id="content" placeholder="Contenu"
          class="border p-2 rounded w-full mb-4"></textarea>

        <div class="flex justify-end">
          <button type="button" @click="$emit('close')" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Annuler
          </button>
          <button type="submit" class="bg-indigo-800 text-white px-4 py-2 rounded">
            {{ isEdit ? 'Enregistrer' : 'Ajouter' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      title: "", 
      content: "", 
    };
  },
  methods: {
    async saveNote() {
      if (!this.title || !this.content) {
        alert("Veuillez remplir tous les champs !");
        return;
      }

      const newNote = {
        title: this.title,
        content: [this.content], 
      };

      try {
        await this.$store.dispatch("addNote", newNote); 
        this.$emit("close"); 
      } catch (error) {
        console.error("Erreur lors de l'ajout de la note :", error);
      }
    },
  },
};
</script>