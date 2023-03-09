const show = ref(false);
const component = shallowRef(null);
const editData = ref(null);

export const useSidebar = () => {
  const toggle = () => {
    show.value = !show.value;
    if (!show.value) {
      component.value = null;
    }
  };

  const setComponent = (comp) => {
    component.value = comp;
    return component.value;
  }

  const getComponent = () => {
    return component.value;
  }


  return { toggle, setComponent, getComponent, show, component, editData };
};
