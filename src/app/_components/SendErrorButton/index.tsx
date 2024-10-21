'use client';

// For checking Sentry settings
export function SendErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('ERROR OCCURRED');
      }}
    >
      Send Error
    </button>
  );
}
