'use server';

import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  address: z.string().min(10, "Address must be at least 10 characters."),
});

export type CheckoutFormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export async function submitCheckoutForm(
  prevState: CheckoutFormState,
  formData: FormData
): Promise<CheckoutFormState> {
  const validatedFields = checkoutSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      message: `Please correct the errors: ${errorMessages}`,
      status: 'error',
    };
  }

  // In a real application, you would save this data and redirect to a payment provider.
  console.log('Checkout form submitted:', validatedFields.data);

  // For this demo, we'll just return a success message.
  return {
    message: 'Your details have been received. You will now be redirected to payment.',
    status: 'success',
  };
}
