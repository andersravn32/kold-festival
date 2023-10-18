const show = ref(false);
const url = ref(null);

export const useImageSelector = () => {
  const toggle = () => {
    show.value = !show.value;
  };

  return { toggle, show, url };
};
