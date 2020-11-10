export const fuelOptions = [
  {
    value: "",
    text: "Não definido"
  },
  {
    value: "alcool",
    text: "Álcool"
  },
  {
    value: "gasoline",
    text: "Gasolina"
  },
  {
    value: "diesel",
    text: "Diesel"
  },
  {
    value: "flex",
    text: "Flex"
  },
]


export const getOptionText = (value: string): string => {
  const text = fuelOptions.filter(option => option.value === value)[0].text
  return (text) ? text : 'Desconhecido'
}