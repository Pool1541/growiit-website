export const createSlug = (str: string) => {
  const regex = /[^a-zA-Z0-9-áéíóúÁÉÍÓÚ-]/g;
  
  return str.replace(regex, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};