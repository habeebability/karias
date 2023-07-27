import { defineStore } from 'pinia'
import getJobs from '../api/getJobs'

import { useUserStore } from './user'

export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const UNIQUE_JOB_TYPES = 'UNIQUE_JOB_TYPES'

// getter names
export const FILTERED_JOBS = 'FILTERED_JOBS'
// export const FILTERED_JOBS_BY_ORGANIZATIONS = 'FILTERED_JOBS_BY_ORGANIZATIONS'
export const INCLUDE_JOB_BY_ORGANIZATION = 'INCLUDE_JOB_BY_ORGANIZATION'

export const INCLUDE_JOB_BY_JOB_TYPE = 'INCLUDE_JOB_BY_JOB_TYPE'

// export const FILTERED_JOBS_BY_JOB_TYPES = 'FILTERED_JOBS_BY_JOB_TYPES'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs()
      this.jobs = jobs
    }
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set()
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization))
      return uniqueOrganizations
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set()
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
      return uniqueJobTypes
    },

    // determine what is included in the filtered jobs
    // getters always accept state as the first argument
    // if a getter is going to accept other arguments, it must return a function
    [INCLUDE_JOB_BY_ORGANIZATION]: () => (job) => {
      const userStore = useUserStore()
      if (userStore.selectedOrganizations.length === 0) return true

      return userStore.selectedOrganizations.includes(job.organization)
    },
    [INCLUDE_JOB_BY_JOB_TYPE]: () => (job) => {
      const userStore = useUserStore()
      if (userStore.selectedJobTypes.length === 0) return true

      return userStore.selectedJobTypes.includes(job.jobType)
    },

    // [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    //   const userStore = useUserStore()

    //   if (userStore.selectedOrganizations.length === 0) {
    //     return state.jobs
    //   }

    //   return state.jobs.filter((job) => userStore.selectedOrganizations.includes(job.organization))
    // },
    // [FILTERED_JOBS_BY_JOB_TYPES](state) {
    //   const userStore = useUserStore()

    //   if (userStore.selectedJobTypes.length === 0) {
    //     return state.jobs
    //   }

    //   return state.jobs.filter((job) => userStore.selectedJobTypes.includes(job.jobType))
    // },

    [FILTERED_JOBS](state) {
      // if no filters are selected, return all jobs
      // this getter accepts another getters

      return state.jobs
        .filter((job) => this.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter((job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
    }
  }
})
