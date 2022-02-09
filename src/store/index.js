import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detail: {},
    list: [],
    favorites: [],
  },
  getters: {
    list(state) {
      return state.list
    },
    detail(state) {
      return state.detail
    },
    favorites(state) {
      return state.favorites
    },
  },
  mutations: {
    setList(state, items) {
      const itemsNew = items.map((i) => {
        const newItem = { ...i };
        if (state.favorites.length) {
          const indexF = state.favorites.findIndex(f => f.name === i.name);
          newItem.favorite = indexF > -1;
        } else {
          newItem.favorite = false;
        }
        return newItem;
      });
      state.list = itemsNew;
      state.loading = false;
    },
    setDetailPok(state, { data, favorite }) {
      state.detail = { ... data };
      state.detail.favorite = Boolean(favorite);
      state.detail.image = data.sprites.front_default;
      state.detail.typesString = data.types.map(t => t.type.name).toString();
      state.detail.statsString = data.stats.map(t => t.stat.name).toString();
    },
    setPokDeleteFav(state, index) {
      const namePok = state.favorites[index].name;
      state.favorites.splice(index, 1);
      const indexD = state.list.findIndex(f => f.name === namePok);
      state.list[indexD].favorite = !state.list[indexD].favorite;
    },
    setPokFav(state, index) {
      state.list[index].favorite = !state.list[index].favorite;
      if (state.list[index].favorite) {
        state.favorites.push(state.list[index]);
      } else {
        const indexDelete = state.favorites.findIndex(f => f.name === state.list[index].name);
        state.favorites.splice(indexDelete, 1);
      }
    },
  },
  actions: {
    async getListPok(context) {
      const response = 'https://pokeapi.co/api/v2/pokemon';
      const resp = await fetch(response);
      const data = await resp.json();
      context.commit('setList', data.results);
    },
    async getDetailPok(context, { name, favorite }) {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const resp = await fetch(url);
      const data = await resp.json();
      context.commit('setDetailPok', { data, favorite });
    },
    getPokDeleteFavorite(context, index) {
      context.commit('setPokDeleteFav', index);
    },
    getPokFavorite(context, index) {
      context.commit('setPokFav', index);
    },
  },
  modules: {
  }
})
