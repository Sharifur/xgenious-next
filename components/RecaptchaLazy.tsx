'use client';

import dynamic from 'next/dynamic';
import { ComponentProps, forwardRef } from 'react';

const ReCAPTCHAComponent = dynamic(
  () => import('react-google-recaptcha').then((mod) => mod.default),
  { ssr: false }
) as any;

type RecaptchaProps = ComponentProps<typeof ReCAPTCHAComponent>;

const RecaptchaLazy = forwardRef<any, RecaptchaProps>((props, ref) => (
  <ReCAPTCHAComponent ref={ref} {...props} />
));

RecaptchaLazy.displayName = 'RecaptchaLazy';

export default RecaptchaLazy;
