export const createSlug = (str: string) => {
  const regex = /[^a-zA-ZñÑ0-9-áéíóúÁÉÍÓÚ-]/g;
  
  return str
    .replace(regex, '')
    .replace(/ñ/g, 'n')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};