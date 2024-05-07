const initState = {
    themeId: 1,
}

export type InitialStateType = typeof initState;

export const themeReducer = (
  state: InitialStateType = initState,
  action: SetThemeIdType
): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

type SetThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): SetThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
