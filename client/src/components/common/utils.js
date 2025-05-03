export const formatDate = (date) => {
    if (!date) return "";

    const dt = new Date(date)
    const year = dt.getFullYear()
    const month = `${dt.getMonth() + 1}`.padStart(2, "0")
    const day = `${dt.getDate()}`.padStart(2, "0")

    return `${year}-${month}-${day}`
}