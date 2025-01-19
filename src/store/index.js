import { createStore } from 'vuex';

const store = createStore({
  state: {
    notes: [], // Liste des notes
    loading: false, // Indique si une requête est en cours
    error: null, // Stocke les messages d'erreur
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = Array.isArray(notes.notes) ? notes.notes : []; // Vérifie que notes est un tableau
    },
    addNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    // Charger les notes depuis l'API
    async loadNotes({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const response = await fetch('https://post-it.epi-bluelock.bj/notes');
        if (!response.ok) throw new Error('Erreur lors du chargement des notes');
        const data = await response.json();
        commit('setNotes', data);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    // Ajouter une note via l'API
    async addNote({ commit }, noteContent) {
      commit('setError', null);
      try {
        const response = await fetch('https://post-it.epi-bluelock.bj/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: noteContent }),
        });
        if (!response.ok) throw new Error('Erreur lors de l\'ajout de la note');
        const newNote = await response.json();
        commit('addNote', newNote);
        return newNote; // Retourne la note ajoutée
      } catch (error) {
        commit('setError', error.message);
        throw error; // Propagation de l'erreur
      }
    },
    // Supprimer une note via l'API
    async deleteNote({ commit }, id) {
      commit('setError', null);
      try {
        const response = await fetch(`https://post-it.epi-bluelock.bj/notes/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Erreur lors de la suppression de la note');
        commit('deleteNote', id);
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },
  },
});

export default store;
