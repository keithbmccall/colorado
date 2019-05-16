type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string,
    isSelected?: boolean
}
type AnimatedView = {
    key: string,
    starting: number,
    ending: number
}

export type CommonImageType = Image
export type AnimatedViewType = AnimatedView