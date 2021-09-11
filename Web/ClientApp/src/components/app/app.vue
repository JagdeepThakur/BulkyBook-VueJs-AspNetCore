<template>
    <v-app light id="app" style="background-color: #eef5f9 !important">
        <router-view :Key="$route.fullPath"></router-view>
    </v-app>
</template>