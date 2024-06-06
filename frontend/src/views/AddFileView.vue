<template>
    <div class="addfile-container">
        <h1>Add New Image</h1>
        <p class="message" v-if="message">{{ message }}</p>
        <form @submit="handleSubmit">
            <div class="form-group">
                <label>File:</label>
                <input type="file" @change="handleFileChange" />
            </div>
            <div class="form-group">
                <label>Name:</label>
                <input type="text" v-model="name" />
            </div>
            <button type="submit">Upload</button>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue';

import ApiService from '@/service/ApiService';
import { useRouter } from 'vue-router';

const file = ref(null);
const name = ref('');
const message = ref('');

const router = useRouter();

const handleFileChange = (event) => {
    file.value = event.target.files[0];
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!file.value || !name.value) {
        message.value = 'File and Name are required';
        return;
    }

    const formData = new FormData();
    formData.append('file', file.value);
    formData.append('name', name.value);

    ApiService.addFile(formData)
        .then((response) => {
            console.log(response)
            if (response.id) {
                message.value = 'Image uploaded successfully!';
                setTimeout(() => {
                    router.push('/'); // Navigate to home page after 5 seconds
                }, 5000);
            } else {
                message.value = response.data;
                setTimeout(() => {
                    message.value = '';
                }, 5000);
            }
        })
        .catch((error) => {
            message.value = error.message;
            setTimeout(() => {
                message.value = '';
            }, 5000);
            console.error('There was an error uploading the image!', error);
        });
};
</script>



<style scoped>
.addfile-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group input[type="file"],
.form-group input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #00b362;
}

.message {
    margin-top: 1rem;
    color: rgb(22, 3, 194);
    text-align: center;
    font-weight: 800;
    font-size: 25px;
}
</style>
