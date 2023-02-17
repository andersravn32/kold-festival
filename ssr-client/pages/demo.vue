<template>
  <section id="demo">
    <BlockHero
      :data="{
        countdown: 2675332000000,
        bg: {
          src: 'https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bg-video.mp4',
        },
        logo: {
          src: 'https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/logo.svg',
          alt: 'KOLD Logo',
          spin: true,
        },
        title: {
            html: `<span>KOLD</span><span>Festival</span>` 
        },
      }"
    />
  </section>
</template>
