"use client";

import { useRef } from "react";
import { FormEvent } from "react";
import axios from "axios";
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

const fromNumber = "01085891858";
const toNumber = "01057605533";
let message = "";

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

export default function Customer() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const agreeCheckRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = nameRef?.current?.value;
    const phoneValue = phoneRef?.current?.value;
    const agreeCheckvalue = agreeCheckRef?.current?.checked;

    if (!agreeCheckvalue) {
      alert("개인정보수집 및 이용에 동의해주세요!");
    }

    message = `${nameValue}님께서 관심고객으로 등록하셨습니다. 전화번호는 ${phoneValue} 입니다.`;

    if (agreeCheckvalue) {
      sendSMS();
      alert("관심고객등록을 완료했습니다.");
    }
  };
  return (
    <div className='ly-content p-0107'>
      <h1 className='title-1'>관심고객등록</h1>
      <div>
        <p className='text-1'>
          관심고객 등록후
          <br />
          주택홍보관 방문시
          <br />
          사은품 증정!!
        </p>
        <p className='text-2'>관심고객등록</p>
        <p className='text-3'>
          "관심고객으로 등록하시면 관련정보를 안내해드립니다."
        </p>
        <form id='sms-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <label htmlFor='userName'>성명</label>
            <input
              type='text'
              ref={nameRef}
              id='userName'
              placeholder='이름을 입력해주세요'
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor='userPhoneNumber'>연락처</label>
            <input
              type='tel'
              required
              placeholder='전화번호는 숫자만 입력해주세요'
              id='userPhoneNumber'
              ref={phoneRef}
            />
          </div>
          <div className='form-row'>
            <input
              type='checkbox'
              ref={agreeCheckRef}
              id='agreeCheck'
              className='mr-2'
            />
            <label htmlFor='agreeCheck'>
              개인정보수집 및 이용에 동의합니다.
            </label>
          </div>
          <button type='submit'>정보수집 동의 및 전송</button>
        </form>
      </div>
      <div className='box-agree'>
        <ul>
          <li>
            <p>1.개인정보 보호를 위한 이용자 동의사항</p>
            <p>
              개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체
              없이 파기합니다.
            </p>
            <p>
              단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간동안
              보존합니다.
            </p>
            <p>
              -계약자의 계약 또는 청약 등에 관한 기록 1년(전자상거래 등에서의
              소비자 보호에 관한 법률)
            </p>
          </li>
          <li>
            <p>2. 수집하는 개인정보 항목</p>
            <p>
              회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은
              개인정보를 수집하고 있습니다.
            </p>
            <p>- 수집항목 : 문의자 성함, 연락처</p>
            <p>- 개인정보 수집방법 : 홈페이지 관심고객등록 항목</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
