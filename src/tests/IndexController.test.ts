import request from 'supertest';
import app from '../app';

describe('Test IndexController', () => {
  it('10 turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[[".", ".", "."],["#", "#", "."],[".", ".", "."],[".", "#", "#"],[".", ".", "."]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(10);
  });
  it('23 turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: `[
        [".", "#", ".", ".", ".", ".", ".", "#"],
        [".", "#", ".", "#", "#", "#", ".", "."],
        [".", "#", ".", "#", ".", ".", ".", "#"],
        [".", "#", ".", "#", ".", "#", "#", "#"],
        [".", ".", ".", "#", ".", ".", ".", "."]
        ]`,
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(23);
  });
  it('0 turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[["."]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(0);
  });
  it('4 turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[["."],["."],["."],["."],["."]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(4);
  });
  it('5 turns!', async () => {
    const result = await request(app).post('/maze').send({
      maze: '[ [".",  ".",  ".",  ".",  ".",  "."]]',
    });
    expect(result.status).toBe(200);
    expect(result.body.data).toBe(5);
  });
});
