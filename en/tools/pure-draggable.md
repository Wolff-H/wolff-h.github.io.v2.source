<script setup>
    import ShowcaseBasicUsage from "/showcases/pure-draggable/basic-usage.vue"
    import ShowcaseHandlesAndAvoidance from "/showcases/pure-draggable/handles-and-avoidance.vue"
    import ShowcaseEventHooks from "/showcases/pure-draggable/event-hooks.vue"
</script>



# pure-draggable
<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/pure-draggable/blob/master/README.md"
    github="https://github.com/Wolff-H/pure-draggable"
    npm="https://npmjs.com/package/pure-draggable"
/>

## Basic usage

Try drag the div all around.

<ShowcaseBasicUsage />

## Handles and avoidance

While have the drag handles specified, the objective will be draggable only when cursor starts at handles.  
While have the drag avoidance specified, the objective will not be draggable if cursor starts at avoidance.

<ShowcaseHandlesAndAvoidance />

## Drag event hooks

You may set custom callback functions on different stages of the drag action.

Those events are:

- `dragStart` calls on `mousedown`.
- `drag` calls on `mousemove`.
- `dragEnd` calls on `mouseup`.

> For all the stages above, return `false` in your callback to prevent the default behavior of that stage.

<ShowcaseEventHooks />
