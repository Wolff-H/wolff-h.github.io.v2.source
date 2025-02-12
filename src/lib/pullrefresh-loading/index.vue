<template lang="pug">
.pull-refresh(
    ref="_ref"
)
    .scroll-container(
        ref="ref_scroll_container"
        @touchmove="onTouchmove"
        @touchend="onTouchend"
    )
        slot(name="default")
    .refresh-indicator(
        :style="x_style_refresh_indicator"
        :class="x_class_refresh_indicator"
    )
        .icon-loading(size="24px" v-if="model")
            svg.loading-circular(viewBox="25 25 50 50")
                circle(cx="50" cy="50" r="20" :fill="props.color")
        IconRedo(size="24px" v-else)
</template>



<script setup lang="ts">
import {
    Redo as IconRedo,
} from "@icon-park/vue-next"



defineOptions({ name: 'pullrefresh-loading' })

const props = withDefaults(defineProps<{
    color?: string
}>(), {
    color: '#1890ff',
})

const _ref = ref<HTMLDivElement>()
const ref_scroll_container = ref<HTMLDivElement>()
const model = defineModel<boolean>()

const emits = defineEmits<{
    refresh: []
}>()

const x_style_refresh_indicator = computed(() => {
    const overscroll = overscroll_normalized.value
    return model.value ?
        {
            'translate': '0 80px',
            'transform': '',
            '--icon-opacity': '1',
        }
        :
        {
            'translate': `0 ${overscroll}px`,
            'transform': `rotate(${overscroll * 4 - 90}deg)`,
            '--icon-opacity': `${Math.min(80, overscroll) / 80}`,
        }
})

const x_class_refresh_indicator = computed(() => {
    return {
        'o-manual': overscroll_start_y.value !== undefined,
        'o-loading': model.value,
    }
})

const overscroll = ref(0)

const overscroll_normalized = computed(() => {
    return Math.min(120, overscroll.value)
})

const overscroll_start_y = ref<number>()

function onTouchmove(event: TouchEvent)
{
    if (model.value) return

    const dom_scrollable = ref_scroll_container.value!
    const newest_changed_touch = event.changedTouches[event.changedTouches.length - 1]
    const oy = overscroll_start_y.value

    if (oy === undefined && dom_scrollable.scrollTop === 0)
    {
        overscroll_start_y.value = newest_changed_touch.screenY
        // dom_scrollable.style.overflowY = 'hidden' // TODO 这行会导致移动端上容器无法滚动，但是本身又是有用的（实现连续过滚行为），后面再优化吧
    }

    if (oy !== undefined)
    {
        overscroll.value = Math.max(0, newest_changed_touch.screenY - oy)
        if (overscroll.value) dom_scrollable.style.overflowY = 'hidden'
    }

    if (oy !== undefined && overscroll.value === 0)
    {
        dom_scrollable.style.overflowY = 'auto'
    }
}

function onTouchend(event: TouchEvent)
{
    if (model.value) return

    if (!event.touches.length)
    {
        const dom_scrollable = ref_scroll_container.value!

        if (overscroll.value >= 80)
        {
            emits('refresh')
        }
        
        overscroll_start_y.value = undefined
        overscroll.value = 0
        dom_scrollable.style.overflowY = 'auto'
    }
}
</script>



<style lang="stylus">
@import _colorset
@import _patterns

.pull-refresh
    position relative
    overflow-y hidden
    >.scroll-container
        height 100%
        overflow auto
    >.refresh-indicator
        display flex
        position absolute
        left calc(50% - 20px)
        width 40px
        height 40px
        align-items center
        justify-content center
        background-color white
        border-radius 50%
        top -40px
        color $primary
        box-shadow 0px 0px 4px 0px rgba(0, 0, 0, 0.15)
        margin-top -4px // 这个偏移防止指示器收起时元素阴影漏在外面
        pointer-events none
        will-change translate
        .i-icon
            opacity var(--icon-opacity)
        &:not(.o-manual)
            transition translate 0.5s
        .icon-loading
            animation pullrefresh-rotate 2s linear infinite

@keyframes pullrefresh-rotate
    from
        transform rotate(0deg)
    to
        transform rotate(360deg)
</style>
