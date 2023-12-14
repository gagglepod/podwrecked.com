<template>
    <section class="the-block the-block--hero">
        <div class="container grid grid--1x1">
            <header class="the-block__header">
                <h2>A Dashboard for Creators</h2>
                <p>
                Create a safe place in Oncetold to build your unique show!
                </p>
            </header>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.the-block {
  padding: 2rem 0 0;
}

.the-block--hero {
  background: var(--color-tertiary);
  color: var(--color-headings);
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-light);
}

.the-block__header {
  text-align: center;
  margin-bottom: 1rem;
}
</style>