<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <div class="navbar-links">
            <ul>
                <li>
                    <RouterLink to="/">Phegon</RouterLink>
                </li>
                <li>
                    <RouterLink to="/add">Add File</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">All Files</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>



<style scoped>
.navbar {
    background-color: #333;
    padding: 1rem;
    text-align: center;
    font-size: 30px;

}

.navbar-links ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.navbar-links ul li {
    display: inline-block;
    margin-right: 1rem;
}

.navbar-links ul li:last-child {
    margin-right: 0;
}

.navbar-links ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.navbar-links ul li a:hover {
    color: wheat;
}
</style>
