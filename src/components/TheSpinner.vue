<template>
  <div class="spin"></div>
</template>

<style>
.spin {
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 3rem auto;
    border: .5rem solid transparent;
    border-radius: 50%;
    border-top-color: var(--color-primary-alt);
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to { transform: rotateZ(360deg) }
}
</style>