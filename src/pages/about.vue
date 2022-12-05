<script setup>
import bg from '../assets/img/bg.jpg'

</script>

<template>
    <div id="page-about">
        <!-- hero section -->
        <section class="hero flex flex-col justify-center items-center relative overflow-hidden">
            <div class="gradient-backdrop absolute w-full z-20"></div>
            <img class="hero-logo absolute m-auto z-30" src="../assets/img/logo.svg" alt="KOLD Icon" />
            <div class="z-40">
                <div class="flex flex-col items-center justify-center">
                    <span class="text-[8rem] uppercase font-bold text-zinc-100 font-header leading-[0.7]">
                        OM
                    </span>
                    <span class="text-[4rem] text-center font-header text-zinc-100">KOLD Festival</span>
                </div>
            </div>
            <div class="w-full h-full bg-cover bg-center absolute origin-bottom"
                :style="{ 'background-image': `url(${bg})` }"></div>
        </section>

        <!-- // About info -->
        <article class="info grid lg:grid-cols-2 my-16">
            <span class="block px-12">
                <h2 class='font-header font-bold m-auto text-4xl mb-2'>Hvad er Kold Festival?</h2>
                <h3 class="font-body mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nulla
                    ratione error excepturi iusto mollitia obcaecati suscipit molestias officia quos quia laboriosam
                    doloribus quo a debitis quas nemo eaque laborum. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Aliquam molestias quidem in non eligendi nihil, aut nemo expedita? Ipsa, molestiae? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam reiciendis dignissimos expedita animi
                    quam eveniet eaque iste! Necessitatibus, doloribus sequi. Soluta iure et magni praesentium excepturi
                    reprehenderit, consequuntur repellendus?
                </h3>
            </span>
            <span class="relative px-12 m-auto">
                <img class="relative ;"
                    src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
                <!-- SVG 1 -->
                <svg class="absolute w-40 -top-16 lg:-top-24 left-0 z-99" width="242" height="274" viewBox="0 0 242 274"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M143.966 85.8044L96.6457 31.0934L29.1523 101.29L116.481 202.261L50.8197 270.549L25.089 269.8L91.1165 201.131L4.06693 100.479L97.6048 3.19951L168.998 85.7492L143.966 85.8044Z"
                        fill="#4F46E5" />
                    <path
                        d="M178.966 85.8044L131.649 31.0935L64.1523 101.29L151.481 202.261L85.8197 270.549L60.089 269.8L126.117 201.131L39.0669 100.479L132.608 3.1996L204.001 85.7493L178.966 85.8044Z"
                        fill="#4F46E5" />
                    <path
                        d="M214.869 85.7287L167.552 31.0178L100.059 101.214L187.387 202.186L121.726 270.473L95.9953 269.724L162.023 201.056L74.9732 100.403L168.511 3.12394L239.904 85.6737L214.869 85.7287Z"
                        fill="#4F46E5" />
                </svg>

                <!-- SVG 2 -->
                <svg class="absolute w-40 -bottom-32 right-8 z-99" width="269" height="269" viewBox="0 0 269 269"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_101_131)">
                        <path
                            d="M134.495 170.166C154.195 170.166 170.165 154.196 170.165 134.496C170.165 114.795 154.195 98.8251 134.495 98.8251C114.794 98.8251 98.8242 114.795 98.8242 134.496C98.8242 154.196 114.794 170.166 134.495 170.166Z"
                            fill="#2563EB" stroke="#2563EB" stroke-miterlimit="10" />
                        <path
                            d="M134.495 185.174C162.484 185.174 185.174 162.485 185.174 134.495C185.174 106.506 162.484 83.8167 134.495 83.8167C106.506 83.8167 83.8164 106.506 83.8164 134.495C83.8164 162.485 106.506 185.174 134.495 185.174Z"
                            stroke="#2563EB" stroke-width="16" stroke-miterlimit="10" />
                        <path
                            d="M134.496 204.16C172.971 204.16 204.161 172.97 204.161 134.496C204.161 96.0209 172.971 64.8311 134.496 64.8311C96.0219 64.8311 64.832 96.0209 64.832 134.496C64.832 172.97 96.0219 204.16 134.496 204.16Z"
                            stroke="#2563EB" stroke-width="13" stroke-miterlimit="10" />
                        <path
                            d="M134.5 207C174.541 207 207 174.541 207 134.5C207 94.4594 174.541 62 134.5 62C94.4594 62 62 94.4594 62 134.5C62 174.541 94.4594 207 134.5 207Z"
                            stroke="#2563EB" stroke-width="13" stroke-miterlimit="10" />
                        <path
                            d="M134.494 223.654C183.735 223.654 223.653 183.736 223.653 134.496C223.653 85.2547 183.735 45.3372 134.494 45.3372C85.2535 45.3372 45.3359 85.2547 45.3359 134.496C45.3359 183.736 85.2535 223.654 134.494 223.654Z"
                            stroke="#2563EB" stroke-width="10" stroke-miterlimit="10" />
                        <path
                            d="M134.497 239.625C192.559 239.625 239.627 192.557 239.627 134.496C239.627 76.434 192.559 29.3657 134.497 29.3657C76.4354 29.3657 29.3672 76.434 29.3672 134.496C29.3672 192.557 76.4354 239.625 134.497 239.625Z"
                            stroke="#2563EB" stroke-width="7" stroke-miterlimit="10" />
                        <path
                            d="M134.494 253.688C200.322 253.688 253.687 200.324 253.687 134.496C253.687 68.6671 200.322 15.3026 134.494 15.3026C68.6653 15.3026 15.3008 68.6671 15.3008 134.496C15.3008 200.324 68.6653 253.688 134.494 253.688Z"
                            stroke="#2563EB" stroke-width="4" stroke-miterlimit="10" />
                        <path
                            d="M134.494 268.099C208.282 268.099 268.098 208.283 268.098 134.496C268.098 60.7082 208.282 0.891724 134.494 0.891724C60.7071 0.891724 0.890625 60.7082 0.890625 134.496C0.890625 208.283 60.7071 268.099 134.494 268.099Z"
                            stroke="#2563EB" stroke-width="2" stroke-miterlimit="10" />
                    </g>
                    <defs>
                        <clipPath id="clip0_101_131">
                            <rect width="269" height="269" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            </span>
        </article>
        <article class="info grid lg:grid-cols-2 my-16">
            <span class="block px-12">
                <h2 class='font-header font-bold m-auto  text-4xl mb-2'>Bæredygtighed</h2>
                <h3 class="font-body mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nulla
                    ratione error excepturi iusto mollitia obcaecati suscipit molestias officia quos quia laboriosam
                    doloribus quo a debitis quas nemo eaque laborum. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Aliquam molestias quidem in non eligendi nihil, aut nemo expedita? Ipsa, molestiae? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam reiciendis dignissimos expedita animi
                    quam eveniet eaque iste! Necessitatibus, doloribus sequi. Soluta iure et magni praesentium excepturi
                    reprehenderit, consequuntur repellendus?
                </h3>
            </span>
            <span class="block px-12 m-auto">
                <img class=""
                    src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">

            </span>
        </article>

        <!-- Socials -->
        <section id="socials">
            <h3 class=" text-center font-header font-bold text-xl ">Se hvad der sker på vores sociale medier</h3>
            <div class="socialIcons pt-8 pb-8">
                <!-- Instagram -->
                <a class="opacity-75 hover:opacity-100 transition-all duration-150"
                    href="https://www.instagram.com/koldfestival/">
                    <svg width="100" height="100" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M51.9013 0.666656H126.101C154.368 0.666656 177.335 23.6333 177.335 51.9V126.1C177.335 139.688 171.937 152.719 162.329 162.327C152.721 171.936 139.689 177.333 126.101 177.333H51.9013C23.6346 177.333 0.667969 154.367 0.667969 126.1V51.9C0.667969 38.3121 6.06575 25.2807 15.6739 15.6726C25.282 6.06444 38.3134 0.666656 51.9013 0.666656M50.1346 18.3333C41.7008 18.3333 33.6123 21.6837 27.6486 27.6473C21.685 33.611 18.3346 41.6994 18.3346 50.1333V127.867C18.3346 145.445 32.5563 159.667 50.1346 159.667H127.868C136.302 159.667 144.39 156.316 150.354 150.353C156.318 144.389 159.668 136.301 159.668 127.867V50.1333C159.668 32.555 145.446 18.3333 127.868 18.3333H50.1346ZM135.376 31.5833C138.305 31.5833 141.113 32.7466 143.184 34.8174C145.255 36.8881 146.418 39.6966 146.418 42.625C146.418 45.5534 145.255 48.3619 143.184 50.4326C141.113 52.5033 138.305 53.6667 135.376 53.6667C132.448 53.6667 129.639 52.5033 127.569 50.4326C125.498 48.3619 124.335 45.5534 124.335 42.625C124.335 39.6966 125.498 36.8881 127.569 34.8174C129.639 32.7466 132.448 31.5833 135.376 31.5833ZM89.0013 44.8333C100.715 44.8333 111.949 49.4866 120.232 57.7694C128.515 66.0523 133.168 77.2863 133.168 89C133.168 100.714 128.515 111.948 120.232 120.231C111.949 128.513 100.715 133.167 89.0013 133.167C77.2876 133.167 66.0536 128.513 57.7708 120.231C49.4879 111.948 44.8346 100.714 44.8346 89C44.8346 77.2863 49.4879 66.0523 57.7708 57.7694C66.0536 49.4866 77.2876 44.8333 89.0013 44.8333M89.0013 62.5C81.9731 62.5 75.2327 65.2919 70.263 70.2617C65.2933 75.2314 62.5013 81.9718 62.5013 89C62.5013 96.0282 65.2933 102.769 70.263 107.738C75.2327 112.708 81.9731 115.5 89.0013 115.5C96.0295 115.5 102.77 112.708 107.74 107.738C112.709 102.769 115.501 96.0282 115.501 89C115.501 81.9718 112.709 75.2314 107.74 70.2617C102.77 65.2919 96.0295 62.5 89.0013 62.5Z"
                            fill="white" />
                    </svg>
                </a>
                <!-- Facebook -->
                <a class=" opacity-75 hover:opacity-100 transition-all duration-150"
                    href="https://www.facebook.com/koldfestival">
                    <svg width="100" height="100" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M170.915 85.5C170.915 38.35 132.649 0.0833435 85.4987 0.0833435C38.3487 0.0833435 0.0820312 38.35 0.0820312 85.5C0.0820312 126.842 29.4654 161.265 68.4154 169.208V111.125H51.332V85.5H68.4154V64.1458C68.4154 47.6604 81.8258 34.25 98.3112 34.25H119.665V59.875H102.582C97.8841 59.875 94.0404 63.7188 94.0404 68.4167V85.5H119.665V111.125H94.0404V170.49C137.176 166.219 170.915 129.831 170.915 85.5Z"
                            fill="white" />
                    </svg>
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.hero-logo {
    @apply opacity-5;
    animation: hero-logo 120s infinite linear;
}

@keyframes hero-logo {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.hero {
    @apply h-96 w-full;
}

* {
    @apply text-white;
}

#page-about {
    @apply h-full w-full;
}

.socialIcons {
    @apply flex justify-center items-center space-x-8;
}
</style>