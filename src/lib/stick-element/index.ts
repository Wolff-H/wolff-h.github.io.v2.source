/*
    1.
        “相对于 = 容器”的时候

        所有sticky行为仅以元素的容器《全新未滚动》状态为基准，否则（以一个已经滚动了的容器作初始化）情况会非常复杂
        也不一定，可以减去初始化时的容器当前滚动量。
    2.
        如果要利用到所有top、bottom、left、right四个方向的限制值的话，情况会复杂很多，但是会额外实现一种“捕获”的行为特性。
*/

/**********************************************************************************************************************/

interface Limits
{
    relative_to: 'self'|'container'
    top?: number
    bottom?: number
    left?: number
    right?: number
}

interface Options
{
    destroy: boolean
    override: boolean
}

interface StickElementData
{
    tool_name: string
    description: string
    container_to_container_data_map: ContainerToContainerDataMap
}

type ContainerToContainerDataMap = WeakMap<HTMLElement, ContainerData>

type ContainerData = StickerData[]

interface StickerData
{
    sticker: HTMLElement
    sticker_original_top: number
    sticker_original_left: number
    sticker_original_away_top: number
    sticker_original_away_left: number
    limits: Limits
}



/**
 * 如果要规定在一个方向上粘滞，则必须显式规定粘滞物在该方向上的宽/高，否则可能发生，在粘滞物运动出在正方向与容器的边距后，发生形变。
 * @param container 容器。
 * @param sticker 粘滞物。
 * @param limits 限制规格。
 * @param options 选项。
 */
function stickElement(
    container: HTMLElement,
    sticker: HTMLElement|null,
    limits:
    {
        relative_to?: 'self'|'container',
        top?: number,
        left?: number,
    } = {},
    options:
    {
        destroy?: boolean,
        override?: boolean,
    } = {},
)
{
    // defaults --------------------------------------------------------------------------------------------------------
    const default_limits: Limits =
    {
        relative_to: 'container',
    }

    const default_options: Options =
    {
        destroy: false,
        override: false,
    }

    if(!window.__StickElement)
    {
        window.__StickElement =
        {
            tool_name: 'stick-element',
            description: 'Make element sticky like.',
            container_to_container_data_map: new WeakMap(),
        } as StickElementData
    }

    const map: ContainerToContainerDataMap = window.__StickElement.container_to_container_data_map

    // composed params -------------------------------------------------------------------------------------------------
    const _limits = Object.assign({}, default_limits, limits)
    const _options = Object.assign({}, default_options, options)

    // take one desired action -----------------------------------------------------------------------------------------
    // #1. destroy - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // remove whole record //
    if(sticker === null)
    {
        if(map.has(container))
        {
            map.delete(container)

            container.removeEventListener('scroll', scroll)
        }

        return
    }

    // remove target sticker //
    if(_options.destroy)
    {
        const container_data = map.get(container)

        if(container_data)
        {
            const target_sticker_data_index = container_data.findIndex((sticker_data) => {
                return sticker_data.sticker === sticker
            })

            if(target_sticker_data_index >= 0)
            {
                container_data.splice(target_sticker_data_index, 1)
            }
        }
    }

    // #2. create - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    if(!map.has(container))
    {
        map.set(
            container,
            [
                {
                    sticker: sticker,
                    sticker_original_top: parseInt(getComputedStyle(sticker).top, 10),
                    sticker_original_left: parseInt(getComputedStyle(sticker).left, 10),
                    sticker_original_away_top: sticker.getBoundingClientRect().y - container.getBoundingClientRect().y,
                    sticker_original_away_left: sticker.getBoundingClientRect().x - container.getBoundingClientRect().x,
                    limits: _limits,
                },
            ],
        )

        container.addEventListener('scroll', scroll)
    }
    // #3. update - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    else
    {
        // override whole container_data to only contain target sticker_data //
        if(_options.override)
        {
            map.set(
                container,
                [
                    {
                        sticker: sticker,
                        sticker_original_top: parseInt(getComputedStyle(sticker).top, 10),
                        sticker_original_left: parseInt(getComputedStyle(sticker).left, 10),
                        sticker_original_away_top: sticker.getBoundingClientRect().y - container.getBoundingClientRect().y,
                        sticker_original_away_left: sticker.getBoundingClientRect().x - container.getBoundingClientRect().x,
                        limits: _limits,
                    },
                ],
            )
        }
        // update target sticker_data in container_data //
        else if(map.has(container))
        {
            const container_data = map.get(container)

            if(container_data)
            {
                const target_sticker_data_index = container_data.findIndex((sticker_data) => {
                    return sticker_data.sticker === sticker
                })

                const target_sticker_data = container_data[target_sticker_data_index]

                if(target_sticker_data)
                {
                    console.log('update: update existed one');
                    container_data[target_sticker_data_index] =
                    {
                        sticker: sticker,
                        sticker_original_top: parseInt(getComputedStyle(sticker).top, 10),
                        sticker_original_left: parseInt(getComputedStyle(sticker).left, 10),
                        sticker_original_away_top: sticker.getBoundingClientRect().y - container.getBoundingClientRect().y,
                        sticker_original_away_left: sticker.getBoundingClientRect().x - container.getBoundingClientRect().x,
                        limits: _limits,
                    }
                }
                // add the passed sticker_data as a new one to container_data //
                else
                {
                    console.log('update: add as new one');
                    const container_data = map.get(container)

                    if(container_data)
                    {
                        container_data.push(
                            {
                                sticker: sticker,
                                sticker_original_top: parseInt(getComputedStyle(sticker).top, 10),
                                sticker_original_left: parseInt(getComputedStyle(sticker).left, 10),
                                sticker_original_away_top: sticker.getBoundingClientRect().y - container.getBoundingClientRect().y,
                                sticker_original_away_left: sticker.getBoundingClientRect().x - container.getBoundingClientRect().x,
                                limits: _limits,
                            }
                        )
                    }
                }
            }
        }
    }
}

