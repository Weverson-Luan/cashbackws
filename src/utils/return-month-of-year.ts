/**
 * IMPORTS
 */

export const handleReturnMonthOfYear = (expr: number) => {
    switch (expr) {
        case 1:
            return 'Janeiro';
        case 2:
            return 'Feveireiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
        default:
            return 'Mês inexistente'
    }
};
