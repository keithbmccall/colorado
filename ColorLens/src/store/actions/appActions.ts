export const BEGIN_LOADING = "BEGIN_LOADING"
export const END_LOADING = "END_LOADING"


type BeginLoadingType = {
    type: typeof BEGIN_LOADING
}
type EndLoadingType = {
    type: typeof END_LOADING
}

export type AppTypes = BeginLoadingType | EndLoadingType