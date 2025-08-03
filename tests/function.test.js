const request = require('supertest');
const http = require('http');

const handler = require('../function/index');

function createServer(fn) {
    return http.createServer((req, res) => {
        const context = {
            req,
            res,
            done: () => {},
            res: {}
        };
        fn(context, req);
        res.writeHead(context.res.status, { 'Content-Type': 'text/plain' });
        res.end(context.res.body);
    });
}

describe('Azure Function', () => {
    it('should return Hello, World!', async () => {
        const server = createServer(handler);
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello, World!");
    });

    it('should respond with status 200', async () => {
        const server = createServer(handler);
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
    });

    it('response body should not be empty', async () => {
        const server = createServer(handler);
        const res = await request(server).get('/');
        expect(res.text.length).toBeGreaterThan(0);
    });
});
