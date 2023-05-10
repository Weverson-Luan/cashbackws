/**
 * IMPORTS
 */
import { format } from 'date-fns-tz';

const handleDateFormatting = (
  date: Date,
  substringNumberLeft?: number,
  substringNumberRight?: number
) => {
  if (substringNumberLeft || substringNumberRight) {
    const dataFormatted = String(
      format(date, 'dd/MM/yyyy HH:mm', {
        timeZone: 'America/Sao_Paulo',
      })
    ).substring(
      substringNumberLeft ? substringNumberLeft : 0,
      substringNumberRight
    );

    return dataFormatted;
  } else {
    const dataFormatted = String(
      format(date, 'dd/MM/yyyy HH:mm', {
        timeZone: 'America/Sao_Paulo',
      })
    );

    return dataFormatted;
  }
};

const handleDateAmericano = (date: Date) => {
  const dataFormatted = String(
    format(date, 'yyyy/MM/dd HH:mm', {
      timeZone: 'America/Sao_Paulo',
    })
  );

  return dataFormatted;
};

/**
 * EXPORTS
 */
export { handleDateFormatting, handleDateAmericano };
