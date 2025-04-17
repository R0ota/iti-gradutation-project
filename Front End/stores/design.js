


import { defineStore } from "pinia";
import { getBaseURL } from '~/composables/helpers';

export const useDesignStore = defineStore("design", {
  state: () => ({
    designs: [],
    loading: false,
    error: null,
    imageUrl: "",     
  }),

  getters: {
    // get all designs
    getAlldesigns: state => state.designs,

    // get one by id
    getdesignsById: state => id => {
      return state.designs.find(design => design._id === id);
    }
  },

  actions: {
    async fetchdesigns() {
      if (this.loading) {
        return;
      }

      console.log('Fetching designs...');
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/design?limit=1000`, {
          method: 'GET'
        });

        this.designs = response.data || [];
      } catch (error) {
        console.error('Error fetching designs:', error);
        this.error = error.message || 'Failed to load designs';
      } finally {
        this.loading = false;
      }
    },

    // create design
    async createDesign(newDesign) {
      // const authStore = useAuthStore();   
      // const token = authStore.authToken;
      const token = localStorage.getItem('auth_token')
      try {
        const response = await $fetch(`${getBaseURL()}/design`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,    
          },
          body: newDesign
        });

        this.designs.push(response.data);  // add design to state
      } catch (error) {
        console.error('Error creating design:', error);
        this.error = error.message || 'Failed to create design';
      }
    },

    // update design
    async updateDesign(id, updatedDesign) {
      try {
        // const authStore = useAuthStore();   
        // const token = authStore.authToken;
        const token = localStorage.getItem('auth_token')
        const response = await $fetch(`${getBaseURL()}/design/${id}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,  
          },
          body: updatedDesign
        });

        const index = this.designs.findIndex(design => design._id === id);
        if (index !== -1) {
          this.designs[index] = response.data;  // add updated design to state
        }
      } catch (error) {
        console.error('Error updating design:', error);
        this.error = error.message || 'Failed to update design';
      }
    },

    // delete design
    async deleteDesign(id) {
      try {
        // const authStore = useAuthStore();   
        // const token = authStore.authToken;
        const token = localStorage.getItem('auth_token')
        await $fetch(`${getBaseURL()}/design/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,  
          },
        });

        this.designs = this.designs.filter(design => design._id !== id);  // delete design from state
      } catch (error) {
        console.error('Error deleting design:', error);
        this.error = error.message || 'Failed to delete design';
      }
    },

  }
});
