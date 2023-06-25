import * as yup from 'yup';

export const tableStatusValidationSchema = yup.object().shape({
  status: yup.string().required(),
  table_number: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
