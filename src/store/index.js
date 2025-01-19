import { createStore } from 'vuex';

const store = createStore({
  state: {
    notes: [],
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    },
  },
  actions: {
    // Charger les notes depuis l'API
    async loadNotes({ commit }) {
      const response = await fetch('http://5.135.119.239:3090/notes');
      const data = await response.json();
      commit('setNotes', data);
    },
    // Ajouter une note via l'API
    async addNote({ commit }, noteContent) {
      const response = await fetch('https://post-it.epi-bluelock.bj/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: noteContent }),
      });
      const newNote = await response.json();
      commit('addNote', newNote);
    },
    // Supprimer une note via l'API
    async deleteNote({ commit }, id) {
      await fetch(`https://post-it.epi-bluelock.bj/notes/${id}`, {
        method: 'DELETE',
      });
      commit('deleteNote', id);
    },
  },
});

export default store;
