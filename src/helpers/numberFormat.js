export const formatNumber = (number, decimals) => {
    const result = new Intl.NumberFormat('en-US', 
        { 
            style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'
        })
        .format(number)
    return result 
  }