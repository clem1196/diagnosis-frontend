"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: function () {
                return Promise.resolve().then(function () { return require(/* webpackChunkName: "home" */ "../views/HomeView.vue"); });
            },
        },
        {
            path: "/about",
            name: "about",
            component: function () {
                return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ "../views/AboutView.vue"); });
            },
        },
        //Diagnosis    
        {
            path: "/diagnosis",
            name: "diagnosisList",
            component: function () {
                return Promise.resolve().then(function () { return require(/* webpackChunkName: "diagnosisList" */ "../components/diagnosis/diagnosisList.vue"); });
            },
        },
        {
            path: "/diagnosis/detail/:id",
            name: "diagnosisDetail",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisDetail" */ "../components/diagnosis/diagnosisDetail.vue"); });
            },
        },
        {
            path: "/diagnosis/:name",
            name: "diagnosisPatientDetail",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisPatientDetail" */ "../components/diagnosis/diagnosisList.vue"); });
            },
        },
        {
            path: "/diagnosis/add",
            name: "diagnosisAdd",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisAdd" */ "../components/diagnosis/diagnosisList.vue"); });
            },
        },
        {
            path: "/diagnosis/edit/:id",
            name: "diagnosisEdit",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisEdit" */ "../components/diagnosis/diagnosisList.vue"); });
            },
        },
        {
            path: "/diagnosis/delete/:id",
            name: "diagnosisDelete",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisDelete" */ "../components/deleteComponent/removeComponent.vue"); });
            },
        },
        {
            path: "/diagnosis/graphics/:name",
            name: "diagnosisGraphics",
            component: function () {
                return Promise.resolve().then(function () { return require(
                /* webpackChunkName: "diagnosisGraphics" */ "../components/diagnosis/diagnosisList.vue"); });
            },
        },
    ]
});
exports.default = router;
