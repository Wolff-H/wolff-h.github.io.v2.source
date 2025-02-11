import dayjs from "dayjs"



export function computeMonthMatrix(year: number, month: number)
{
    const moment_first_day_of_the_month = dayjs({ year: year, month: month - 1, day: 1 })
    const moment_last_day_of_last_month = moment_first_day_of_the_month.subtract(1, 'day')

    const weekday_of_first_day_of_the_month = moment_first_day_of_the_month.day()
    const last_day_of_last_month = moment_last_day_of_last_month.date()

    const days_in_month = dayjs({ year: year, month: month - 1 }).daysInMonth()
    const offset_beginning = weekday_of_first_day_of_the_month === 0 ? 6 : weekday_of_first_day_of_the_month - 1

    return {
        padding_start: Array.from(_.range(last_day_of_last_month - offset_beginning + 1, last_day_of_last_month + 1)),
        in_month: Array.from(_.range(1, month && dayjs([year, month - 1]).daysInMonth() + 1)),
        padding_end: Array.from(_.range(1, 42 - (offset_beginning + days_in_month) + 1)),
    }
}

export function composeMonthMatrix(matrix: ReturnType<typeof computeMonthMatrix>, conditions: {
    year: number
    month: number
    now: dayjs.Dayjs
    selected_date: dayjs.Dayjs
})
{
    /**
     * @todo
     * 综合节假日、全月计划等信息。
     */

    const { year, month, now, selected_date } = conditions
    const [now_year, now_month, now_day] = [now.year(), now.month() + 1, now.date()]
    const [selected_year, selected_month, selected_day] = [selected_date.year(), selected_date.month() + 1, selected_date.date()]

    return [
        ...matrix.padding_start.map((day) => ({
            day: day,
            classes: ['padding-start'],
            ymd: [year, month - 1, day].join(','),
        })),
        ...matrix.in_month.map((day) => ({
            day: day,
            classes:
            [
                'in-the-month',
                (year === now_year && month === now_month && day === now_day) && 'o-today',
                (year === selected_year && month === selected_month && day === selected_day) && 'o-selected',
            ],
            ymd: [year, month, day].join(','),
        })),
        ...matrix.padding_end.map((day) => ({
            day: day,
            classes: ['padding-end'],
            ymd: [year, month + 1, day].join(','),
        })),
    ]
}

export function composeMonthWeekSerie(matrix: ReturnType<typeof computeMonthMatrix>, conditions: {
    year: number
    month: number
    now: dayjs.Dayjs
    selected_date: dayjs.Dayjs
})
{
    /**
     * @todo
     * 综合节假日、全月计划等信息。
     */

    const { year, month, now, selected_date } = conditions
    const [now_year, now_month, now_day] = [now.year(), now.month() + 1, now.date()]
    const [selected_year, selected_month, selected_day] = [selected_date.year(), selected_date.month() + 1, selected_date.date()]

    const days = [
        ...matrix.padding_start.map((day) => ({
            day: day,
            classes: ['padding-start'],
            ymd: [year, month - 1, day].join(','),
        })),
        ...matrix.in_month.map((day) => ({
            day: day,
            classes:
            [
                'in-the-month',
                (year === now_year && month === now_month && day === now_day) && 'o-today',
                (year === selected_year && month === selected_month && day === selected_day) && 'o-selected',
            ],
            ymd: [year, month, day].join(','),
        })),
        ...matrix.padding_end.map((day) => ({
            day: day,
            classes: ['padding-end'],
            ymd: [year, month + 1, day].join(','),
        })),
    ]

    const week_serie = _.range(6)
        .map((n) => {
            const [y, m, d] = days[n * 7].ymd.split(',').map(Number)
            const moment_week_start = dayjs([y, m - 1, d])
            
            return {
                week: moment_week_start.isoWeek(),
                weekdays: days.slice(n * 7, (n + 1) * 7),
                classes: [selected_date.isSame(moment_week_start, 'isoWeek') && 'o-selected'],
            }
        })
    
    return week_serie
}

/**
 * 向上搜索元素路径。
 * @param element 起点元素。搜索会包含该元素。
 * @param callback 回调函数。在经过每一个路点时检查。
 * @returns 在回调中返回任意非 undefined 值将终止搜索，且该返回值将作为整个搜索方法的返回值。默认返回 undefined。
 */
export function searchUpHTMLElement<T extends HTMLElement, C>(element: T, callback: (el: HTMLElement) => C)
{
    let searching_element: null | HTMLElement = element
    
    do
    {
        const result = callback(searching_element)

        if (result !== undefined) return result

        searching_element = searching_element.parentElement
    } while (searching_element)

    return undefined
}
