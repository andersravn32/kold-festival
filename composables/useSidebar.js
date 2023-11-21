const show = ref(false);
const component = shallowRef(null);
const editData = ref(null);

export const useSidebar = () => {
  const toggle = () => {
    show.value = !show.value;
    (show.value) ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    if (!show.value) {
      component.value = null;
      editData.value = null;
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
