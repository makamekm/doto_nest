import { toMatchImageSnapshot } from 'jest-image-snapshot';
import 'jest-environment-puppeteer';
import config from '../nuxt.config';
import app, {tryStartBootstrap} from '../api/main';
import { Server } from 'net';
import getPort from 'get-port';

jest.setTimeout(60000);

process.env.IS_EXPRESS = 'true';

config.dev = true;
let port: number;

let server: Server;

beforeAll(async () => {
  port = await getPort();
  await tryStartBootstrap();
  await new Promise(r => {
    server = app.listen(port, r);
  });
});

afterAll(async () => {
  await new Promise(r => server.close(r));
});

expect.extend({ toMatchImageSnapshot });

export const find = async (selector) => {
  await page.waitForSelector(selector);
  return page.$(selector);
};

export const findAll = async (selector) => {
  await page.waitForSelector(selector);
  return page.$$(selector);
};

export const containsText = async (text, wrapperSelector) => {
  const textSelector = `//text()[contains(.,'${text}')]`;
  const wrapper = wrapperSelector ? await find(wrapperSelector) : page;

  await page.waitForXPath(textSelector);
  const matches = await wrapper!.$x(textSelector);

  return matches.length > 0;
};

export const open = url => page.goto(`http://localhost:${port}${url}`, { waitUntil: `networkidle0` });
