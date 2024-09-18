export const addCriptoToFavorite = (idCripto) => {
    let idListCriptos = JSON.parse(localStorage.getItem('favoriteCriptos')) || [];
    if (!idListCriptos.includes(idCripto)) {
        idListCriptos.push(idCripto);
        localStorage.setItem('favoriteCriptos', JSON.stringify(idListCriptos));
    }
}

export const checkFavoriteCripto = (idCripto) => {
    let idListCriptos = JSON.parse(localStorage.getItem('favoriteCriptos')) || [];
    const isfavorite = idListCriptos.includes(idCripto);
    return isfavorite;
}

export const deleteFavoriteCripto = (idCripto) => {
    let idListCriptos = JSON.parse(localStorage.getItem('favoriteCriptos')) || [];
    const resultList = idListCriptos.filter((id) => id !== idCripto);
    localStorage.setItem('favoriteCriptos', JSON.stringify(resultList));
}