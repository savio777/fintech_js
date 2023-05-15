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
