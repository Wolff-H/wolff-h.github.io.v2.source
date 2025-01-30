<script setup>
    import ShowcaseBasicUsage from "/showcases/drag-scroll/basic-usage.vue"
    import ShowcaseSeparateElementAndContainer from "/showcases/drag-scroll/separate-element-and-container.vue"
    import ShowcaseLockAxis from "/showcases/drag-scroll/lock-axis.vue"
    import ShowcaseReverseScrollDirection from "/showcases/drag-scroll/reverse-scroll-direction.vue"
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
Dragscroll behavior will only take place on x-axis, y-axis, or both (will not scroll at all).

<ShowcaseLockAxis />

### Reverse scroll direction

Reverse scroll direction along x-axis, y-axis, or both.

<ShowcaseReverseScrollDirection />

### Swap controls

Horizontal drag will effect vertical scroll, and vice versa.

### Constrained dragscroll
hello
### Sensitivity
hello