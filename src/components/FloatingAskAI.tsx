import { useState } from "react";
import styles from "./FloatingAskAI.module.css";

export default function FloatingAskAI() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);

async function askAI() {
  if (!question.trim()) return;

  const userMsg = { role: "user" as const, text: question };

  setMessages((prev: { role: "user" | "ai"; text: string }[]) => [
    ...prev,
    userMsg,
  ]);

  setQuestion("");

  const res = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: userMsg.text }),
  });

  const data = await res.json();

  const aiMsg = { role: "ai" as const, text: data.answer };

  setMessages((prev: { role: "user" | "ai"; text: string }[]) => [
    ...prev,
    aiMsg,
  ]);
}


  return (
    <>
      {/* Floating Button */}
      <button className={styles.fab} onClick={() => setOpen(true)}>
        Ask AI
      </button>

      {/* Popup */}
      {open && (
        <div className={styles.popup}>
          <div className={styles.header}>
            <span>📘 Physical AI Tutor</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className={styles.chat}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? styles.user : styles.ai}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className={styles.inputBox}>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask from the textbook..."
            />
            <button onClick={askAI}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
