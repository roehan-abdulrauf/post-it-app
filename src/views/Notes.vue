<template>
    <div>
        <div class="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50 items-center py-4 px-4">
            <h1 class="font-bold mb-4">YaNote</h1>
            <input type="text" v-model="searchQuery" placeholder="Rechercher..." class="border p-2 rounded w-full " />
            <button @click="showPopup = true"
                class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white ">
                <span class="ml-2">Add a new note</span>
            </button>

            <AddNote v-if="showPopup" @close="showPopup = false" />
        </div>
        <div class="mt-48 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

            <!-- card  binder-->
            <div v-for="note in notes" :key="note.id"
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105"
                @click="$router.push(`/note`)">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    4
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg box-border h-25 w-30 m-2">
                    <p class="pt-5">
                        {{ note.content }}
                    </p>
                </div>

                <div class="px-4 pb-3">
                    <h1
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                        {{ note.title }}
                    </h1>
                </div>
            </div>

            <!-- card  -->
            <div class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105"
                @click="$router.push(`/note`)">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    4
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg box-border h-25 w-30 m-2">
                    <a href="#">
                        <p class="pt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <!-- <a href="#"> -->
                        <h1
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                            avocat
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    5
                </div>

                <div class="p-2 flex justify-center pb-10 bg-orange-100 rounded-lg box-border h-25 w-30 m-2">
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 5
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    6
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg box-border h-25 w-30 m-2">
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 6
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    7
                </div>

                <div class="p-2 flex justify-center pb-10 bg-neutral-400 rounded-lg box-border h-25 w-30 m-2">
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 7
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    8
                </div>

                <div class="p-2 flex justify-center pb-10 bg-neutral-400 rounded-lg m-3">
                    >
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                            impedit!
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 8
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    9
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg m-3">
                    >
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                            impedit!
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 9
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    10
                </div>

                <div class="p-2 flex justify-center pb-10 bg-orange-200 rounded-lg m-3">
                    >
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-200 text-sm break-all">
                            note 10
                        </h1>
                    </div>
                </div>
            </div>
            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    11
                </div>

                <div class="p-2 flex justify-center pb-10 bg-amber-800 rounded-lg m-3">
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 11
                        </h1>
                    </div>
                </div>
            </div>

            <!-- card  -->
            <div
                class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    12
                </div>

                <div class="p-2 flex justify-center pb-10 bg-orange-200 rounded-lg m-3">
                    <a href="#">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            porro eveniet. A quia iure debitis id provident, optio tempore
                            nobis dicta, neque dolores quod odio numquam? Dolorum repellendus
                            voluptates nobis? Lorem ipsum dolor sit amet consectetur impedi
                        </p>
                    </a>
                </div>

                <div class="px-4 pb-3">
                    <div>
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                                avocat
                            </h5>
                        </a>
                        <h1 class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                            note 12
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import AddNote from '../components/AddNote.vue';


export default {
    name: 'Notes',
    components: {
        AddNote,
    },
    setup() {
        const store = useStore();

        const newNote = ref('');
        const searchQuery = ref('');
        const showPopup = ref(false);

        const notes = computed(() => store.state.notes);

        const addNewNote = (noteContent) => {
            if (noteContent.trim()) {
                store.dispatch('addNote', noteContent);
                newNote.value = '';
                showPopup.value = false; 
            }
        };

        const deleteExistingNote = (id) => {
            store.dispatch('deleteNote', id);
        };

        return {
            newNote,
            searchQuery,
            showPopup,
            notes,
            addNewNote,
            deleteExistingNote,
        };
    },
};
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>