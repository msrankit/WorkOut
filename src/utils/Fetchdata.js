 export const Exercisesoptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6668cf03famsheebe9848a778253p1a3e7bjsne36574c4f631',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const Youtubeoptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6668cf03famsheebe9848a778253p1a3e7bjsne36574c4f631',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  
}


export const Fetchdata = async(url,option) =>{
    const response = await fetch(url,option);
    const data = await response.json()

    return data
}