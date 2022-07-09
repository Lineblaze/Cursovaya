export const state = () => ({
    heroes: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setHeroes(state, heroes) {
      state.heroes = heroes
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const heroes = await this.$axios.$get('/api/hero/?limit=2')
      commit('setHeroes', heroes.results);
      commit('setNext', heroes.next)
      commit('setPrevious', heroes.previous);
    },
    async filterByHp({commit}, heroes) {
      const filteredHeroes = [...heroes].filter(hero => hero.hp >= 100);
      commit('setHeroes', filteredHeroes)
    },
    async fetchAll({commit}) {
      const heroes = await this.$axios.$get('/api/hero/')
      commit('setHeroes', heroes.results)
      commit('setNext', heroes.next);
      commit('setPrevious', heroes.previous);
    },
    sortByNames({commit}, heroes) {
      const sortedHeroes = [...heroes].sort((a, b) => {
        if (a.name_hero < b.name_hero) {
          return -1;
        }
        if (a.name_hero > b.name_hero) {
          return 1;
        }
        return 0;
      });

      commit('setHeroes', sortedHeroes);
    },
    async fetchNext({commit}, nextLink) {
      const heroes = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setHeroes', heroes.results);
      commit('setNext', heroes.next);
      commit('setPrevious', heroes.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const heroes = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setHeroes', heroes.results);
      commit('setNext', heroes.next);
      commit('setPrevious', heroes.previous);
    },
  }
  
  export const getters = {
    heroes: s => {
      console.log('got data')
      return s.heroes
    },
    next: s => s.next,
    prev: s => s.prev
  }
  