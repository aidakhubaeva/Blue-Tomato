import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-code', async (req, res) => {
    const { email, code } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Blue Tomato <onboarding@resend.dev>',
            to: email,
            subject: 'Registration code',
            html: `<p>Hello dear friend! 👋</p><p>Here is your code: <strong>${code}</strong></p>`,
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});