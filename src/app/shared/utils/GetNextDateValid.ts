/**
 * Valida la siguiente fecha valida del campo Fecha de salida
 * según la fecha seleccionada en el campo Fecha ingreso
 * @param currentDate Fecha actual
 * @param fromDate Fecha inicial
 * @param minDate mínima fecha incial
 * @returns
 */
export const getNextDate = (
  currentDate: Date,
  fromDate: string,
  minDate: string
) => {
  if (fromDate === minDate) {
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toISOString().split('T')[0];
  } else {
    const auxDate = fromDate !== '' ? new Date(fromDate) : currentDate;
    auxDate.setDate(auxDate.getDate() + 1);
    return auxDate.toISOString().split('T')[0];
  }
};
