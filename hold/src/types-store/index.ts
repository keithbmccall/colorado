type Palette = {
    id:number,
    swatches: Array<object>
}
type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string,
    isSelected?: boolean,
    id?: number,
    palette?: Palette | any
}
type AnimatedView = {
    key: string,
    starting: number,
    ending: number
}
export type SwatchPalette = Palette
export type CommonImageType = Image
export type AnimatedViewType = AnimatedView