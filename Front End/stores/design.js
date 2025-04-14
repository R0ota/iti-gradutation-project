import { defineStore } from "pinia";
import { ref } from "vue";

export const useDesignStore = defineStore("design", () => {
  const designs = ref([]);

  function loadDesigns() {
    if (process.client) {
      const stored = JSON.parse(localStorage.getItem("designs")) || [];
      designs.value.splice(0, designs.value.length, ...stored);
    }
  }

  function saveDesign(data) {
    const newDesign = {
      id: Date.now().toString(),
      img: "image",
      admin: "Admin",
      date: new Date().toLocaleDateString(),
      status: "Active",
      ...data,
    };
    designs.value.push(newDesign);

    if (process.client) {
      localStorage.setItem("designs", JSON.stringify(designs.value));
    }
  }

  function updateDesign(updatedDesign) {
    const index = this.designs.findIndex((d) => d.id === updatedDesign.id);
    if (index !== -1) {
      this.designs[index] = updatedDesign;
      localStorage.setItem("designs", JSON.stringify(this.designs));
    }
  }

  function deleteDesign(id) {
    designs.value = designs.value.filter((design) => design.id !== id);
    if (process.client) {
      localStorage.setItem("designs", JSON.stringify(designs.value));
    }
  }

  return {
    designs,
    loadDesigns,
    saveDesign,
    updateDesign,
    deleteDesign,
  };
});
