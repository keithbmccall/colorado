type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string,
    isSelected?:boolean
}

export type CommonImageType = Image