<script setup>
    import ShowcaseBasicUsage from "/showcases/handled-resizable/basic-usage.vue"
    import ShowcaseLockAxis from "/showcases/handled-resizable/lock-axis.vue"
    import ShowcaseDirections from "/showcases/handled-resizable/directions.vue"
    import ShowcaseModifyState from "/showcases/handled-resizable/modify-state.vue"
</script>



# handled-resizable
<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/handled-resizable/blob/master/README.md"
    github="https://github.com/Wolff-H/handled-resizable"
    npm="https://npmjs.com/package/handled-resizable"
/>

## Basic usage

Basic usage. Doubleclick the resizer to reset block size.

<ShowcaseBasicUsage />

## Movement

### Lock axis

Resizable behavior will only take place on one certain axis.

<ShowcaseLockAxis />

### Directions

Resizable along different directions.

<ShowcaseDirections />

## Modify state

Update, disable or destroy resizables.

<ShowcaseModifyState />