<script setup>
import { ref, onMounted } from 'vue';
import ApiService from '../service/ApiService';
import { useRouter } from 'vue-router';

const files = ref([]);
const router = useRouter();


onMounted(() => {
  loadFiles();
});

const loadFiles = async () => {
  try {
    const response = await ApiService.getAllFiles();
    files.value = response;
  } catch (error) {
    console.error(error);
  }
};



const goToAddFilePage = () => {
  router.push('/add');
};
</script>



<template>
  <div class="home-container">
    <h1>All Images</h1>
    <div class="add-button-div">
      <a @click="goToAddFilePage">Add New File</a>
    </div>
    <div class="image-row">
      <div v-for="file in files" :key="file.id" class="image-item">
        <img :src="file.fileUrl" alt="File Image" />
        <p>{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>





<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.add-button-div {
  margin-bottom: 20px;
}

.add-button-div a {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
}

.add-button-div a:hover {
  background-color: green;
}

.image-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image-item {
  flex: 1 1 30%;
  box-sizing: border-box;
  padding: 10px;
  max-width: 30%;
}

.image-item img {
  width: 100%;
  height: 250px;
  display: block;
  margin: 0 auto;
}

.image-item p {
  margin-top: 10px;
}
</style>