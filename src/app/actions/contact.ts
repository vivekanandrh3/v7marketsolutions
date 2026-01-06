'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      message: `${errorMessages}`,
      status: 'error',
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    status: 'success',
  };
}
