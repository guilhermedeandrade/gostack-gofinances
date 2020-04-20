export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat('pt-BR').format(date);
};
