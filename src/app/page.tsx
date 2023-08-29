"use client";
import axios from "axios";
import Image from "next/image";
import CryptoJs from "crypto-js";

const serviceId = "ncp:sms:kr:308174329822:sms";
const clientId = "wxJvIWyUVtqnHUJUPUag";
const clientSecret = "1ve17LTDlT9VRMr26LjsrYdAxMcjrw602gl37Zqc";

const method = "POST";
const space = " ";
const newLine = "\n";
const url = `/sms/v2/services/${serviceId}/messages`;
const url2 = `/sms/v2/services/${serviceId}/messages`;
const date = Date.now().toString();

const hmac = CryptoJs.algo.HMAC.create(CryptoJs.algo.SHA256, clientSecret);
hmac.update(method);
hmac.update(space);
hmac.update(url2);
hmac.update(newLine);
hmac.update(date);
hmac.update(newLine);
hmac.update(clientId);
const hash = hmac.finalize();
const signature = hash.toString(CryptoJs.enc.Base64);
console.log(signature);
// 발신 번호와 수신 번호 설정
const fromNumber = "01057605533";
const toNumber = "01085891858";

// 발송할 메시지 내용

// SMS를 발송하는 함수
function sendSMS() {
  axios({
    method,
    url,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-ncp-apigw-timestamp": date,
      "x-ncp-iam-access-key": clientId,
      "x-ncp-apigw-signature-v2": signature,
    },
    data: {
      type: "SMS",
      contentType: "COMM",
      countryCode: "82",
      from: fromNumber,
      content: message,
      messages: [{ to: toNumber }],
    },
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// SMS 발송 함수 호출

export default function Home() {
  // sendSMS();
  return (
    <div className='ly-content'>
      <div>
        <figure className='w-full'>
          <Image src='/img/main_1.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>조감도</h2>
        <figure className='w-full'>
          <Image src='/img/main_2.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <figure className='w-full'>
          <h2 className='title-2'>광역 조감도</h2>
          <Image src='/img/main_3.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>위치도</h2>
        <figure className='w-full'>
          <img src='/img/main_4.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>
      <div>
        <h2 className='title-2'>프리미엄</h2>
        <figure className='w-full'>
          <Image src='/img/img_etc_03.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/img_etc_01.jpg' alt='' width={1200} height={700} />
        </figure>
        <figure className='w-full'>
          <Image src='/img/img_etc_02.jpg' alt='' width={1200} height={700} />
        </figure>
      </div>

      <p className='msg-type-1'>
        ※상기 이미지는 예정사항이며, 인허가 과정에서 변경될 수 있습니다.
      </p>
    </div>
  );
}
