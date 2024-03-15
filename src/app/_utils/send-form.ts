'use server';

export type SendFormState = {
  isSuccess?: boolean;
  email?: string;
  username?: string;
  message?: string;
};

export async function sendFormData(_: SendFormState, formData: FormData) {
  return {
    isSuccess: true,
    email: formData.get('email')?.toString(),
    username: formData.get('username')?.toString(),
    message: formData.get('message')?.toString(),
  };
}
