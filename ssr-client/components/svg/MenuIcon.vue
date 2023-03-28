<template>
    <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="100" :class="{menuOpened: showMenu}">
        <path
        class="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <path
        class="line middle"
        d="m 30,50 h 40" />
        <path
        class="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
    </svg>
</template>
<script setup>

defineProps(['showMenu'])

</script>
<style scoped>

.ham {
  @apply cursor-pointer duration-300 h-24 w-24 transition-all text-zinc-100/75 hover:text-zinc-100;
  -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.menuOpened {
  @apply rotate-45;
}

.line {
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  fill:none;
  stroke: rgb(244 244 245 / 0.75);
  stroke-width:5.5;
  stroke-linecap:round;
  transition-delay: 200ms;
}

.ham:hover .line {
  stroke: rgb(244 244 245 / 1);
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.menuOpened .top {
  stroke-dashoffset: -98px;
  stroke: rgb(244 244 245 / 1);
}
.ham1.menuOpened .middle {
  stroke: rgb(244 244 245 / 1);
}
.ham1.menuOpened .bottom {
  stroke-dashoffset: -138px;
  stroke: rgb(244 244 245 / 1);
}

</style>