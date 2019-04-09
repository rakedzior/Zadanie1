/* deklaracja zmiennych i szablonu tych podstron */
var Wszystko = { template: "wyszukiwarka.html" };
var Wiadomosci = { template: "" };
var Grafika = { template: "" };
var Zakupy = { template: "" };
var Filmy = { template: "" };
var Wiecej = { template: "" };
var Ustawienia = { template: "" };
var Narzedzia = { template: "" };

/* ustalenie sciezek odnosnikow i zmiennych z nimi powiazanych */
var routes = [
  { path: '/', component: Wszystko },
  { path: '/wiadomosci', component: Wiadomosci},
  { path: '/grafika', component: Grafika},
  { path: '/zakupy', component: Zakupy},
  { path: '/filmy', component: Filmy},
  { path: '/wiecej', component: Wiecej},
  { path: '/ustawienia', component: Ustawienia},
  { path: '/narzedzia', component: Narzedzia},
];

/* nowa instancja routera */
var router = new VueRouter({
  routes: routes,
  mode: 'history',
});

/* przypisanie routera do miejsca w kodzie */
var app = new Vue({
  el: '#app2',
  router: router
});
