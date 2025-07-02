// src/services/emails/verification.ts

export const createVerificationEmail = (code: string, name = 'friend') => {
    return {
        subject: 'Registration code',
        text: `Hello dear ${name}!

We're glad to have you join Blue Tomato.

Your verification code is: ${code}

Please enter this code in the registration form. This code is valid for 1 minute.

— The Blue Tomato Team`,

        html: `
      <div style="font-family: sans-serif; font-size: 16px; color: #333">
        <p>Hello dear <strong>${name}</strong>!</p>
        <p>We're glad to have you join <strong>Blue Tomato</strong> 🍅</p>
        <p>Your verification code is:</p>
        <p style="font-size: 24px; font-weight: bold; color: #000">${code}</p>
        <p>Please enter this code in the registration form. This code is valid for 1 minute.</p>
        <br />
        <p>— The Blue Tomato Team</p>
      </div>
    `,
    };
};
