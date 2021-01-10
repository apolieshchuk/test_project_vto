import request from 'supertest';
import app from '../app';

describe('Test IndexController', () => {
  it('Invalid Data!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[".", ".", "."],["#", "#", "0"]]',
    });
    expect(result.status).toBe(400);
  });
  it('Invalid Data!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[]]',
    });
    expect(result.status).toBe(400);
  });
  it('Invalid Data!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[]',
    });
    expect(result.status).toBe(400);
  });
  it('Invalid Data!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[".", ".", "."],["#", "#", "."]',
    });
    expect(result.status).toBe(400);
  });
  it('No turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[".", ".", "."],["#", "#", "."],[".", ".", "."],[".", "#", "#"],[".", ".", "#"]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(-1);
  });
  it('No turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[".", ".", "."],["#", "#", "."],[".", ".", "."],[".", "#", "#"],[".", "#", "."]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(-1);
  });
});
