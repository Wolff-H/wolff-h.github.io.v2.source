<script setup>
    import ShowcaseBasicUsage from "/showcases/drag-scroll/basic-usage.vue"
    import ShowcaseSeparateElementAndContainer from "/showcases/drag-scroll/separate-element-and-container.vue"
    import ShowcaseLockAxis from "/showcases/drag-scroll/lock-axis.vue"
    import ShowcaseReverseScrollDirection from "/showcases/drag-scroll/reverse-scroll-direction.vue"
    import ShowcaseSwapControls from "/showcases/drag-scroll/swap-controls.vue"
    import ShowcaseConstrained from "/showcases/drag-scroll/constrained.vue"
    import ShowcaseSensitivity from "/showcases/drag-scroll/sensitivity.vue"
    import ShowcaseModifyState from "/showcases/drag-scroll/modify-state.vue"
    import ShowcaseAvoidance from "/showcases/drag-scroll/avoidance.vue"
    import ShowcaseExampleTable from "/showcases/drag-scroll/example-table.vue"
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

With option `movement`, you can define how the dragscroll movement will be.

### Lock axis
Dragscroll behavior will only take place on x-axis, y-axis, or both (will not scroll at all).

<ShowcaseLockAxis />

### Reverse scroll direction

Reverse scroll direction along x-axis, y-axis, or both.

<ShowcaseReverseScrollDirection />

### Swap controls

Horizontal drag will effect vertical scroll, and vice versa.

<ShowcaseSwapControls />

### Constrained

Dragscroll can only happen when cursor is inside the scrollable container.

<ShowcaseConstrained />

### Sensitivity

To accurately define dragscroll's sensitivity, scale the ratio of `drag_trigger_threshold` to `scroll_respond_vector`.

<ShowcaseSensitivity />

## Modify state

Update, disable or destroy an existing dragscroll.

<ShowcaseModifyState />

## Avoidance

Dragscroll won't take effect on those elements assigned as avoids.

For the example below, order number divs are avoided.

<ShowcaseAvoidance />

## Example - A dragscrollable sticky table

Drag the table head to scroll table horizontally.  
Drag the first column to scroll table vertically.  

> The sticky capability is carried by [stick-element](/en/tools/stick-element).

<ShowcaseExampleTable />