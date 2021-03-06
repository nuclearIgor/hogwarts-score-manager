export const addPoints = (value, house) =>({
    type: `@${house}/ADD`,
    value
})

export const removePoints = (value, house) => ({
    type:`@${house}/REMOVE`,
    value
})
