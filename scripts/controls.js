export function controls(){
  function getMinutes(){
    let NewMinutes = prompt('Digite o tempo em minutos')
      if(!NewMinutes){
          return false
      }
      return NewMinutes
  }
  
  return{
    getMinutes,
  }
}