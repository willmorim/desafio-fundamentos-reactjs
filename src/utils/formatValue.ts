const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BLR' }).format(
    value,
  );

export default formatValue;
