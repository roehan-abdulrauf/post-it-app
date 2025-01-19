<template>
    <div>
        <div class="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50 items-center py-4 px-4">
            <h1 class="font-bold mb-4">YaNote</h1>
            <input type="text" placeholder="Rechercher..." class="border p-2 rounded w-full " />
            <button @click="showPopup = true"
                class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white ">
                <span class="ml-2">Add a new note</span>
            </button>

            <AddNote v-if="showPopup" @close="showPopup = false" />
        </div>
        <div class="mt-48 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

            <!-- Grille des notes -->
            <div v-for="note in notes" :key="note.id"
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105"
                @click="$router.push({ name: 'NoteDetail', params: { id: note._id } })">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    4
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg box-border h-25 w-30 m-2">
                    <p class="pt-5">
                        {{ note.content.join(' ') }}
                    </p>
                </div>

                <div class="px-4 pb-3">
                    <h1
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                        {{ note.title }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import AddNote from "../components/AddNote.vue";

export default {
    name: "Notes",
    components: { AddNote },
    data() {
        return {
            showPopup: false, 
        };
    },
    computed: {
        ...mapState(["notes"]),
    },
    methods: {
        ...mapActions(["loadNotes", "addNote"]),

        async addNote(note) {
            await this.addNote(note);
            this.showPopup = false; 
        },
    },
    async created() {
        await this.loadNotes();
    },
};
</script>