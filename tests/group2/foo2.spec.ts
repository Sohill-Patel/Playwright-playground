// import { test, expect } from '@playwright/test';
import test, { expect } from '../../fixture/testFixture';
import * as yup from "yup"
import moment from 'moment';
import { string } from 'yup/lib/locale';
 
test('basic test 2', async ({ page, pName}) => {
  console.log(pName);

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('Validate string schema', async ({ page, pName}) => {
  const contactSchema = yup.object().shape({
    name: yup.string()
      .required() as yup.StringSchema<string>,
  }).noUnknown();
  
  const isValid = await contactSchema.isValid({
    name: "Test",
    status: "fail it"
  }, {strict: true});
  expect(isValid, "Schema does not match").toBeTruthy();
  console.log(isValid);

});

test('Validate Date schema', async () => {


  const res = moment("10-10-1994", "YYYY-MM-DD", true).isValid();
  console.log(res);


});

test.only('Validate Address schema', async ({ }) => {
  // function ParseDateString(format: string, originalValue) {
  //   return isDate(originalValue)
  //     ? originalValue
  //     : parse(originalValue, format, new Date());
    
  // }

  

  

  const UpdateUserSchema = yup.object().shape({
    first_names: yup.string().defined().required() as yup.StringSchema<string>,
    date: yup.string().defined().required().test( value => 
      moment(value, "YYYY-MM-DD", true).isValid()
    ) as yup.StringSchema<string>,
    // date: StringToDate,
    address: yup.object().shape({
      line_1: yup.string().defined().required() as yup.StringSchema<string>,
      line_2: yup.string().defined().optional() as yup.StringSchema<string>,
      city: yup.string().defined().required() as yup.StringSchema<string>,
      postal_code: yup.string().defined().required() as yup.StringSchema<string>,
      country: yup.string().defined().required() as yup.StringSchema<string>,
    }).noUnknown()
  }).noUnknown();

  const isValid = await UpdateUserSchema.validate({
    first_names: "Test",
    date: "1994-01-31",
    address: {
      line_1: "Trafalgar Square",
      line_2: "",
      city: "London",
      postal_code: "WC2N 5DU",
      country: "GB",
    }
  }, {strict: true});

});