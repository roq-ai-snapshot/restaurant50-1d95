import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  menu_item_id: yup.string().nullable().required(),
});
