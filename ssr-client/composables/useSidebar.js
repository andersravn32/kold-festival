const show = ref(false);
const component = shallowRef(null);
const editData = ref(null);

export const useSidebar = () => {
  return { show, component, editData };
};
