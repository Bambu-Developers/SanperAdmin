import { createNumberMask } from 'text-mask-addons';

export const CURRENCY_MASK = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  allowDecimal: true,
  decimalLimit: 2,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
  integerLimit: 4
});

export const NUMBER_MASK = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: false,
  decimalLimit: 0,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
  integerLimit: 4
});

export const PERCENTAGE_MASK = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: true,
  decimalLimit: 2,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
  integerLimit: 2
});

export const PHONE_MASK = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: false,
  decimalLimit: 0,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
  integerLimit: 10
});
