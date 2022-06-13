## Just a quick demo to answer the question:

### Can I perform multiple synchronous form submissions while the first of them is still being processed on the back-end?

It depends on the browser.

In latest Firefox (101) - it's not possible - only the first POST request is dispatched & processed.

In latest Chrome (102) / Edge (102) - it's possible - you can generate multiple requests by clicking submit / enter and each of it is processed.

All test performed on Windows 11.

---

To start testing: `npm i` (installing dependencies) & `npm run start` (running a server on localhost:3000)
