export const formatNumberToMoney = (numberToFormat: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return formatter.format(numberToFormat)
}