export const state = () => ({
    
  })
  
  export const mutations = {
    setVacanciesCount(state, vacanciesCount) {
      state.vacanciesCount = vacanciesCount
    },
    setEmployers(state, employers) {
      state.employers = employers
    },
    setFinders(state, finders) {
      state.finders = finders
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      console.log('nuxtServerInit');
    }
  }
  
  export const getters = {
    
  }
  