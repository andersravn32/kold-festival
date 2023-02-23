const show = ref(false);
const component = shallowRef(null);

export const useSidebar = () => {
  return { show, component };
};