function scroll(event: Event)
{
    const container = event.target as HTMLElement
    const map: ContainerToContainerDataMap = window.__StickElement.container_to_container_data_map
    const container_data = map.get(container)!

    let i = container_data.length

    while(i--)
    {
        const sticker_data = container_data[i]
        const { sticker } = sticker_data

        if(sticker)
        {
            // 相对于 = 自己 //
            if(sticker_data.limits.relative_to === 'self')
            {
                // 当容器滚出指定量，对粘滞物施加同向的滚动量差 //
                // y 方向 //
                if(sticker_data.limits.top !== undefined)
                {
                    if(container.scrollTop >= sticker_data.limits.top)
                    {
                        sticker.style.top =
                            sticker_data.sticker_original_top +
                            (container.scrollTop - sticker_data.limits.top) +
                            'px'
                    }
                    else
                    {
                        sticker.style.top = sticker_data.sticker_original_top + 'px'
                    }
                }
    
                // x方向 //
                if(sticker_data.limits.left !== undefined)
                {
                    if(container.scrollLeft >= sticker_data.limits.left)
                    {
                        sticker.style.left =
                            sticker_data.sticker_original_left +
                            (container.scrollLeft - sticker_data.limits.left) +
                            'px'
                    }
                    else
                    {
                        sticker.style.left = sticker_data.sticker_original_left + 'px'
                    }
                }
            }
            // 相对于 = 容器 //
            else
            {
                // 当边距超出指定量，对粘滞物施加同向的滚动量差 //
                // y方向 //
                if(sticker_data.limits.top !== undefined)
                {
                    if(container.scrollTop >= (sticker_data.sticker_original_away_top - sticker_data.limits.top))
                    {
                        sticker.style.top =
                            sticker_data.sticker_original_top +
                            (container.scrollTop - (sticker_data.sticker_original_away_top - sticker_data.limits.top)) +
                            'px'
                    }
                    else
                    {
                        sticker.style.top = sticker_data.sticker_original_top + 'px'
                    }
                }
    
                // x方向 //
                if(sticker_data.limits.left !== undefined)
                {
                    if(container.scrollLeft >= (sticker_data.sticker_original_away_left - sticker_data.limits.left))
                    {
                        sticker.style.left =
                            sticker_data.sticker_original_left +
                            (container.scrollLeft - (sticker_data.sticker_original_away_left - sticker_data.limits.left)) +
                            'px'
                    }
                    else
                    {
                        sticker.style.left = sticker_data.sticker_original_left + 'px'
                    }
                }
            }
        }
        else
        {
            // 在这里清理掉失效的scrollable_data（其dom元素被销毁了）
            container_data.splice(i, 1)
        }
    }
}

/**********************************************************************************************************************/

export default stickElement