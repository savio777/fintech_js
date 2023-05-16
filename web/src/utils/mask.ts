export const maskPattern = (valueString = "", patternString = "") => {
  let i = 0;

  return patternString.replace(/#/g, () => valueString[i++] || "");
};

export const maskCpf = (cpf: string) =>
  cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d)/, "$1");

export const formatPrice = (price?: number): string => {
  if (!price) {
    return "";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(price)
    .replace(/([R$])(\d)/, "$1 $2");
};
