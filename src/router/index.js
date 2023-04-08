import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Artwork from "../views/ArtworkView.vue";
import ScreamMusicComposer from "../views/artwork_folder/Scream-Music-Composer.vue";
import VariableFlavorRemix from "../views/artwork_folder/Variable-Flavor-Remix.vue";
import CalculativeLinescape from "../views/artwork_folder/Calculative-Linescape.vue";
import MusicCurtain from "../views/artwork_folder/Music-Curtain.vue";
import MusesexEchoes from "../views/artwork_folder/Muses-ex-Echoes.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/artwork",
    name: "about",
    component: Artwork,
  },
  {
    path: "/Scream-Music-Composer",
    name: "Scream-Music-Composer",
    component: ScreamMusicComposer,
  },
  {
    path: "/Variable-Flavor-Remix",
    name: "Variable-Flavor-Remix",
    component: VariableFlavorRemix,
  },
  {
    path: "/Calculative-Linescape",
    name: "Calculative-Linescape",
    component: CalculativeLinescape,
  },
  {
    path: "/Music-Curtain",
    name: "Music-Curtain",
    component: MusicCurtain,
  },
  {
    path: "/Muses-ex-Echoes",
    name: "Muses-ex-Echoes",
    component: MusesexEchoes,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
