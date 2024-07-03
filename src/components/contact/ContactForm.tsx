'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '@/components/contact/Banner';
import { sendEmail } from '@/service/contact';

export interface Form {
  from: string;
  subject: string;
  message: string;
}

const LABEL = 'font-bold';
const INPUT = 'mb-2 text-black';

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(form)
      .then(() => {
        setBanner({ message: '메일 전송 성공', state: 'success' });
      })
      .catch(() => {
        setBanner({ message: '메일 전송 실패', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="m-4 flex w-full max-w-md flex-col gap-2 rounded-xl bg-neutral-600 p-4 text-white shadow-xl"
      >
        <label htmlFor="from" className={LABEL}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className={INPUT}
        />
        <label htmlFor="subject" className={LABEL}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className={INPUT}
        />
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className={`${INPUT} resize-none`}
        />
        <button className="rounded-md bg-gray-100 text-gray-800">Submit</button>
      </form>
    </>
  );
}
