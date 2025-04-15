
import { defineStore } from "pinia";

export const useDesignStore = defineStore("design", {
  state: () => ({
    designs: [],
  }),

  

  actions: {
    loadDesigns() {
      if (process.client) {
        const stored = JSON.parse(localStorage.getItem("designs")) || [];
        this.designs.splice(0, this.designs.length, ...stored);
      }
    },

    saveDesign(data) {
      const newDesign = {
        id: Date.now().toString(),
        img: "image",
        admin: "Admin",
        date: new Date().toLocaleDateString(),
        status: "Active",
        ...data,
      };
      this.designs.push(newDesign);

      if (process.client) {
        localStorage.setItem("designs", JSON.stringify(this.designs));
      }
    },

    updateDesign(updatedDesign) {
      const index = this.designs.findIndex((d) => d.id === updatedDesign.id);
      if (index !== -1) {
        this.designs[index] = updatedDesign;
        if (process.client) {
          localStorage.setItem("designs", JSON.stringify(this.designs));
        }
      }
    },

    deleteDesign(id) {
      this.designs = this.designs.filter((design) => design.id !== id);
      if (process.client) {
        localStorage.setItem("designs", JSON.stringify(this.designs));
      }
    },
  },
});

