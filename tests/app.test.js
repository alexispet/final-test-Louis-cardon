import request from 'supertest';
import app from '../app.js'

describe('GET /post', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/post')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
