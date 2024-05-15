export function heroMatchedRanked(level) {
  let ranked = ''

  switch (true) {
    case level < 1000:
      ranked = 'Ferro'
      break
    case level >= 1001 && level <= 2000:
      ranked = 'Bronze'
      break
    case level >= 2001 && level <= 5000:
      ranked = 'Prata'
      break
    case level >= 5001 && level <= 7000:
      ranked = 'Ouro'
      break
    case level >= 7001 && level <= 8000:
      ranked = 'Platina'
      break
    case level >= 8001 && level <= 9000:
      ranked = 'Ascendente'
      break
    case level >= 9001 && level <= 10000:
      ranked = 'Imortal'
      break
    case level >= 10001:
      ranked = 'Radiante'
      break
    default:
      ranked = 'Patente não encontrada, você provavelmente é o Final Boss!!!'
  }

  return ranked
}
