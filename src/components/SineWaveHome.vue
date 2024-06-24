<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 50"
    class="sine-wave"
    preserveAspectRatio="none"
    transform="scale(-1, 1)"
    x="-1440"
  >
    <!-- Define a filter for the hand-drawn effect -->
    <defs>
      <filter id="roughen">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05"
          numOctaves="2"
          result="noise"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
      </filter>
    </defs>

    <!-- Main sine wave path with slight random deviations -->
    <path
      fill="#394955"
      fill-opacity="1"
      filter="url(#roughen)"
      d="M0,0L50,12C100,25,200,35,300,40C400,50,500,35,600,30C700,25,800,15,900,20C1000,25,1100,30,1200,25C1300,20,1400,30,1450,35L1500,40L1500,50L1450,50C1400,50,1300,50,1200,50C1100,50,1000,50,900,50C800,50,700,50,600,50C500,50,400,50,300,50C200,50,100,50,50,50L0,50Z"
    ></path>

    <!-- Second line on top with tapered ends and slight random deviations -->
    <path
      fill="none"
      stroke="#fff"
      stroke-width="2"
      filter="url(#roughen)"
      d="M0,0 L50,12 C100,25,200,35,300,40 C400,50,500,35,600,30 C700,25,800,15,900,20 C1000,25,1100,30,1200,25 C1300,20,1400,30,1450,35 L1500,40"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "SineWaveHome",
};
</script>

<style scoped>
.sine-wave {
  width: 100%;
  height: auto;
  margin-bottom: -10px; /* Adjust margin to remove the thin line */
}
</style>
