# Token Generator – Development Plan

## 1. Goal

Build a backend-driven token generation system for a clinic queue where:

* Each patient receives a **unique sequential token**
* Tokens are valid **only for the current day**
* Order is controlled **entirely by the backend**
* Frontend only **requests and displays** tokens

---

## 2. System Architecture

### Frontend (React)

Responsibilities:

* Show patient input form (name, phone)
* Send POST request to backend
* Display generated token and confirmation message
* Handle loading and error states

No business logic or token calculation happens in React.

---

### Backend (Express)

Responsibilities:

* Validate incoming patient data
* Generate next sequential token for the day
* Store patient record
* Return token response to frontend
* Maintain queue integrity

Backend is the **single source of truth**.

---

## 3. API Design

### Create Token

**POST** `/api/tokens`

Request body:

```json
{
  "name": "Patient Name",
  "phone": "9876543210"
}
```

Response:

```json
{
  "token": 12,
  "name": "Patient Name",
  "status": "waiting",
  "date": "YYYY-MM-DD",
  "createdAt": "timestamp"
}
```

---

## 4. Token Generation Logic

Steps executed in backend:

1. Get **current date**
2. Filter stored tokens for **today**
3. Determine next token:

   * If none exist → token = **1**
   * Else → token = **lastToken + 1**
4. Create patient object:

   * token number
   * name
   * phone
   * status = `"waiting"`
   * date
   * timestamp
5. Save record
6. Return token data to frontend

---

## 5. Data Structure

Patient record format:

```json
{
  "token": Number,
  "name": String,
  "phone": String,
  "status": "waiting" | "serving" | "done",
  "date": "YYYY-MM-DD",
  "createdAt": Timestamp
}
```

---

## 6. Storage Strategy (Version 1)

Start simple:

* Use **in-memory array** or **JSON file**
* Reset queue **manually each day**

Future upgrade:

* MongoDB database
* Automatic daily reset
* Multiple doctor queues

---

## 7. Frontend–Backend Flow

1. User enters name and phone in React form
2. React sends POST request to `/api/tokens`
3. Express generates and stores token
4. Express returns token response
5. React displays:

   * Token number
   * Waiting confirmation

---

## 8. Validation Rules

Backend must ensure:

* Name is not empty
* Phone number format is valid
* Token numbers are never duplicated
* Tokens remain sequential per day

---

## 9. Milestones

### Phase 1 – Basic Token Generator

* Express server setup
* POST `/api/tokens` working
* Sequential token logic
* Simple React form + display

### Phase 2 – Queue Management

* Get all today’s tokens API
* Doctor “Next Patient” control
* Status updates

### Phase 3 – Enhancements

* Persistent database (MongoDB)
* Auto daily reset
* Real-time updates (Socket.IO)
* Estimated waiting time

---

## 10. Success Criteria

The token generator is complete when:

* Multiple patients can be added without duplicate tokens
* Tokens always increase sequentially
* Frontend correctly displays generated token
* System works reliably for a full clinic day

---

## 11. Next Step

Begin with:
**Express route for POST `/api/tokens` and in-memory storage.**
