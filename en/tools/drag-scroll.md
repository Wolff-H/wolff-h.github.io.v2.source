<script setup>
    import ShowcaseBasicUsage from "/showcases/drag-scroll/basic-usage.vue"
    import ShowcaseSeparateElementAndContainer from "/showcases/drag-scroll/separate-element-and-container.vue"
    import ShowcaseLockXAxis from "/showcases/drag-scroll/lock-x-axis.vue"
    import ShowcaseLockYAxis from "/showcases/drag-scroll/lock-y-axis.vue"
</script>



# drag-scroll
<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/drag-scroll/blob/master/README.md"
    github="https://github.com/Wolff-H/drag-scroll"
    npm="https://npmjs.com/package/@wolff-h/drag-scroll"
/>

## Basic usage

The most common, basic usage of drag-scroll.  
Drag the image below to scroll its parent container.

<ShowcaseBasicUsage />

## Separate element and container

It's not necessary to make corresponding scrollable container exactly the draggable element's parent.  
For the example below, use the grey "touchpad" to scroll the container.

<ShowcaseSeparateElementAndContainer />

## Movement

### Lock axis
Dragscroll behavior will only take place on x-axis, y-axis, or both.

**Lock x-axis**

Dragscroll behavior will only take place on x-axis.

<ShowcaseLockXAxis />

**Lock y-axis**

Dragscroll behavior will only take place on y-axis.

<ShowcaseLockYAxis />

### Reverse scroll direction
hello
### Swap controls
hello
### Constrained dragscroll
hello
### Sensitivity
hello