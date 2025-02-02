const http = require('http');
const test = require('ava');
const got = require('got');
const app = require("../index.js")

test.before(async (t) => {
	t.context.server = http.createServer(app);
    const server = t.context.server.listen();
    const { port } = server.address();
	t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
	t.context.server.close();
});

//Test for GET Author
test("GET Author", async (t) => {
    const authorsId = 0
	const { body, statusCode } = await t.context.got.get(`authors/${authorsId}`);
    t.truthy(body, "Body exists")
    t.is(body.id, 0, "Body id exists")
    t.is(body.name, "name", "Body name exists")
    t.is(statusCode, 200, "Status Code is 200")

});

//Test for DELETE Author
test("DELETE Author", async (t) => {
    const authorsId = 0
	const {statusCode } = await t.context.got.delete(`authors/${authorsId}`);

	t.is(statusCode, 200);
});

//Test for EDIT Author
test("PUT Author", async (t) => {
    const authorsId = 0
    const requestBody = {
        name : "lala"
    }
	const { body, statusCode } = await t.context.got.put(`authors/${authorsId}`, {json : requestBody});

    t.is(body.name, "name", "Body name exists")
    t.is(body.id, 0, "Body id exists")
	t.is(statusCode, 200);
});

//Test for POST Author
test("POST Author", async (t) => {
    const requestBody = {
        name : "lala"
    }
	const { body, statusCode } = await t.context.got.post(`authors`, {json : requestBody});
    t.truthy(body, "Body exists")
    t.is(body.name, "name", "Body name exists")
	t.is(statusCode, 200);
    t.is(body.id, 0, "Body id exists")
});

//Test for GET Authors
test("GET Authors", async (t) => {

	const { body, statusCode } = await t.context.got.get(`authors`);

    t.truthy(body, "Body exists")
    t.is(body[1].id, 0, "Body id exists")
    t.is(body[1].name, "name", "Body name exists")
    t.is(statusCode, 200, "Status Code is 200")

});

//Test for DELETE Book
test("DELETE Book", async (t) => {
    const bookId = 0
	const { statusCode } = await t.context.got.delete(`books/${bookId}`);

	t.is(statusCode, 200);
    
});

//Test for GET Book
test("GET Book", async (t) => {
    const bookId = 0
	const { body, statusCode } = await t.context.got.get(`books/${bookId}`);
    t.truthy(body, "Body exists")
    t.is(body.id, 0, "Body id exists")
    t.is(body.category_id, 1, "Body name exists")
    t.is(statusCode, 200, "Status Code is 200")
});

//Test for EDIT Book
test("PUT Book", async (t) => {
    const bookId = 0
    const requestBody = {
        "category_id" : 1,
        "published_year" : 5,
        "id" : 0,
        "title" : "title",
        "author_id" : 6
    }
	const { body, statusCode } = await t.context.got.put(`books/${bookId}`, {json : requestBody});
    t.truthy(body, "Body exists")
    t.is(body.category_id, 1, "Body name exists")
    t.is(body.id, 0, "Body id exists")
	t.is(statusCode, 200);
});

//Test for GET Books
test("GET Books", async (t) => {

	const { body, statusCode } = await t.context.got.get(`books`);
    t.truthy(body, "Body exists")
    t.is(body[0].id, 0, "Body id exists")
    t.is(body[0].category_id, 1, "Category id exists")
    t.is(statusCode, 200, "Status Code is 200")
});