<script setup>
    import ShowcaseBasicUsage from "/showcases/vivid-calendar/basic-usage.vue"
    import ShowcaseWithSlot from "/showcases/vivid-calendar/with-slot.vue"
</script>



# vivid-calendar

<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/vivid-calendar/blob/master/README.md"
    github="https://github.com/Wolff-H/vivid-calendar"
    npm="https://npmjs.com/package/vivid-calendar"
/>

A vivid mobile calendar.

**ATTENTION: It's a mobile component, so try it out on phone or in mobile mode!**

## Basic usage

Just the month view if you don't use the slot.

<ShowcaseBasicUsage />

## With slot used

With the slot used, calendar provides full gesture interactions and animations. (since you need to scroll the calendar view to change between month view and week view)

<ShowcaseWithSlot />