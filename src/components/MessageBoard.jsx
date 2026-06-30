// ── MessageBoard ──────────────────────────────────────────────────────
// Message board with add and delete message functionality
import { useState } from "react";

// ── Component ──────────────────────────────────────────────────────────
const MessageBoard = () => {
	// ── State ─────────────────────────────────────────────────────────
	const [messages, setMessages] = useState([
		{ id: 1, text: "Hello all ! This is first message." },
		{ id: 2, text: "Hello all ! This is second message." },
		{ id: 3, text: "Hello all ! This is third message." },
	]);
	const [inputValue, setInputValue] = useState("");

	// ── Handlers ──────────────────────────────────────────────────────
	const handleSubmit = () => {
		const trimmed = inputValue.trim();
		if (!trimmed) return;

		const newMessage = { id: Date.now(), text: trimmed };
		setMessages([...messages, newMessage]);
		setInputValue("");
	};

	const handleDelete = (id) => {
		setMessages(messages.filter((msg) => msg.id !== id));
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") handleSubmit();
	};

	// ── Render ────────────────────────────────────────────────────────
	return (
		<div className="app-wrapper">
			<h1 className="app-title">Message board</h1>
			<div className="message-input-container">
				<label>
					<input
						id="message-text"
						name="message-text"
						type="text"
						placeholder="Enter message here"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
				</label>
				<button className="submit-message-button" onClick={handleSubmit}>Submit</button>
			</div>
			<div className="board">
				{messages.map((msg) => (
					<div key={msg.id} className="message">
						<h1>{msg.text}</h1>
						<button className="delete-button" onClick={() => handleDelete(msg.id)}>x</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MessageBoard;
