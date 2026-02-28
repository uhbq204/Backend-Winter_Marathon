import * as React from "react";

interface Props {
  url: string;
  appName?: string;
}

export default function ResetPasswordEmail({
  url,
  appName = "Your App",
}: Props) {
  const previewText = `Сброс пароля в ${appName}`;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Сброс пароля</title>
      </head>

      <body style={body}>
        {/* preview text */}
        <div style={preview}>{previewText}</div>

        <div style={container}>
          <div style={card}>
            <div style={logo}>{appName}</div>

            <h1 style={title}>Сброс пароля</h1>

            <p style={text}>
              Мы получили запрос на сброс пароля.
              <br />
              Нажмите кнопку ниже, чтобы установить новый пароль.
            </p>

            <a href={url} style={button}>
              Сбросить пароль
            </a>

            <p style={linkText}>
              Если кнопка не работает, используйте ссылку:
            </p>

            <a href={url} style={link}>
              {url}
            </a>

            <p style={expire}>Ссылка действительна ограниченное время.</p>
          </div>

          <p style={footer}>
            Если вы не запрашивали сброс пароля — просто проигнорируйте это
            письмо.
          </p>
        </div>
      </body>
    </html>
  );
};

/* styles */

const body: React.CSSProperties = {
  margin: 0,
  padding: 0,
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif',
};

const preview: React.CSSProperties = {
  display: "none",
  overflow: "hidden",
  opacity: 0,
  maxHeight: 0,
  maxWidth: 0,
};

const container: React.CSSProperties = {
  maxWidth: 520,
  margin: "40px auto",
  padding: "0 16px",
};

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: 14,
  padding: "32px 28px",
  textAlign: "center",
};

const logo: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 24,
};

const title: React.CSSProperties = {
  fontSize: 22,
  marginBottom: 16,
};

const text: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: "#52525b",
  marginBottom: 28,
};

const button: React.CSSProperties = {
  display: "inline-block",
  padding: "14px 22px",
  backgroundColor: "#111827",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 24,
};

const linkText: React.CSSProperties = {
  fontSize: 13,
  color: "#71717a",
  marginBottom: 8,
};

const link: React.CSSProperties = {
  fontSize: 13,
  color: "#2563eb",
  wordBreak: "break-all",
};

const expire: React.CSSProperties = {
  fontSize: 12,
  color: "#a1a1aa",
  marginTop: 20,
};

const footer: React.CSSProperties = {
  textAlign: "center",
  fontSize: 12,
  color: "#a1a1aa",
  marginTop: 20,
};