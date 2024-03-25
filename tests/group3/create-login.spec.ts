// global-setup.ts
import { test, request, APIResponse, expect } from '@playwright/test';

interface Email{
  id: number,
  subject: string,
  from_email: string,
  to_email: string
  created_at: string
}
const twoMinites = 120000;

test("API Test", async ({ }) => {
  
  const requestContext = await request.newContext();
  const resp = await requestContext.get('https://mailtrap.io//api/v1/inboxes/731845/messages', {
    params: {
      "api_token": "781421ff0d0c912ea47ae81584859c7a"
    },
  });

  expect(resp.status()).toEqual(200);

  const buff = await resp.body();
  //Get buffer content and parse as JSON
  let emailArr: Email[] = JSON.parse(buff.toString());

  const startTime = Date.now() - twoMinites;
  let emailId: Email[] = emailArr.filter(email => {
    const createTime = new Date(email.created_at).getTime();
    return createTime > startTime
  })
    console.log(emailId); 
  const msgId = 2659289167; // Ideally take from emailId
  const url = `https://mailtrap.io//api/v1/inboxes/731845/messages/${msgId}/body.txt`; 
  console.log(url)
  const msgResp: APIResponse = await requestContext.get(url, {
    params: {
      "api_token": "781421ff0d0c912ea47ae81584859c7a"
    },
  });

  expect(msgResp.status()).toEqual(200);
  const buff2 = await msgResp.body();
  console.log(buff2.toString());
  //Get buffer content and parse as JSON
  console.log(JSON.parse(buff2.toString()));

});
