import { Form } from '@/components/contact/ContactForm';

export async function sendEmail(email: Form) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패하였습니다.');
  }
  return data;
}
