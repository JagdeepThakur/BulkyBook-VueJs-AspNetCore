<template>
    <v-app light id="app">
        <router-view :Key="$route.fullPath"></router-view>
    </v-app>
</template>