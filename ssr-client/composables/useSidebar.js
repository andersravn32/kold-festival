const show = ref(true);
const component = shallowRef(null);

export const useSidebar = () => {
  return { show, component };
};
