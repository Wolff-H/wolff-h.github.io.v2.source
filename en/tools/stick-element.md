<script setup>
    import ShowcaseBasicUsage from "/showcases/stick-element/basic-usage.vue"
    import ShowcaseCrossLevelSticky from "/showcases/stick-element/cross-level-sticky.vue"
</script>



# stick-element
<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/stick-element/blob/master/README.md"
    github="https://github.com/Wolff-H/stick-element"
    npm="https://npmjs.com/package/stick-element"
/>

## Basic usage

Make elements sticky just like native css sticky.

<ShowcaseBasicUsage />

## Cross-level sticky

Element can be sticky to any container, not only its direct parent.

For the example below, cells are not the direct children of the container element, whereas they still remain sticky.

<ShowcaseCrossLevelSticky />
